import React, { useEffect, useState } from "react";
import "./admin.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Admin = () => {
  const [DATA, setDATA] = useState([]);
  const [update, setUpdate] = useState(false);
  const [id, setUserId] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();

  const getData = () => {
    fetch("http://localhost/getFormData")
      .then((res) => res.json())
      .then((response) => setDATA(response.CONTACTS));
  };

  const getOneData = (item) => {
    setUserId(item._id);
    setName(item.name);
    setEmail(item.email);
    setNumber(item.number);
    setContent(item.content);
    setSubject(item.subject);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (id) => {
    fetch(`http://localhost/editData/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        number: number,
        email: email,
        subject: subject,
        content: content,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.UPDATE_USER.acknowledged === true) {
          swal(" Your data has been updated!", {
            icon: "success",
          });
          getData();
        } else if (response.UPADTE_USER.acknowledged === false) {
          swal("Declined", "Unable to update", "info");
        }
      })
      .catch((error) => console.log(error));
  };

  const handelDelete = (e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost/removeData/${e}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.DELETE_USER.deletedCount === 1) {
              swal(" Your data has been deleted!", {
                icon: "success",
              });
              getData();
            } else if (response.DELETE_USER.deletedCount === 0) {
              swal("Declined", "File not deleted", "info");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className="Admin">
      {update ? (
        <div className="editData">
          <span className="cross" onClick={() => setUpdate(false)}>
            <RxCross2 />
          </span>

          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="field"
            value={name}
            type="text"
          />
          <input
            placeholder="Number"
            onChange={(e) => setNumber(e.target.value)}
            className="field"
            value={number}
            type="text"
          />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="field"
            value={email}
            type="text"
          />
          <input
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            className="field"
            value={subject}
            type="text"
          />
          <input
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            className="field"
            value={content}
            type="text"
          />

          <button
            className="btn field btn-light "
            onClick={() => handleEdit(id)}
          >
            Edit
          </button>
        </div>
      ) : (
        <div></div>
      )}

      <table className="table">
        <thead className="table-dark">
          old
          <tr>
            <th scope="col">S No.</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Content</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((item) => {
            return (
              <tr key={item._id}>
                <th scope="row">{item._id}</th>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.content}</td>
                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-dark active"
                      aria-current="page"
                      onClick={() => {
                        // navigate(`/Update/${item._id}`)
                        setUpdate(true);
                        getOneData(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-light"
                      onClick={() => handelDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;

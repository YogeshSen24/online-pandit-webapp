import React from 'react'
import './video.css'
import poster from '../../assets/pandit__video-bg.png'
import {MdFileDownload} from 'react-icons/md'
import {FaSmileBeam} from 'react-icons/fa'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'



const Video = () => {
  return (
    <>
    
    <div className='section__video'>
      <span className="video__container">
        <video poster={poster} src=""></video>
      </span>
    </div>



    <div className="section__video--footer">
      
      <div className='footer-subpart'>
      <div className='footer__container'>
        <div className='footer__left'>
          <h1>90</h1>
        </div>
        <div className='footer__right'>
          <div className='icon'>
            <MdFileDownload/>
          </div>
          <div className="paragraph">
            <p>APP DOWNLODES</p>
          </div>
        </div>
      </div>
      <div className='footer__container'>
        <div className='footer__left'>
          <h1>120</h1>
        </div>
        <div className='footer__right'>
          <div className='icon'>
            <FaSmileBeam/>
          </div>
          <div className="paragraph">
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
      </div>
      <div className='footer-subpart'>
      <div className='footer__container'>
        <div className='footer__left'>
          <h1>62</h1>
        </div>
        <div className='footer__right'>
          <div className='icon'>
            <AiFillStar/>
          </div>
          <div className="paragraph">
            <p>Success Astrologers</p>
          </div>
        </div>
      </div>
      <div className='footer__container'>
        <div className='footer__left'>
          <h1>512</h1>
        </div>
        <div className='footer__right'>
          <div className='icon'>
            <BsFillPersonCheckFill/>
          </div>
          <div className="paragraph">
            <p>Qualified Pandits</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    
    </>

  )
}

export default Video

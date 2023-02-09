import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
const Socials = () => {
  return (
    <div className='header__socials'>
        <a id='social' href='https://www.linkedin.com/in/aditya-shukla-sde/' target="_blank"><BsLinkedin/></a>
        <a  id='social' href='https://www.instagram.com/_i_am_adi/?hl=en' target="_blank"><BsInstagram/></a>
        <a  id='social' href='https://github.com/AdityaShukla14/AdityaShukla14071997' target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default Socials
import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
const SocialMedia = () => {
    const openTwitterAccount = () => {
        window.open('https://x.com/mecskyverse', '_blank');
    };
    const twitterAccountUrl = 'https://x.com/mecskyverse';
    const instagramAccountUrl = 'https://instagram.com/mecskyverse'
    const githubAccountUrl = 'https://github.com/mecskyverse'
    return (

        <div className='app__social'>
            {/* <div onClick={openTwitterAccount}></div> */}
            <a href={githubAccountUrl} target="_blank" rel="noopener noreferrer"><div><BsGithub /></div></a>
            <a href={twitterAccountUrl} target="_blank" rel="noopener noreferrer"><div><BsTwitter /></div></a>
            <a href={instagramAccountUrl} target="_blank" rel="noopener noreferrer"><div><BsInstagram /></div></a>
        </div >
    )
}

export default SocialMedia
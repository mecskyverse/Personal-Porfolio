import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'
import { AppWrap } from '../../wrapper'
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}
const Header = () => {
    return (
        <div className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__header-info'
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className='head-text'>Aakash</h1>
                        </div>
                    </div>
                    <div className='tag-cmp app__flex'>
                        <p className="p-text">Blockchain Developer</p>
                        <p className="p-text">Full Stack Developer</p>
                        {/* <p className="p-text">Backend Developmer</p> */}
                        {/* <p className="p-text">Technical Writer</p> */}

                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img'>
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeOut', }}
                    className='overlay_circle'
                    src={images.circle}
                    alt="profile_circle"

                />
            </motion.div>
            <motion.div variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.redux, images.react, images.sass].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}

            </motion.div>
        </div >
    )
}

export default AppWrap(Header, 'home');
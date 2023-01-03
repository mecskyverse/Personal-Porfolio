import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.scss'

const abouts = [
    { title: 'Web Development', description: 'I am good at Web Devlopment', imgUrl: '' },
    { title: 'Blockchain Development', description: ' I can code Dapps and Smart Contracts', imgUrl: '' },
    { title: 'Frontend Development', description: 'React is what I use for my Frontend Development', imgUrl: '' },
    { title: 'Blogger', description: 'I am also good at Technical Writing', imgUrl: '' }
]
const About = () => {
    return (
        <>
            <h2 className='head-text'>
                I know that
                <span>Good Design</span>
                <br />
                means
                <span>Good Business</span>
            </h2>
            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profiles-item"
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default About
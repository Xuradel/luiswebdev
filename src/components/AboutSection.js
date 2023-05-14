import React, {useEffect} from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'


function AboutSection() {
useEffect(()=>{
    AOS.init({duration: 2000})
},[])

    return (
        <div className='about' id='about-section' data-aos="fade-right">
            <h1><span className='gold'>About</span> me</h1>
            <div className='about-section' >
                <div className='about-text'>
                    <p className="about-bio">I'm a Front End Developer with passion for building beautiful, creative
                        and user friendly websites, I'm
                        very excited to put my skills to use in a professional setting. <br /><br />
                        I'm confident that I can be a valuable asset to any
                        web development team in creating beautiful and engaging digital experiences.<br /><br />
                        I will love to hear from you. Whether it's a project, job opportunity, or just chat.
                        Feel free to contact me.
                    </p>
                </div>
                <div className='about-image'>
                    <img src={require("../images/about.png")} alt='aboutme-image' className='image-bio'></img>
                </div>
            </div>
        </div>
    )
}

export default AboutSection

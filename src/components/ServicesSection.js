import React, {useEffect} from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

function ServicesSection() {
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
    return (
        <div className='services' id='services-section' data-aos="fade-right" >
            <h2><span className='gold'>My</span> Services</h2>
            <div className='services-section'>
                <div className='service'>
                    <img src={require("../images/web.png")} className='service-logo' alt='logoimg'></img>
                    <h1>Web Development</h1>
                    <p>I'm focused in creating successful responsive websites that are quick to load,
                        easy to use, and built around best programming practices. My area of expertise
                        is webflow-based front-end programming specialised in React.
                    </p>
                </div>
                <div className='service'>
                    <img src={require("../images/maint.png")}className='service-logo' alt='logoimg'></img>
                    <h1>Web Maintenance</h1>
                    <p>Keeping a website up to date and running smoothly as well as performing
                        optimally is known as website maintenance. This is important to attract and
                        retain visitors. I can also adapt your website to work on all devices.
                    </p>
                </div>
                <div className='service'>
                    <img src={require("../images/seo.png")}className='service-logo' alt='logoimg'></img>
                    <h1>SEO</h1>
                    <p>SEO is important because it improves the appearance and positioning
                        of web pages in organic search results. Since this is the way most people
                        discover new things online, a good SEO strategy is essential for improving
                        traffic to your website.
                    </p>
                </div>
                <div className='service'>
                    <img src={require("../images/design.png")}className='service-logo' alt='logoimg'></img>
                    <h1>UX/UI Design</h1>
                    <p>UX is an important part of any website, it's the overall feel of the experience using
                        the application, UI is how the interfaces look and function, my priority is to create
                        intuitive aesthetically-pleasing, interactive interfaces.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection

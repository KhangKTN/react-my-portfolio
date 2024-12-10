import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    return (
        <div className="arlo_tm_section relative" id="about">
            <div className="arlo_tm_about_wrapper_all">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>About Me</h3>
                        <span>Main informations about me</span>
                    </div>
                    <div className="arlo_tm_about_wrap">
                        <div className="author_wrap">
                            <div className="leftbox">
                                <div className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.1">
                                        <img src="src/assets/img/about/550x640.jpg" alt="550x640" />
                                        <div className="inner" data-img-url="https://i.pinimg.com/736x/25/65/a5/2565a5d82c9e492bf5d7875cd36844b1.jpg"></div>
                                    </div>
                                    <div className="border layer" data-depth="0.2">
                                        <img src="src/assets/img/about/550x640.jpg" alt="550x640" />
                                        <div className="inner"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>I'm Khang and&nbsp;
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                'ReactJS Developer',
                                                1500, // wait 1s before replacing "Mice" with "Hamsters"
                                                'Java Developer',
                                                1500,
                                                'NodeJS Developer',
                                                1500,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ display: 'inline-block' }}
                                            repeat={Infinity}
                                        />
                                    </h4>
                                </div>
                                <div className="definition">
                                    <p>Hi! My name is <strong>Khang Phan Dinh</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <span><label>Birthday:</label> 19/11/2002</span>
                                        </li>
                                        <li>
                                            <span><label>Gender:</label> Male</span>
                                        </li>
                                        <li>
                                            <span><label>City:</label> Thua Thien Hue, Viet Nam</span>
                                        </li>
                                        <li>
                                            <span><label>Interests:</label> Football, Music</span>
                                        </li>
                                        <li>
                                            <span><label>Study:</label> Hue University of Science</span>
                                        </li>
                                        <li>
                                            <span><label>Degree:</label> Bachelor</span>
                                        </li>
                                        <li>
                                            <span><label>Facebook:</label> <a target='blank' href="https://facebook.com/khangktn63">Khang KTN</a></span>
                                        </li>
                                        <li>
                                            <span><label>Tiktok:</label> <a target='blank' href="https://tiktok.com/@khangktn1">@khangktn1</a></span>
                                        </li>
                                        <li>
                                            <span><label>Phone:</label>+83 ******994</span>
                                        </li>
                                        <li>
                                            <span><label>Github:</label> <a href="https://github.com/KhangKTN" target='blank'>https://github.com/KhangKTN</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="buttons_wrap">
                                    <ul>
                                        <li>
                                            <a href='src/assets/CVPhanDinhKhang.pdf' download={true}><span>Download CV</span></a>
                                        </li>
                                        {/* <li className="anchor">
                                            <a href="#contact"><span>Send Message</span></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
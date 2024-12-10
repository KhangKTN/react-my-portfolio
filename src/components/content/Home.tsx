import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className="arlo_tm_section" id="home">
            <div className="arlo_tm_hero_header_wrap">
                <div className="arlo_tm_universal_box_wrap">
                    <div className="bg_wrap">
                        <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                        <div className="overlay_color hero"></div>
                    </div>
                    <div className="content hero">
                        <div className="inner_content">
                            <div className="image_wrap">
                                <img src="src/assets/img/hero/img.jpg" alt="hero" />
                            </div>
                            <div className="name_holder">
                                <h3>Khang <span>Phan Dinh</span></h3>
                            </div>
                            <div className="text_typing">
                                <p>I'm a &nbsp;
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
                                        // style={{ display: 'inline-block' }}
                                        repeat={Infinity}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="arlo_tm_arrow_wrap bounce anchor">
                        <a href="#about"><i className="xcon-angle-double-down"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
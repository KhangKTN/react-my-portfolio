import React from 'react'
import Leftpart from '~/components/Leftpart'
import Preloader from '~/components/Preloader'
import Rightpart from '~/components/Rightpart'
import Menu from '~/components/mobile/Menu'

const Portfolio = () => {
    return (
        <div className="arlo_tm_wrapper_all">

            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close"><a href="#"></a></span>
            </div>

            {/* <Preloader/> */}

            {/* <!-- MOBILE MENU --> */}
            <Menu/>

            {/* <!-- CONTENT --> */}
            <div className="arlo_tm_content">

                {/* <!-- LEFTPART --> */}
                <Leftpart/>

                {/* <!-- RIGHTPART --> */}
                <Rightpart/>

                {/* <a className="arlo_tm_totop" href="#"></a> */}

            </div>
        </div>
    )
}

export default Portfolio
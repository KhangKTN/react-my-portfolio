import React from 'react'
import About from '~/components/content/About'
import Home from '~/components/content/Home'
import Skill from '~/components/content/Skill'
import Project from '~/components/content/Project'
import Contact from '~/components/content/Contact'

const Rightpart = () => {
    return (
        <div className="arlo_tm_rightpart">
            <div className="rightpart_inner">
                <Home/>

                {/* <!-- ABOUT --> */}
                <About/>
                {/* <!-- /ABOUT --> */}

                {/* <!-- SKILLS --> */}
                <Skill/>
                {/* <!-- /SKILLS --> */}

                {/* <!-- PROJECTS --> */}
                <Project/>
                {/* <!-- /PROJECTS --> */}

                {/* <!-- CONTACT & FOOTER --> */}
                <Contact/>
                {/* <!-- /CONTACT & FOOTER --> */}

            </div>
        </div>
    )
}

export default Rightpart
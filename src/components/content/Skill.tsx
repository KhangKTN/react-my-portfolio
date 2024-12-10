import React from 'react'
import ProgressBar from '~/components/custom/ProgressBar'

const Skill = () => {
    return (
        <div className='arlo_tm_section' id='skill'>
            <div className='arlo_tm_skills_wrap'>
                <div className='container'>
                    <div className='inner_wrap'>
                        <div className='leftbox'>
                            <div className='arlo_tm_mini_title_holder'>
                                <h4>Frontend Skills</h4>
                                <ul style={{ listStyle: 'inside' }}>
                                    <li>Framework: ReactJS, NextJS, Vue</li>
                                    <li>CSS Library: Bootstrap, TailwindCSS, MUI, Shadcn/UI</li>
                                    <li>State management: Redux Toolkit, Zustand</li>
                                    <li>Response website</li>
                                </ul>
                            </div>
                        </div>
                        <div className='rightbox'>
                            <div className='progress_bar_wrap_total'>
                                <div
                                    className='arlo_tm_progress_wrap'
                                    data-size='small'
                                    data-round='c'
                                    data-strip='off'
                                >
                                    <div className='arlo_tm_progress' data-value='95' data-color='#000'>
                                        <span>
                                            <span className='label'>
                                                HTML/CSS/JS - <span className='experience'>2 years of experience</span>
                                            </span>
                                            {/* <span className='number'>95%</span> */}
                                        </span>
                                        {/* <ProgressBar complete={95} /> */}
                                    </div>
                                    <div className='arlo_tm_progress' data-value='85' data-color='#000'>
                                        <span>
                                            <span className='label'>
                                                ReactJS (JS/TS) -{' '}
                                                <span className='experience'>1.5 years of experience</span>
                                            </span>
                                            {/* <span className='number'>85%</span> */}
                                        </span>
                                    </div>
                                    <div className='arlo_tm_progress' data-value='75' data-color='#000'>
                                        <span>
                                            <span className='label'>
                                                Design UI/UX - <span className='experience'>2 years of experience</span>
                                            </span>
                                            {/* <span className='number'>75%</span> */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='inner_wrap'>
                        <div className='leftbox'>
                            <div className='arlo_tm_mini_title_holder'>
                                <h4>Backend Skills</h4>
                                <ul style={{ listStyle: 'inside' }}>
                                    <li>Languages: Javascript, Typescript, Java</li>
                                    <li>Frameworks: ExpressJS, Fastify, NodeJS, Spring Boot</li>
                                    <li>Databases: SQL Server, MySQL, PostgreSQL, MongoDB</li>
                                    <li>Other: Restful APIs, Docker, Redis</li>
                                </ul>
                            </div>
                        </div>
                        <div className='rightbox'>
                            <div className='progress_bar_wrap_total'>
                                <div
                                    className='arlo_tm_progress_wrap'
                                    data-size='small'
                                    data-round='c'
                                    data-strip='off'
                                >
                                    <div className='arlo_tm_progress' data-value='95' data-color='#000'>
                                        <span>
                                            <span className='label'>
                                                NodeJS (ExpressJS) -{' '}
                                                <span className='experience'>5 years of experience</span>
                                            </span>
                                            <span className='number'>95%</span>
                                        </span>
                                        <div className='arlo_tm_bar_bg'>
                                            <div className='arlo_tm_bar_wrap'>
                                                <div className='arlo_tm_bar'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='arlo_tm_progress' data-value='85' data-color='#000'>
                                        <span>
                                            <span className='label'>
                                                Java (Spring Boot) -{' '}
                                                <span className='experience'>3 years of experience</span>
                                            </span>
                                            <span className='number'>85%</span>
                                        </span>
                                        <div className='arlo_tm_bar_bg'>
                                            <div className='arlo_tm_bar_wrap'>
                                                <div className='arlo_tm_bar'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
import React, { useState } from 'react'
import { Modal } from "antd";

const projectList = [
    {
        id: 1,
        icon: '',
        name: 'Website Ecommerce',
        shortDescription: 'Description 1',
        content: 'Content 1'
    },
    {
        id: 2,
        icon: '',
        name: 'Website ZingMp3 Clone',
        shortDescription: 'Description 2',
        content: 'Content 2'
    },
    {
        id: 3,
        icon: '',
        name: 'Website Booking Appoinment Examination',
        shortDescription: 'Description 3',
        content: 'Content 3'
    }
]

const Project = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [currentSelected, setCurrentSelected] = useState<number>(1)
    const [content, setContent] = useState<string>('This is content')
    
    return (
        <div className="arlo_tm_section" id="projects">
            <div className="arlo_tm_services_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Top Projects</h3>
                        <span>View top amazing my projects</span>
                    </div>
                    <div className="list_wrap">
                        <ul>
                            {projectList.map(item => (
                                <li onClick={() => {setIsShow(true); setCurrentSelected(item.id)}}>
                                    <div className="inner">
                                        <div className="icon">
                                            <img className="svg" src="img/svg/camera-diaphragm.svg" alt="camera-diaphragm" />
                                        </div>
                                        <div className="title_service">
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className="text">
                                            <p>{item.shortDescription}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Modal open={isShow} onCancel={() => setIsShow(false)} footer={false} title={projectList[currentSelected - 1].name}>
                <div>{projectList[currentSelected - 1].content}</div>
            </Modal>
        </div>
    )
}

export default Project
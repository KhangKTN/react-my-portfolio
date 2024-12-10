import React from 'react'
import Progressbar from "@ramonak/react-progress-bar"

interface IProps{
    complete: number
}

const ProgressBar = (props: IProps) => {
    return (
        <Progressbar 
            animateOnRender={true} 
            completed={props.complete} 
            bgColor='#041230'
            height='8px' 
            isLabelVisible={false}
        />
    )
}

export default ProgressBar
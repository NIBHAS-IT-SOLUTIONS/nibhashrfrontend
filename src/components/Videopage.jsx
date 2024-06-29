import React from 'react'
import video from '../video/demovideo.mp4'
import poster from '../video/nibhas.png'
import './Videopage.css'

function Videopage() {

    return (
        <>
            {/* <div className="video-containerparent">
        <h1 className='video-title'>Skill development training programme</h1>
            <div className="video-container">

                
                    <video className='video' poster={poster} controls loop autoplay  >
                        <source src={video} type="video/mp4" />
                    </video>
            </div>
        </div> */}
            <div className="wrapper">
                <div className="left-col">
                    <div className="leftpagecontent">
                        <h1>HOW TO APPROACH AN INTERVIEW BOARD ?</h1>
                        <p>Our faculty team always ready to molding your skills </p>
                    </div>

                </div>
                <div className="right-col">
                    <div className="slider">
                        
                        <video className='video' poster={poster} controls loop autoplay  >
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="slider-content">
                        <h2>Click to play the video</h2>

                    </div>

                </div>
            </div>







        </>
    )
}

export default Videopage
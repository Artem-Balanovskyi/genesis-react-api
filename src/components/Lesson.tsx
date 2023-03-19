import React, { useState, useRef } from "react";
import ReactPlayer from 'react-player'
import { ILesson } from "../models/lesson_interface";

interface LessonProps {
    lesson: ILesson
}

export function Lesson({ lesson }: LessonProps) {
    const [details, setDetails] = useState(false)
    const [isPlaying, setPlaying] = useState(false)
    const videoRef = useRef<any>(null);

    const handleMouseToggle = () => {
        setPlaying(prev => !prev)
    }

    const handlePictureInPicture = () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else {

            console.log("🚀 ~ file: Lesson.tsx:24 ~ handlePictureInPicture ~ videoRef.current:", videoRef.current)
            videoRef.current.requestPictureInPicture();
        }
    };

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
            onClick={handleMouseToggle}
        >
            {isPlaying && <ReactPlayer playing={isPlaying} url={lesson.link} controls muted ref={videoRef} />}


            <button onClick={handlePictureInPicture}>Picture in Picture</button>
            <p className="font-bold">{lesson.title}</p>

        </div >
    )
}
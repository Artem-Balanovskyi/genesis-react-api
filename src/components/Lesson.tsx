import React, { useState, useRef } from "react";
import ReactPlayer from 'react-player'
import { ILesson } from "../models/lesson_interface";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LessonProps {
    lesson: ILesson
}

export function Lesson({ lesson }: LessonProps) {
    const [isPlaying, setPlaying] = useState(false)
    const videoRef = useRef<ReactPlayer | null>(null);

    const handleMouseToggle = () => {
        setPlaying(prev => !prev)
        if (lesson.status === "locked") {
            toast("Sorry, the lesson is locked!");
        }
    }

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
            onClick={handleMouseToggle}
        >
            {lesson.status === 'unlocked' && isPlaying && <ReactPlayer playing={isPlaying} url={lesson.link} controls muted ref={videoRef} />}
            {lesson.status === 'locked' && <ToastContainer />}

            <p className="font-bold">{lesson.title}</p>

        </div >
    )
}
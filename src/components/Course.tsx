import React, { useState } from "react";
import { ICourse } from "../models/course_interface";
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
// Render a YouTube video player
interface CourseProps {
    course: ICourse
}

export function Course({ course }: CourseProps) {
    const [details, setDetails] = useState(false)
    const [isPlaying, setPlaying] = useState(false)

    const btnBgClassName = details ? 'primary' : 'secondary'

    const handleMouseToggle = () => {
        setPlaying(prev => !prev)
    }
    
    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
            onMouseEnter={handleMouseToggle}
            onMouseLeave={handleMouseToggle}
        >
            { course.meta.courseVideoPreview?.link && isPlaying && <ReactPlayer playing={isPlaying} url={course.meta.courseVideoPreview?.link} controls muted/>}
            
            <img src={course.previewImageLink + '/cover.webp'} alt={course.title} />
            <p className="font-bold">{course.title}</p>


            <Link to={course.id}><span className="text-red-600 border py-2 px-4 flex items-center mb-2 font-bold">Push here to view this Course!</span></Link>

            <Button
                onClick={() => setDetails(prev => !prev)}
                variant="contained"
                color={btnBgClassName}
            >{details ? 'Hide Details' : `Show Details`}</Button>

            {details && <div>
                <p className="font-bold">{`Lessons count: ${course.lessonsCount}`}</p>
                <p className="font-bold">Skills:</p>
                <ul>
                    {course.meta.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
                <p className="font-bold">{`Course rating: ${course.rating}`}</p>
            </div>}
        </div >
    )
}
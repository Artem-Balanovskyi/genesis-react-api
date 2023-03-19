import React, { useState } from "react";
import { ICourse } from "../models/course_interface";
import Button from '@mui/material/Button';

interface CourseProps {
    course: ICourse
}

export function Course({ course }: CourseProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'primary' : 'secondary'

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={course.previewImageLink + '/cover.webp'} alt={course.title} />
            <p className="font-bold">{course.title}</p>

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
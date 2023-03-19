import React, { useState } from "react";
import { ICourse } from "../models/course_interface";

interface CourseProps {
    course: ICourse
}

export function SingleCourse({ course }: CourseProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={course.previewImageLink + '/cover.webp'} alt={course.title} />
            <p className="font-bold">{course.title}</p>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide Details' : `Show Details`}
            </button>
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
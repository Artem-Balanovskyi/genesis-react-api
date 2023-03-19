import React from "react";
import { ICourse } from "../models/course_interface";
import ReactPlayer from 'react-player'
import { Lesson } from "./Lesson";

interface CourseProps {
    course: ICourse
}

export function SingleCourse({ course }: CourseProps) {
    
    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <ReactPlayer playing={true} url={course.lessons[0].link} controls />
            <img src={course.previewImageLink + '/cover.webp'} alt={course.title} />
            <p className="font-bold">{course.title}</p>
            
            {course.lessons.map(lesson => <Lesson lesson={lesson} key={lesson.id} />)}
        </div >
    )
}
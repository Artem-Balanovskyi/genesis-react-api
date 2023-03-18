import React from "react";
import { Course } from "../components/Course";
import { useCourses } from "../hooks/courses";

export function CoursesPage() {
    const { courses } = useCourses()

    return (
        <div className='container mx-auto max-w-2xl pt-5'>

            {courses.map(course => <Course course={course} key={course.id} />)}

        </div>
    )
}
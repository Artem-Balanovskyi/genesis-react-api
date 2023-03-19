import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleCourse } from "../components/SingleCourse";
import { useSingleCourse } from "../hooks/singleCourse";

export function SingleCoursePage() {
    const { courseId } = useParams();

    const { course } = useSingleCourse(courseId)

    return (
        <div className='container mx-auto max-w-2xl pt-5'>

            {course && <SingleCourse course={course} key={course.id} />}

        </div>
    )
}
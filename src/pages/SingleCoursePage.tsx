import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleCourse } from "../components/SingleCourse";
import { useSingleCourse } from "../hooks/singleCourse";
import { Loader } from "../components/Loader";

export function SingleCoursePage() {
    const { courseId } = useParams();

    const { course, loading } = useSingleCourse(courseId)

    return (
        <div className='container mx-auto max-w-2xl pt-5'>

            <Loader loading={loading}/>

            {course && <SingleCourse course={course} key={course.id} />}

        </div>
    )
}
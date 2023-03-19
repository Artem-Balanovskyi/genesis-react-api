import React, { useState } from "react";
import { Course } from "../components/Course";
import { useCourses } from "../hooks/courses";
import PaginationBar from '../components/Pagination'
import { Loader } from "../components/Loader";




export function CoursesList() {
    const { courses, loading } = useCourses()
    const [paginationNumber, setPaginationNumber] = useState(1)

    const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        setPaginationNumber(page)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            
            <Loader loading={loading}/>

            {courses.length > 0 && courses[paginationNumber - 1].map(course => <Course course={course} key={course.id} />)}

            {courses.length > 0 && <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">

                <PaginationBar handler={handlePagination} counter={courses.length} />

            </div>}
        </div>
    )
}
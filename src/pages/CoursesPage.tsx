import React, { useState } from "react";
import { Course } from "../components/Course";
import { useCourses } from "../hooks/courses";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function CoursesPage() {
    const { courses } = useCourses()
    const [paginationNumber, setPaginationNumber] = useState(1)

    const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        setPaginationNumber(page)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>

            {courses.length > 0 && courses[paginationNumber - 1].map(course => <Course course={course} key={course.id} />)}

            {
                <Stack spacing={2}>
                    <Pagination
                        onChange={handlePagination}
                        count={3}
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                {...item}
                            />
                        )}
                    />
                </Stack>
            }
        </div>
    )
}
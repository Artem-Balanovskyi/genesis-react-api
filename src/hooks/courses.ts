import axios from "axios"
import { useState, useEffect } from "react"
import { IResponse } from "../models/response_interface"
import { ICourse } from "../models/course_interface"

const JWTToken = process.env.REACT_APP_TOKEN
const url = 'https://api.wisey.app/api/v1/core/preview-courses'

export function useCourses() {
    const [courses, setCourses] = useState<ICourse[][]>([])

    useEffect(() => {
        fetchCourses()
    }, [])

    async function fetchCourses() {
        const courses: ICourse[][] = []
        const { data } = await axios.get<IResponse>(url, { headers: { "Authorization": `Bearer ${JWTToken}` } })

        data.courses.reduce((acc: any, course: ICourse, idx, array) => {
            if (idx === array.length - 1) {
                acc.push(course)
                courses.push(acc)
                return []
            }
            if (acc.length < 10) {
                acc.push(course)
                return acc
            } else {
                courses.push(acc)
                return [course]
            }
        }, [])
        setCourses(courses)
    }

    return { courses }
}
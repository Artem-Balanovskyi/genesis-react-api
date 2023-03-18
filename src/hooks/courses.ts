import axios from "axios"
import { useState, useEffect } from "react"
import { IResponse } from "../models/response_interface"
import { ICourse } from "../models/course_interface"

const JWTToken = process.env.REACT_APP_TOKEN
const url = 'https://api.wisey.app/api/v1/core/preview-courses'

export function useCourses() {
    const [courses, setCourses] = useState<ICourse[]>([])

    async function fetchCourses() {
        const { data } = await axios.get<IResponse>(url , { headers: {"Authorization" : `Bearer ${JWTToken}`} })
        setCourses(data.courses)
    }

    useEffect(() => {
        fetchCourses()
    }, [])

    return { courses }
}
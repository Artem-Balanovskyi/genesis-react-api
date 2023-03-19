import axios from "axios"
import { useState, useEffect } from "react"
import { ICourse } from "../models/course_interface"

const JWTToken = process.env.REACT_APP_TOKEN

export function useSingleCourse(courseId: string | undefined ) {
    const [course, setCourse] = useState<ICourse>()
    
    useEffect(() => {
        fetchCourse()
    }, [])

    const url = `https://api.wisey.app/api/v1/core/preview-courses/${courseId}` 

    async function fetchCourse() {
        const { data } = await axios.get<ICourse>(url , { headers: {"Authorization" : `Bearer ${JWTToken}`} })
        setCourse(data)
    }
    return { course }
}
import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { IResponse } from "../models/response_interface"
import { ICourse } from "../models/course_interface"
import { coursesArraySplitedByTen } from "../helpers/coursesArraySplitedByTen"

const JWTToken = process.env.REACT_APP_TOKEN
const url = 'https://api.wisey.app/api/v1/core/preview-courses'

export function useCourses() {
    const [courses, setCourses] = useState<ICourse[][]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchCourses()
    }, [])

    async function fetchCourses() {
        try {
            setError('')
            setLoading(true)

            const { data } = await axios.get<IResponse>(url, { headers: { "Authorization": `Bearer ${JWTToken}` } })

            const arrSplitedByTen = coursesArraySplitedByTen(data)

            setCourses(arrSplitedByTen)

            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    return { courses, error, loading}
}
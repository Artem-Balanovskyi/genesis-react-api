import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { ICourse } from "../models/course_interface"

const JWTToken = process.env.REACT_APP_TOKEN

export function useSingleCourse(courseId: string | undefined) {
    const [course, setCourse] = useState<ICourse>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchCourse()
    }, [])

    const url = `https://api.wisey.app/api/v1/core/preview-courses/${courseId}`

    async function fetchCourse() {

        try {
            setError('')
            setLoading(true)

            const { data } = await axios.get<ICourse>(url, { headers: { "Authorization": `Bearer ${JWTToken}` } })

            setCourse(data)

            setLoading(false)

        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }

    }
    return { course, error, loading }
}
import { ICourse } from "../models/course_interface"
import { IResponse } from "../models/response_interface"

export function coursesArraySplitedByTen (data: IResponse): ICourse[][] {
    const courses: ICourse[][] = []
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
    
    return courses 
}



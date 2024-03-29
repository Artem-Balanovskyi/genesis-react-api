import { ILesson } from "./lesson_interface"

export interface ICourse {
    id: string,
    title: string,
    tags: string[],
    launchDate: number,
    status: string,
    description: string,
    duration: number,
    lessonsCount: number,
    containsLockedLessons: boolean,
    previewImageLink: string,
    rating: number,
    meta: {
        slug: string,
        skills: string[],
        courseVideoPreview: {
            link: string,
            duration: number,
            previewImageLink: string
        }
    }
    lessons: ILesson[]
}
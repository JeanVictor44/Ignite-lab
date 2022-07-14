import { Lesson } from "./Lesson";
import { gql, useQuery } from '@apollo/client';
import { useMenu } from "../context/Menu";
import { GET_LESSONS_QUERY } from '../graphql/queries'

interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: Date
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY )
    const { isMenuOpen } = useMenu()
    
    const menuVisibility = isMenuOpen ? 'block' : 'hidden'
    return (
        <aside className={`lg:block lg:w-[348px] lg:static lg:h-auto ${menuVisibility} absolute top-[75px] z-50 h-full w-full bg-gray-700 p-6 border-l border-gray-600`}>
            <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block text-center'>
                Cronograma das aulas
            </span>
            <div className='flex flex-col gap-8'>
                { data?.lessons.map(lesson => (
                    <Lesson 
                        key={lesson.id}
                        title={lesson.title} 
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}/>
                ))}
            </div>
        </aside>
    )
}
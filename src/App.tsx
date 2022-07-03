import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

//Para fazer querys graphQL com a sintaxe highlight
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher{
        name
      }
    }
  }
`
interface Lesson {
  id: string;
  title:string;
  teacher: {
    name:string
  }
}
function App() {
  const { data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
   <ul>
      {
        data?.lessons.map( lesson =>(
          <li key={lesson.id}>{lesson.title} - {lesson.teacher.name}</li>
        ))
      }
   </ul>
  )
}

export default App

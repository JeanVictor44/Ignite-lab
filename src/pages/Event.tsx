import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"


export function Event(){
    const { slug } = useParams<{slug: string}>()

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex flex-1 flex-col flex-col-reverse lg:flex-row'>
                {/* carregar automaticamente a primeira aula quando não houver nenhum slug */}
                { slug ? <Video  lessonSlug={slug}/> : <div className='flex-1'/>}
                <Sidebar />
            </main>
            
        </div>
    )
}
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Event(){
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex flex-1 flex-col flex-col-reverse lg:flex-row'>
                <Video />
                <Sidebar />
            </main>
            
        </div>
    )
}
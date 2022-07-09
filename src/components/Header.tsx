import { List, X } from "phosphor-react";
import { useMenu } from "../context/Menu";
import { Logo } from "./Logo";


export function Header() {
    const { isMenuOpen, openMenu, closeMenu} = useMenu()

    return (
        <header className='flex py-5 px-5 w-full bg-gray-700 border-b border-gray-600 justify-between gap-6 items-center lg:justify-center lg:px-0'>
            <Logo />
            
            <div className='flex items-center gap-3 cursor-pointer lg:hidden'>
                Aulas
                {
                    isMenuOpen ? 
                    <X size={32} className='text-blue-500' onClick={() => closeMenu()}/> :
                    <List size={32} className='text-blue-500' onClick={() => openMenu()}/>

                }
                
            </div>
        </header>
    )
}
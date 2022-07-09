import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

interface MenuContext {
    isMenuOpen: boolean;
    openMenu(): void;
    closeMenu():void;
}

const MenuContext = createContext<MenuContext | null>(null)

interface MenuProvider {
    children: ReactNode
}

export const MenuProvider = ({children}: MenuProvider) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const openMenu = useCallback(() => {
        setIsMenuOpen(true)
    }, [])

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false)
    },[])

    const value = useMemo(() => ({    
        isMenuOpen,
        openMenu,
        closeMenu 
         
    }), [isMenuOpen, setIsMenuOpen])
        
    
    return(
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => {
    const context = useContext(MenuContext)
    if(!context){
        throw new Error('useMenu must be used within MenuProvider')
    }
    return context
}
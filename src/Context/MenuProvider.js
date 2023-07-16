import { createContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const handleOpenMenu = () => {
        setMenuOpen(true);
        setOverlay(true);
    }
    const handleCloseMenu = () => {
        setMenuOpen(false);
        setOverlay(false);
    };

    return (
        <MenuContext.Provider value={{menuOpen, overlay, handleOpenMenu, handleCloseMenu}}>
            {children}
        </MenuContext.Provider>
    );

}
export default MenuContext;
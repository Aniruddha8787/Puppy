import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [breedname, setBreedname] = useState(null)
    const changeBreedname = (item) => {
        setBreedname(item)
    }
    return (
        <AppContext.Provider value={{changeBreedname,breedname}}>
            {children}
        </AppContext.Provider>
    )
}
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        // TO Do: return our user information and set our current user
        setCurrentUser({id:1, name:"John Dor", profilePic:"https://images.pexels.com/photos/15293662/pexels-photo-15293662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})
    }


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
};
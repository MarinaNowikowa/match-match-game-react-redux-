import {createContext, useState, useMemo, useEffect} from "react";

export const CurrentUserContext = createContext(null);

export const UserProvider = ({children})=>{
    
    const [currentUser, setCurrentUser] = useState({firstName: "", lastName:"", difficulty:'4'});
    
    const users = JSON.parse(localStorage.getItem('users'))
   
    
    useEffect(()=>{
        if(localStorage.getItem('users') !==null){
           
        const lastUserFromForm = users[users.length-1];
        setCurrentUser(lastUserFromForm)
        } else {
            new Error("error")
        }
    }, [])
    
    const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser,setCurrentUser]);
    
  return (
    <CurrentUserContext.Provider value={value}>
        {children}
    </CurrentUserContext.Provider>
)
}
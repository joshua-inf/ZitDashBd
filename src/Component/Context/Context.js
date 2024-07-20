import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextHandler = createContext()

   
export const MyConctext = ({children}) => {


    const [userData, setUserData] = useState(null)

    const getdata = () => {  
        axios.get("/admin/users")
        .then(res => {
         setUserData(res.data.users)         
        })
        .catch((error)=>{
            console.log(error)
        })

}

useEffect(()=>{
    getdata()
}, [])
    
    return(
        <>
            <ContextHandler.Provider
            value={{
                userData,
                setUserData
            }}
            >
                {children}
            </ContextHandler.Provider>
        </>
    )
}
import React, {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { FooterCard } from "./nav/Footer"
import "./Nutshell.css"

export const Nutshell = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("nutshell_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
    }
    
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
      }
    
return (
  <>
  <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
  <ApplicationViews setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}/>
  <FooterCard/>
  </>
)}

import React, {useState,useEffect,useCallback} from "react";
import { AppContext } from "./createAppContext";
import { dummyCourses } from "../assets/assets";

export const AppContextProvider = (props)=>{
    
    const currency = import.meta.env.VITE_CURRENCY;
    
    const [allCourses,setAllCourses] = useState([]);

    //Fetch all courses
    const fetchAllCourses = useCallback(()=>{
        setAllCourses(dummyCourses)
    },[])

    const value = {
        currency,allCourses
    }

    useEffect( ()=>{
         fetchAllCourses()
    },[fetchAllCourses])

    return (
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )
}
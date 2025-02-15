import React, { createContext, useState } from 'react'


export const addResponseContext=createContext()
export const editresponseContext=createContext()

function ContextApi({children}) {
    const [addResponse,setAddresponse]=useState("")
    const [editresponse,seteditresponse]=useState("")
  return (
    <>
    <editresponseContext.Provider value={{editresponse,seteditresponse}}>
    <addResponseContext.Provider value={{addResponse,setAddresponse}}>

        {children}
    </addResponseContext.Provider>
    </editresponseContext.Provider>
    
    </>
  )
}

export default ContextApi
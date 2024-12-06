"use client"
import { useState } from "react"



export default function Login(){
    const[email,setemail]=useState<String|null>(null);
    const[password,setPassword]=useState<String|null>(null);
   


    return (
        <>
            <div>
                    <input placeholder="email" onChange={(e)=>{setemail(e.target.value)}}></input>
                    <input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <button >
                            login
                    </button>

            </div>
        </>
    )
}
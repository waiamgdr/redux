import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Map = () => {
    const [fac,setFac]=useState()
    useEffect(()=>{
        axios.get("https://catfact.ninja/fact").then((res)=>setFac(res.data.fact)).catch(err=>console.log(err))
    },[])
  return (
    <div>
        
        <p>{fac}</p></div>
  )
}

export default Map
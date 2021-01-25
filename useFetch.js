import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [estado, setEstado] = useState({
        data: null,
        loading: true,
        error: null
    })
    
    useEffect(()=>{
       getQuote()
    },[url])

    const getQuote = async() =>{

        const resp = await fetch(url)
        const datos = await resp.json()

        setEstado({
            datos,
            loading: false,
            error: null
        })
    }

    return estado

}



export default useFetch

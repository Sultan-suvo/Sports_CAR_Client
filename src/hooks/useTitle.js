import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Sports Cars / ${title}`
    },[title])
}

export default useTitle;
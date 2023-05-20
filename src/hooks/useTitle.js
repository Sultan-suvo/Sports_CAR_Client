import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Supersonic Sports Cars / ${title}`
    },[title])
}

export default useTitle;
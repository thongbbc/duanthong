load =  (check) => {
    if (check)
        return {
            type:'Load'
        }
    else {
       return {
            type:'UnLoad'
        } 
    }
}

export {load}
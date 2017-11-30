getNavigation =  () => {
    return {
        type:'getNavigation'
    }
}
setNavigation =  (navigation) => {
    return {
        type:'setNavigation',
        navigation
    }
}
export {getNavigation,setNavigation}
export const SETUSER_AUTHER='SETUSER_AUTHER'

export  function setAuther(id){
    return {
        type:SETUSER_AUTHER,
        id,
    }
}
export function handelAuther(auther){
    return (dispatch)=>{
        dispatch(setAuther(auther))
     }
}
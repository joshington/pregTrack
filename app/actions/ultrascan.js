export const CHANGE_ULTRA_LOCATION = 'CHANGE_ULTRA_LOCATION';
export const CHANGE_ULTRA_CONTACT  = 'CHANGE_ULTRA_CONTACT';

export const ULTRASCAN_SUCCESS = 'ULTRASCAN_SUCCESS';
export const ULTRASCAN_ERROR = 'ULTRASCAN_ERROR';


export const change_location = (location) => ({
    type:CHANGE_ULTRA_LOCATION,
    location
})

export const change_contact = (contact) => ({
    type:CHANGE_ULTRA_CONTACT,
    contact
})
// const getCircularReplacer = () => {
//     const seen = new WeakSet();
//     return (key, value) => {
//         if(typeof value === "object" && value !== null){
//             if(seen.has(value)){
//                 return;
//             }
//             seen.add(value);
//         }
//         return value;
//     }
// }

// getError = (error,actionType) => {
//     return {
//         type:actionType,
//         error:error
//     }
// }

export const ultraScanOrder = (payload) => {
    type:ULTRASCAN_SUCCESS,
    payload
}
// export  const ultrascanOrder = (location,contact) => {
//     return async dispatch => {
//         const response = await fetch(localUrl+"ultrascan/order_scan/", {
//             method:"POST",
//             headers:{
//                 Accept:"application",
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 'location':location,
//                 'contact':contact,
//             },getCircularReplacer())
//         }).then(response => {
//             if(response.ok){
//                 const resData = response.json();
//                 if(resData.status === true){
//                     return dispatch({
//                         type:ULTRASCAN_SUCCESS,
//                         location:location,
//                         contact:contact,
//                         message:resData.detail
//                     })
//                 }else{
//                     return dispatch({
//                         type:ULTRASCAN_FAIL,
//                         message:resData.detail
//                     })
//                 }
//             }else{
//                 const errorResData = response.json();
//                 console.log(errorResData);//handling in case the response is not okay
//             }
//         }).catch(error => {
//             return dispatch(getError(error,ULTRASCAN_ERROR))
//         })
//     }
// }

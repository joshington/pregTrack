import { ULTRASCAN_SUCCESS,ULTRASCAN_FAIL,ULTRASCAN_ERROR} from '../actions/ultrascan';

const initialState = { 
    ultrascanOrder:false,
    message:"",
    error:null,
}

const ultrascanReducer = (state = initialState,action) => {
    switch(action.type){
        case ULTRASCAN_SUCCESS:
            return {
                ...state,
                ultrascanOrder:true,
                message:action.message,
            }
        case ULTRASCAN_FAIL:
            return {
                ...state,
                ultrascanOrder:false,
                message:action.message,
            }
        case ULTRASCAN_ERROR:
            return {
                ...state,
                error:action.error
            }
        default:
            return state;
    }
}

export default ultrascanReducer;
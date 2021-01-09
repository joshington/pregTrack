import { ULTRASCAN_SUCCESS,ULTRASCAN_FAIL,ULTRASCAN_ERROR} from '../actions/ultrascan';

const initialState = { 
    ultrascanOrder:false,
    error:null,
}

const ultrascan = (state = initialState,action) => {
    switch(action.type){
        case ULTRASCAN_SUCCESS:
            return {
                ...state,
                ultrascanOrder:true,
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

export default ultrascan;
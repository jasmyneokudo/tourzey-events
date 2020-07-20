const INITIAL_STATE = {
    selectedState: null,
    option: null,
    backgroundClicked: false
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
      
        case 'select_city':
            return {
                ...state,
                selectedState: action.payload
            }
      
        case 'select_option':
            return {
                ...state,
                option: action.payload
            }

        case 'click_background':
            return {
                ...state,
                backgroundClicked: action.payload
            }
       
        default:
            return state;
    }
    
};
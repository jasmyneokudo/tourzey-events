const INITIAL_STATE= {

    hidden:true
};

const DropdownReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case 'toggle_dropdown':
            return{
                ...state,
                hidden:!state.hidden
            }
        default:
            return state;
    }
}

export default DropdownReducer;
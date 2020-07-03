export default (state = null, action) => {

    switch(action.type){
        case 'select_country':
            return action.payload;

        default:
            return state;
    }
    
};
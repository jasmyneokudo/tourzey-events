export default (state = null, action) => {

    switch(action.type){
        case 'select_event':
              return action.payload;
    

        default:
            return state;
    }
    
};
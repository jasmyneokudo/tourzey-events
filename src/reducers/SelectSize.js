export default (state = null, action) => {

    switch(action.type){
      
        case 'select_size':
            return action.payload;

        default:
            return state;
    }
    
};
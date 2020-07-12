export default (state = null, action) => {

    switch(action.type){
      
        case 'select_city':
                return action.payload;
      
       
        default:
            return state;
    }
    
};
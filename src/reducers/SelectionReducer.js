export default (state = null, action) => {

    switch(action.type){
        case 'select_item':
            return action.payload;

        case 'select_event':
              return action.payload;
    
        case 'select_city':
                return action.payload;
      
        case 'select_size':
            return action.payload;

        default:
            return state;
    }
    
};
import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';
import QuestionsReducer from './QuestionsReducer';
import CountriesReducer from './CountriesReducer';
import SelectCountryReducer from './SelectCountryReducer';
import DropdownReducer from './DropdownReducer';


export default combineReducers({

    countries: CountriesReducer,
    questions: QuestionsReducer,
    selected: SelectionReducer,
    dropdown: DropdownReducer,
    selectedCountry: SelectCountryReducer,
    
    
}); 
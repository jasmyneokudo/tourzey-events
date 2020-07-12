import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';
import QuestionsReducer from './QuestionsReducer';
import CountriesReducer from './CountriesReducer';
import SelectCountryReducer from './SelectCountryReducer';
import DropdownReducer from './DropdownReducer';
import SelectEvent from './SelectEvent';
import SelectCity from './SelectCity';
import SelectSize from './SelectSize';
import SelectDate from './SelectDate';


export default combineReducers({

    countries: CountriesReducer,
    questions: QuestionsReducer,
    selected: SelectionReducer,
    selectedEvent: SelectEvent,
    selectedCity: SelectCity,
    selectedSize: SelectSize,
    selectDate: SelectDate,
    dropdown: DropdownReducer,
    selectedCountry: SelectCountryReducer,
    
    
}); 
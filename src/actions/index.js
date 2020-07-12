import ActionTypes from './actions.types';

export const selectItem = (id) => {

    return {
        type: ActionTypes.select_item,
        payload: id
    };
};

export const selectCountry = (name) => {

    return {
        type: ActionTypes.select_country,
        payload: name
    };
};

export const selectEvent = (name) => {

    return {
        type: ActionTypes.select_event,
        payload: name
    };
};

export const selectCity = (name) => {

    return {
        type: ActionTypes.select_city,
        payload: name
    };
};

export const selectSize = (name) => {

    return {
        type: ActionTypes.select_size,
        payload: name
    };
};

export const toggleDropdown = () => {

    return {
        type: ActionTypes.toggle_dropdown
    };
};

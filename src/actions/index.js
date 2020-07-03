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

export const toggleDropdown = () => {

    return {
        type: ActionTypes.toggle_dropdown
    };
};

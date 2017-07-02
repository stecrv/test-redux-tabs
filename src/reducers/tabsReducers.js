"use strict"

export function tabsReducers(state = {
    tabs: [
        {
            id: 1,
            name: 'C-3PO',
            points: '2983',
        },
        {
            id: 2,
            name: 'Darth Vader',
            points: '2676',
        },
        {
            id: 3,
            name: 'BB-8',
            points: '1292',
        },
        {
            id: 4,
            name: 'Boba Fett',
            points: '872',
        }
    ]
}, action) {
    switch (action.type) {
        case "GET_TABS":
            return {...state, tabs: [...state.tabs]}
            break;
        case "POST_TAB":
            let tabs = state.tabs.concat(action.payload)
            return {tabs};
            break;
        case "DELETE_TAB":
            const currentTabToDelete = [...state.tabs];

            const indexToDelete = currentTabToDelete.findIndex(
                function (tab) {
                    return tab.id === action.payload.id;
                }
            );

            return {tabs: [...currentTabToDelete.slice(0, indexToDelete), ...currentTabToDelete.slice(indexToDelete + 1)]}
            break;
        case "UPDATE_TAB":

            const currentTabToUpdate = [...state.tabs]

            const indexToUpdate = currentTabToUpdate.findIndex(
                function (tab) {
                    return tab.id === action.payload.tab.id;
                })

            const newTabToUpdate = {...currentTabToUpdate[indexToUpdate], name: action.payload.tab.name}

            console.log("tab to update", newTabToUpdate);

            return {tabs: [...currentTabToUpdate.slice(0, indexToUpdate), newTabToUpdate, ...currentTabToUpdate.slice(indexToUpdate + 1)]}
            break;
    }
    return state
};

"use strict"

export function getTabs(){
    return {
        type: "GET_TABS"
    }
}
// POST A TAB
export function postTabs(tab){
    return {
        type:"POST_TAB",
        payload: tab
    }
}
// DELETE A TAB
export function deleteTabs(id){
    return {
        type:"DELETE_TAB",
        payload: id
    }
}
export function updateSelected(selected){
    return {
        type:"UPDATE_SELECTED",
        payload: selected
    }
}
// UPDATE A TAB
export function updateTabs(tabs, tab){
    return {
        type:"UPDATE_TAB",
        payload: {tabs:tabs,tab:tab}
    }
}
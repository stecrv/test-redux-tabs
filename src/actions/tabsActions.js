"use strict"

export function getTabs(){
    return {
        type: "GET_TABS"
    }
}
// POST A TAB
export function postTabs(book){
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
// UPDATE A TAB
export function updateTabs(book){
    return {
        type:"UPDATE_TAB",
        payload: tab
    }
}
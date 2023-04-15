export const reducer = (state=[],action) => {
    if(action.type === "count"){
        return action
    }
    return state
}
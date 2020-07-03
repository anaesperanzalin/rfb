const addTaskReducer = (state = [], action)=>{
    switch(action.type){
        case "ADDTASK":
                return [...state]
        default: return []

    }
}

export default addTaskReducer;
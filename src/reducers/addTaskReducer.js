const addTaskReducer = (state = [], action)=>{
    switch(action.type){
        case "ADDTASK":
                return [...state, 
                    {taskName: action.payload} ]
        default: return []

    }
}

export default addTaskReducer;
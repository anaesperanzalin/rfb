export const increment= () => {
    return{
        type: "INCREMENT"
       
    };
};


export const decrement =() =>{
    return {
        type: "DECREMENT"
    };
};


export const addTask=(taskName) => {
    return{
        type: "ADDTASK",
        payload: taskName
    }
}
const toDoReducer = (state, action) => {
    //console.log(state, action);

    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.payload.title,
                    completed: false
                }
            ];

        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload.id);
        
        case 'TOGGLE_COMPLETE':
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            });
        
        case 'UPDATE_TASK':
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        title: action.payload.newTitle
                    }
                }
                return task;
            })
        
        case 'SET_TASKS':
            return action.payload.tasks;

        default:
            return state;
    }

}

export default toDoReducer;
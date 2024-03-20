export interface State {
    id: number;
    todo: string; 
    done: boolean;
}

export interface Action {
    type: string;
    payload?: State,
}

export const initialState: State[] = [
    {
        id: new Date().getTime(),
        todo: 'Searching soul stone',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        todo: 'Searching power stone',
        done: false,
    },
];

export const todoReducer = (initialState: State[], action: Action): State[] =>  {
    switch (action.type) {
        case 'add':
            if (!action.payload) {
                return initialState;
            }
            return action.payload ?  [...initialState, action.payload] : initialState;
        
        case 'delete':
            return action.payload ? initialState.filter(todo => todo.id !== action.payload?.id) : initialState;

        case 'toggle': 
            return action.payload ? initialState.map(todo => {
                if (todo.id === action.payload?.id) {
                    return {...todo, done: !todo.done}
                }

                return todo;
            }) : initialState;
    
        default:
            return initialState;
    }
}
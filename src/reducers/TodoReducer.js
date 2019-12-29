import * as types from '../actions/ActionTypes';

const initialTodos = new Array(5).fill(0).map(
    (foo, index)=>({id: index, text: `Todo ${index}`, done: false})
);

const initialState = {
    input: '',
    todos: initialTodos,
    id: 5
}

const todoReducer = (state=initialState, action) => {
    const { todos, input, id } = state;
    switch (action.type) {
        case types.TOGGLE:
            return {
                todos:[
                    ...todos.slice(0, todos.findIndex(todo => todo.id === action.id)),
                    {
                        ...todos[todos.findIndex(todo => todo.id === action.id)],
                        done: !todos[todos.findIndex(todo => todo.id === action.id)].done
                    },
                    ...todos.slice(todos.findIndex(todo => todo.id === action.id)+1, todos.length)
                ],
                input: input,
                id: id
            }
        case types.CHANGE:
            return {
                todos: todos,
                id: id,
                input: action.value.value
            }
        case types.INSERT:
            return {
                todos: [
                    ...todos,
                    {
                        text: input,
                        done: false,
                        id: id+1
                    }
                ],
                input: '',
                id: id+1
            }
        case types.REMOVE:
            return {
                todos:[
                    ...todos.slice(0,todos.findIndex(todo => todo.id === action.id)),
                    ...todos.slice(todos.findIndex(todo => todo.id === action.id)+1, todos.legnth)
                ],
                input: input,
                id: id
            }
        default:
            return state;
    }
}

export default todoReducer;
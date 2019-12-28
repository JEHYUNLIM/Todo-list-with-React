import * as types from './ActionTypes';

export const insertTodo = () => ({
    type: types.INSERT
});

export const removeTodo = (id) => ({
    type: types.REMOVE,
    id
})

export const changeInput = (value) => ({
    type: types.CHANGE,
    value
})

export const toggleTodo = (id) => ({
    type: types.TOGGLE,
    id
})

export const incrementId = () => ({
    type: types.INCREMENT
})
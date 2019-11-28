import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    state = {
        input: '',
        todos: [
            {id:0, text: 'Study', done: true},
            {id:1, text: 'Exercise', done: false}
        ]
    }

    id = 1;
    getId = () =>{
        return ++this.id;
    }

    handleChange = (e) =>{
        const {value} = e.target;
        this.setState({
            input: value
        });
    }

    handleInsert = () =>{
        const {todos, input} = this.state;

        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        };

        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    }

    render(){
        const {input, todos} = this.state;
        const {
            handleChange,
            handleInsert
        } = this;


        return (
            <div>
                <PageTemplate>
                    <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                    <TodoList todos={todos}/>
                </PageTemplate>
            </div>
        );
    }
}

export default App;
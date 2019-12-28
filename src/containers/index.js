import { incrementId, toggleTodo, insertTodo, removeTodo, changeInput } from '../actions';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
    id: state.id,
    todos: state.todos,
    input: state.input
});

const mapDispatchToProps = (dispatch) => ({
    handleChange: (e) => dispatch(changeInput(e.target)),
    handleInsert: () => dispatch(insertTodo()),
    handleToggle: (id) => dispatch(toggleTodo(id)),
    handleRemove: (id) => dispatch(removeTodo(id)),
})

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
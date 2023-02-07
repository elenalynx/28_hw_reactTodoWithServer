import Header from "./features/Header/Header";
import TodoList from "./features/TodoList/TodoList";
import Footer from "./features/Footer/Footer";
import useTodo from "./hooks/useTodo";

function App() {
    const {
        list,
        editTodo,
        onTodoSubmit,
        onTodoRemove,
        onTodoEdit,
        onTodoCheck,
    } = useTodo();

    return (
        <div className="App">
            <Header
                todo={editTodo}
                onTodoSubmit={onTodoSubmit}/>
            <TodoList
                list={list}
                onTodoCheck={onTodoCheck}
                onTodoRemove={onTodoRemove}
                onTodoEdit={onTodoEdit}
            />
            <Footer/>
        </div>
    );
}

export default App;

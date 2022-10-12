
import './App.css';
import Todos from "./components/Todos/Todos";
import NewTodoContainer from "./components/NewTodo/NewTodoContainer";
import TodosContextProvider from "./store/todos-context";
import _PageHeader from "./components/PageHeader/_PageHeader";


function App() {

    return (
        <TodosContextProvider>
            <_PageHeader/>
            <NewTodoContainer />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;

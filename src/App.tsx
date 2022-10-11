
import './App.css';
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo/NewTodo";
import TodosContextProvider from "./store/todos-context";
import _PageHeader from "./components/PageHeader/_PageHeader";


function App() {

    return (
        <TodosContextProvider>
            <_PageHeader/>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;

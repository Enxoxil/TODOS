import './App.css';
import Todos from "./components/Todos/Todos";
import NewTodoContainer from "./components/NewTodo/NewTodoContainer";
import TodosContextProvider from "./store/todos-context";
import _PageHeader from "./components/PageHeader/_PageHeader";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {useState} from "react";
import Navigation from "./components/Navigation/Navigation";
import ProtectedRoute from "./Helpers/ProtectedRoute";


const App = () => {
    const [user, setUser] = useState(false);
    const handleLogin = () => {
        setUser(true);
    }
    const handleLogout = () => {
        setUser(false);
    }

    return (
        <TodosContextProvider>
            <BrowserRouter>
                <Navigation/>

                {user ? (
                    <button onClick={handleLogout}>Sign out</button>
                ) : (
                    <button onClick={handleLogin}>Sign in</button>
                )}

                <Routes>
                    <Route index element={'Home'}/>
                    <Route path='home' element={'Home'}/>
                    <Route path='auth' element={'Auth'}/>
                    <Route path='todos' element={
                        <ProtectedRoute user={user}>
                            <_PageHeader/>
                            <NewTodoContainer/>
                            <Todos/>
                        </ProtectedRoute>
                    }/>
                    <Route path='admin' element={'Admin'}/>
                    <Route path='*' element={'404'}/>
                </Routes>

            </BrowserRouter>
        </TodosContextProvider>
    );
}

export default App;

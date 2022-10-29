import './App.css';
import Todos from "./components/Todos/Todos";
import NewTodoContainer from "./components/NewTodo/NewTodoContainer";
import TodosContextProvider from "./store/todos-context";
import _PageHeader from "./components/PageHeader/_PageHeader";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {useState} from "react";
import Navigation from "./components/Navigation/Navigation";
import ProtectedRoute from "./Helpers/ProtectedRoute";


export interface IUser {
    id: number,
    name: string,
    role: string,
    permissions: string,
    login: boolean,
}

const App = () => {
    const [user, setUser] = useState<IUser>();
    const handleLogin = () => {
        setUser({
            id: 1,
            name: 'Yehor',
            permissions: 'admin',
            role: 'admin',
            login: true
        });
    }
    const handleLogout = () => {
        setUser({...user!, login: false});
    }

    return (
        <TodosContextProvider>
            <BrowserRouter>
                <Navigation/>

                {user!.login ? (
                    <button onClick={handleLogout}>Sign out</button>
                ) : (
                    <button onClick={handleLogin}>Sign in</button>
                )}

                <Routes>
                    <Route index element={'Home'}/>
                    <Route path='home' element={'Home'}/>
                    <Route path='auth' element={'Auth'}/>
                    <Route path='todos' element={
                        <ProtectedRoute user={user!}>
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

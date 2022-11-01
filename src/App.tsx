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
    permissions: string[],
    login: boolean,
}

const App = () => {
    const [user, setUser] = useState<IUser>();
    const handleLogin = () => {
        setUser({
            id: 1,
            name: 'Yehor',
            permissions: ['admin'],
            role: 'admin',
            login: true
        });
    }
    const handleLogout = () => {
        setUser({...user!, login: false});
    }
    console.log(user)
    return (
        <TodosContextProvider>
            <BrowserRouter>
                <Navigation user={user!} handleLogout={handleLogout} handleLogin={handleLogin}/>


                <Routes>
                    <Route index element={'Home'}/>
                    <Route path='home' element={<p style={{textAlign: 'center'}}>Тут будет компонент HOME</p>}/>
                    <Route path='auth' element={<p style={{textAlign: 'center'}}>Тут будет компонент AUTH</p>}/>
                    <Route path='todos' element={
                        <ProtectedRoute isAllowed={user?.login! && user!.permissions.includes('admin')}>
                            <_PageHeader/>
                            <NewTodoContainer/>
                            <Todos/>
                        </ProtectedRoute>
                    }/>
                    <Route path='admin' element={<p style={{textAlign: 'center'}}>Тут будет компонент ADMIN</p>}/>
                    <Route path='*' element={'404'}/>
                </Routes>
            </BrowserRouter>
        </TodosContextProvider>
    );
}

export default App;

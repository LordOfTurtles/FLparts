import React from 'react';
import Navbar from './components/navbar/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home.page";
import Users from './pages/users/Users.page';

const App: React.FC = () => {
    return(
        <div>
            {/*Navbar*/}
            <Navbar />

            {/*Wrapper*/}
            {/* Wrapper />*/}
            <div className ="wrapper">
        <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/users">
                <Route index element={<Users/>} />
            </Route>
        </Routes>
            </div>
        </div>
    )
}







//function App() {
//    return (
//        <div className = 'wrapper'>
//            <Routes>
//                <Route path="/" element={<Home />}/>
//            </Routes>
//        </div>
//    );
//}

export default App;
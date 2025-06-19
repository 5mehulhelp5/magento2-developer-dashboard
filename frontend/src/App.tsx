import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Add from './pages/Add';

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="add" element={<Add />} />
            </Routes>
        </>
    )
}

export default App

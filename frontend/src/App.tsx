import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Baseball from "./pages/Baseball.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="baseball" element={<Baseball />} />
                <Route path="about" element={<About />} />
            </Routes>
        </>
    )
}

export default App

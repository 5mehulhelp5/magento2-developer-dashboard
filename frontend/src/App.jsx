import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Add from './pages/Add';
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const [records, setRecords] = useState([]);

    const loadRecords = async () => {
        try {
            const response = await axios.get('http://localhost:5000/magento/');
            setRecords(response.data);
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    }

    useEffect(() => {
        loadRecords();
    }, []);

    return (
        <>
            <Routes>
                <Route index element={
                    <DashboardLayout records={records}>
                        <Home />
                    </DashboardLayout>
                } />
                <Route path="about" element={
                    <DashboardLayout records={records}>
                        <About />
                    </DashboardLayout>
                } />
                <Route path="login" element={
                    <DashboardLayout records={records}>
                        <Login />
                    </DashboardLayout>
                } />
                <Route path="add" element={
                    <DashboardLayout records={records}>
                        <Add onRecordAdded={loadRecords} />
                    </DashboardLayout>
                } />
            </Routes>
        </>
    )
}

export default App

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import AddCommand from './pages/command/Add';
import AddMagento from './pages/magento/Add';
import RunCommand from './pages/run/Run';
import CommandDetails from './components/command/Details.jsx';
import MagentoDetails from './components/magento/Details.jsx';
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const [commands, setCommands] = useState([]);
    const [magentos, setMagentos] = useState([]);

    const loadCommands = async () => {
        try {
            const response = await axios.get('http://localhost:5000/command/');
            setCommands(response.data);
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    }

    const loadMagentos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/magento/');
            setMagentos(response.data);
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    }

    const loadAll = async () => {
        await loadCommands();
        await loadMagentos();
    }

    useEffect(() => {
        loadAll();
    }, []);

    return (
        <>
            <Routes>
                <Route index element={
                    <DashboardLayout records={magentos} commands={commands}>
                        <Home />
                    </DashboardLayout>
                } />
                <Route path="about" element={
                    <DashboardLayout records={magentos} commands={commands}>
                        <About />
                    </DashboardLayout>
                } />
                <Route path="login" element={
                    <DashboardLayout records={magentos} commands={commands}>
                        <Login />
                    </DashboardLayout>
                } />
                <Route path="magento/add" element={
                    <DashboardLayout records={magentos} commands={commands}>
                        <AddMagento onRecordAdded={loadAll} />
                    </DashboardLayout>
                } />
                <Route path="magento/:id" element={
                    <DashboardLayout records={magentos} commands={commands}>
                        <MagentoDetails onRecordDeleted={loadAll} records={magentos} />
                    </DashboardLayout>
                } />
                <Route path="command/add" element={
                    <DashboardLayout records={magentos} commands={commands}>
                        <AddCommand onRecordAdded={loadAll} />
                    </DashboardLayout>
                } />
                <Route path="command/:id" element={
                    <DashboardLayout records={magentos} commands={commands}>
                        <CommandDetails onRecordDeleted={loadAll} commands={commands} />
                    </DashboardLayout>
                } />
                <Route path="run" element={
                    <DashboardLayout records={magentos} commands={commands}>
                        <RunCommand onRecordDeleted={loadAll} commands={commands} />
                    </DashboardLayout>
                } />
            </Routes>
        </>
    )
}

export default App

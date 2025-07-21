import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header.jsx';
import ProjectList from '../components/ProjectList.jsx';
import '../styles/App.css';

export default function DashboardLayout({ children }) {
    const [records, setRecords] = useState([]);

    const loadRecords = async () => {
        const res = await axios.get('/magento/');
        setRecords(res.data);
    }

    useEffect(() => {
        loadRecords();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12 col-md-5 col-xl-4 leftPane'}>
                            <ProjectList />
                        </div>
                        <div className={'col-12 col-md-7 col-xl-8 rightPane'}>
                            { children }
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
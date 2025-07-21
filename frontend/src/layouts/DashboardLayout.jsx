import Header from '../components/Header.jsx';
import ProjectList from '../components/ProjectList.jsx';
import '../styles/App.css';

export default function DashboardLayout({ children }) {
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
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
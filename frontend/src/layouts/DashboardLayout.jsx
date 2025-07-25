import Header from '../components/Header.jsx';
import ProjectList from '../components/ProjectList.jsx';

export default function DashboardLayout({ records, children }) {
    return (
        <>
            <Header />
            <main>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12 col-md-5 col-xl-4 leftPane'}>
                            <ProjectList records={records}/>
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
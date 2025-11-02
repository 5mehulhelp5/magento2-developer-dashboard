import Header from '../components/Header.jsx';
import MagentoList from '../components/magento/List.jsx';
import CommandList from '../components/command/List.jsx';

export default function DashboardLayout({ records, commands, children }) {
    return (
        <>
            <Header />
            <main>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12 col-md-5 col-xl-4 leftPane'}>
                            <MagentoList magentos={records} />
                            <hr />
                            <CommandList records={commands} />
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
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import BaseballPagination from "../components/BaseballPagination.tsx";
import '../styles/App.css'

function Home() {
    return (
        <>
            <Header />

            <main className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'bg-info col-12 col-md-5 col-xl-4'}>
                        <ProjectList />
                    </div>

                    <div className={'col-12 col-md-7 col-xl-8'}>
                        <BaseballPagination />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home

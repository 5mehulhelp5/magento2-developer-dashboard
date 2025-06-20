import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import MagentoForm from '../components/MagentoForm'
import '../styles/App.css'

function Add() {
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
                            <div>
                                <h1>Add</h1>
                                <MagentoForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Add

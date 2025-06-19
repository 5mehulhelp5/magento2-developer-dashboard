import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import '../styles/App.css'

function Login() {
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
                                <h1>Login</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login

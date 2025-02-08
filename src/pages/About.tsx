import Header from '../components/Header'
import '../styles/App.css'

function Home() {
    return (
        <>
            <Header />

            <main className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-12 col-md-5 col-xl-4'}>
                        <div>
                            <a href="/add" className={"btn btn-primary"}>Add Site</a>
                        </div>
                    </div>

                    <div className={'col-12 col-md-7 col-xl-8'}>
                        <div>
                            <h1>About Me</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home

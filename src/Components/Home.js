import './css/Home.css'
import SPACESURFER from './img/spacesurfer.svg'
const Home = () => {
    return ( 
        <div className="home">
            <nav>
                <a href="/">linaria</a>
            </nav>
            <main>
                <div className="home__mainLeft">
                    <img src={SPACESURFER} alt="Space Surfer" />
                </div>
                <section className="home__mainRight">
                    <h1>Compete with your friends and rivals!</h1>
                    <div className="home__btnGroup">
                        <a href="/signup">GET STARTED</a>
                        <a href="/login">I ALREADY HAVE AN ACCOUNT</a>
                    </div>
                </section>
            </main>
            <footer>
            <hr />
                <p>Linaria is an entry into the Build with <a href={`https://www.linode.com/?utm_source=hashnode&utm_medium=article&utm_campaign=hackathon_announcement`}>Linode</a> hackathon by <a href="https://hashnode.com/">Hashnode</a>.</p>
            </footer>
        </div>
     );
}
 
export default Home;
import './css/Home.css'
import SPACESURFER from './img/spacesurfer.svg'
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth"
const Home = () => {

    const handleAuth = () => {
        // Firebase Auth
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithRedirect(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(token);
            console.log(user);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
            // ...
        });

        
    }
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
                        <button onClick={handleAuth}>CONTINUE WITH GOOGLE</button>
                        {/* <a href="/signup">GET STARTED</a>
                        <a href="/login">I ALREADY HAVE AN ACCOUNT</a> */}
                    </div>
                </section>
            </main>
            <footer>
            <hr />
                <p>Linaria is an entry into the build with <a href={`https://www.linode.com/?utm_source=hashnode&utm_medium=article&utm_campaign=hackathon_announcement`}>Linode</a> hackathon by <a href="https://hashnode.com/">Hashnode</a>.</p>
            </footer>
        </div>
     );
}
 
export default Home;
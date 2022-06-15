import AuthNav from "./AuthNav";
import Avatar from '@mui/material/Avatar';
import './css/Account.css'
const Account = () => {
    return ( 
        <div className="account">
            <AuthNav />
            <main>
                <header>
                    <h1>Profile</h1>
                    <ion-icon name="settings-outline"></ion-icon>
                </header>
                <hr />
                <div className="account__details">
                    <div className="accountDetails__text">
                        <h2>Kamal</h2>
                        <p>Joined June 2022</p>
                        <br />
                        <ion-icon name="trophy-outline"></ion-icon>
                    </div>
                    <Avatar sx={{width: 100, height: 100}}/>
                </div>
                <hr />
                <div className="account__stats">
                    <h2>Statistics</h2>
                    <p>stats</p>
                </div>

            </main>
        </div>
     );
}
 
export default Account;
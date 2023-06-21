import '../styles/Header.css';
import UserContext from '../../context/userContext';
import { useContext } from 'react';

function HomeHeader(props) {

    const { loggedIn } = useContext(UserContext);

    const userIsNotLoggedIn = () => {
        return (
                <div>
                    <button className='button-configuration' onClick={props.handleLogin}>Login</button>
                    <button className='button-configuration' onClick={props.handleRegister} >Register</button>
                </div>
        );
    }

    const userIsLoggedIn = () => {
        return (
            <p className='center-text-config'>Hello! User</p>
        );
    }

    return (
        <>
            <div className="header">
                <div className="text-config">
                <h1 className='center-text-config'>Marketplace</h1>
                </div>
                { loggedIn ? userIsLoggedIn() : userIsNotLoggedIn() }                
            </div>
        </>
    );
}



export default HomeHeader;
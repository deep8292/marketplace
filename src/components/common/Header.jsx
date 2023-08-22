import '../styles/Header.css';
import UserContext from '../../context/userContext';
import RetroButton, { RetroButtonType } from '../button/RetroButton';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeHeader(props) {

    const { loggedIn } = useContext(UserContext);
    const navigator = useNavigate();

    const userIsNotLoggedIn = () => {
        return (
                <div className='button-container'>
                    <RetroButton color={RetroButtonType.green} title='Login' onClick={props.handleLogin}/>
                    {/* <RetroButton color={RetroButtonType.white} title='Register' onClick={props.handleRegister}/> */}
                </div>
        );
    }

    const userIsLoggedIn = () => {
        return (
            <p className='center-text-config'>Hello! User</p>
        );
    }

    const onTitleClick = () => {
        navigator('/');
    }

    return (
        <>
            <div className="header">
                <div className="text-config">
                <h1 className='center-text-config' onClick={onTitleClick}>Marketplace</h1>
                </div>
                { loggedIn ? userIsLoggedIn() : userIsNotLoggedIn() }                
            </div>
        </>
    );
}



export default HomeHeader;
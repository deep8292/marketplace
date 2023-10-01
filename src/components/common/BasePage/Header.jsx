import './Header.css';
import UserContext from '../../../context/userContext';
import RetroButton, {RetroButtonType} from '../../button/RetroButton';
import SearchBar from '../SearchBar/SearchBar';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeHeader(props) {

    const { loggedIn } = useContext(UserContext);
    const navigator = useNavigate();

    const userIsNotLoggedIn = () => {
        return (
                <div className='button-container'>
                    <RetroButton buttonType={RetroButtonType.GREEN}onClick={props.handleLogin}>
                    Login
                    </RetroButton>
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
                <SearchBar />
                { loggedIn ? userIsLoggedIn() : userIsNotLoggedIn() }                
            </div>
        </>
    );
}



export default HomeHeader;
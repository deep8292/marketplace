import './Header.css';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UserContext from '../../../context/userContext';
import RetroButton, {RetroButtonType} from '../../button/RetroButton';
import SearchComponent from '../SearchComponent/SearchComponent';

function HomeHeader(props) {

    const navigator = useNavigate();
    const { loggedIn } = useContext(UserContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    // const [showAddItem, setShowAddItem] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
          };
          window.addEventListener('resize', handleResize);
      
          // Cleaning up the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])

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
            <div className='button-container'>
                <p className='center-text-config'>Hello! User</p>
                {props.showAddItem ? <Link to={`addProduct`} >
                    <RetroButton buttonType={RetroButtonType.YELLOW}onClick={props.handleAddItem}>
                        Add Item
                    </RetroButton>
                </Link>: null}
            </div>
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
                {isMobile ? null : <SearchComponent />}
                { loggedIn ? userIsLoggedIn() : userIsNotLoggedIn() }                
            </div>
        </>
    );
}



export default HomeHeader;
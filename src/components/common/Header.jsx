import '../styles/Header.css';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import LoginModal from '../Login/LoginModal';
// import { useState } from 'react';

function HomeHeader(props) {

    // const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className="header">
                <h1>Marketplace</h1>
                <div className="button-container">
                    <button className='button-configuration' onClick={props.handleLogin}>Login</button>
                    <button className='button-configuration' onClick={props.handleRegister} >Register</button>
                </div>
            </div>
        </>
    );
}



export default HomeHeader;
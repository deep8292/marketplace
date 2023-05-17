import '../styles/Header.css';

function HomeHeader(props) {
    return (
        <>
            <div className="header">
                <div className="text-config">
                <h1>Marketplace</h1>
                </div>
                <div>
                    <button className='button-configuration' onClick={props.handleLogin}>Login</button>
                    <button className='button-configuration' onClick={props.handleRegister} >Register</button>
                </div>
            </div>
        </>
    );
}



export default HomeHeader;
import '../styles/Header.css';

function HomeHeader() {
    return (
        <div className="header">
            <h1>Marketplace</h1>
            <div className="button-container">
                <button className='button-configuration'>Login</button>
                <button className='button-configuration'>Register</button>
            </div>
        </div>
    );
}



export default HomeHeader;
import '../styles/TitleView.css'
import images from '../../helpers/images';

function TitleView() {
    return (
        <div className='parentContainer'>
            <div className="container">
                <div className='imageContainer'>
                    <img className='imageConfig' src={images[0]}/>
                </div>
                <div>
                    <p>Test</p>
                </div>
            </div>
            <div className="container">
                <div className='imageContainer'>
                    <img className='imageConfig' src={images[0]}/>
                </div>
                <div>
                    <p>Test</p>
                </div>
            </div>
        </div>
        
    )
}

export default TitleView;
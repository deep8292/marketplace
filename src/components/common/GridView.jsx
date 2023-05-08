import '../styles/GridView.css'
import images from '../../helpers/images';

function TitleView() {
    return (
        <div className="container">
            <div>
                <div>
                    <img className='image' src={images[0]}/>
                    <div className="text">Item 1</div>
                </div>
            </div>
            <div>
                <div>
                    <img className='image' src={images[0]}/>
                    <div className="text">Item 2</div>
                </div>
            </div>
            <div>
                <div>
                    <img className='image' src={images[0]}/>
                    <div className="text">Item 3</div>
                </div>
            </div>
            <div>
                <div>
                    <img className='image' src={images[0]}/>
                    <div className="text">Item 6</div>
                </div>
            </div>
        </div>
    )
}

export default TitleView;
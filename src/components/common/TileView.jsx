// import '../styles/TitleView.css'
import '../styles/GridView.css'
import images from '../../helpers/images';

function TitleView() {
    return (
        <div className="container">
            <div className="grid-item">Item 1</div>
            <div className="grid-item">Item 2</div>
            <div className="grid-item">Item 3</div>
            <div className="grid-item">Item 4</div>
            <div className="grid-item">Item 5</div>
            <div className="grid-item">Item 6</div>
        </div>
        // <div className='parentContainer'>
        //     <div className="container">
        //         <div className='imageContainer'>
        //             <img className='imageConfig' src={images[0]}/>
        //         </div>
        //         <div>
        //             <p>Test</p>
        //         </div>
        //     </div>
        //     <div className="container">
        //         <div className='imageContainer'>
        //             <img className='imageConfig' src={images[0]}/>
        //         </div>
        //         <div>
        //             <p>Test</p>
        //         </div>
        //     </div>
        // </div>
        
    )
}

export default TitleView;
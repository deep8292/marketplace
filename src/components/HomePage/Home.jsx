import BasePage from "../common/BasePage";
import ImageCarousel from "../common/ImageCarousel";
import GridView from "../common/GridView";

function Home() {
    return(
        <BasePage>
            <ImageCarousel />
            <GridView />
        </BasePage>
    );
}

export default Home;
import MainPageSection from "./main-page-section"
import PhotoSection from "./photo-section"
import Gallery from "./gallery"

const Wrapper = () => {
    return (
      <div className="wrapper">
          <MainPageSection/>
          <PhotoSection/>
          <Gallery/>
      </div>
    );
  };
  
  export default Wrapper;
import { Wrapper } from "../components/wrapper";
import { MainPageSection } from "../components/main-page-section";
import { PhotoSection } from "../components/photo-section";
import { Gallery } from "../components";

export const Main = () => (
  <div>
    <Wrapper>
      <MainPageSection/>
      <PhotoSection/>
      <Gallery/>
    </Wrapper>
  </div>
);


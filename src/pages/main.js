import { Gallery } from '../components'
import { MainPageSection } from '../components/main-page-section'
import { PhotoSection } from '../components/photo-section'
import { Wrapper } from '../components/wrapper'

export const Main = () => (
  <div>
    <Wrapper>
      <MainPageSection/>
      <PhotoSection/>
      <Gallery/>
    </Wrapper>
  </div>
)

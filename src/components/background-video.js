import video from '../video/bg-video.mp4'

export const BackgroundVideo = () => (
  <video id="bg-video" className="bg-video" autoPlay loop muted>
    <source src={ video } type="video/mp4"/>
  </video>
)

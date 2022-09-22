const Video = () => {
  return (
    
      <video
        id="bgvideo"
        className="bgvideo"
        autoPlay
        loop="loop"
        muted=""
      >
        <source src="./NewBee.mp4" type="video/mp4" />
      </video>
    
  );
};

export {Video}

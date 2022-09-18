import abrakadabra from "../styles/img/1639402748_2-abrakadabra-fun-p-soti-na-prozrachnom-fone-3.png"


const HeaderImgBox = () => {
    return (
        <div className="header-img-box">
        <img
          src={abrakadabra}
          alt="logo"
          className="header-logo"
        />
      </div>
    );
  };
  
  export default HeaderImgBox;
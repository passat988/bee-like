import copyimg from '../styles/img/copy.jpg'



const Footer = () => {
  const copyPhone = function (event)  {
    const number = document.querySelector(".phone-number");
    const copyImg = event.target;
    navigator.clipboard.writeText(number.innerHTML);
  };
  
   const copyControl = function ()  {
    const copyToast = document.querySelector(".copyed");
    copyToast.classList.add("copyed_active");
  
    setTimeout(() => {
      copyToast.classList.remove("copyed_active");
    }, 2000);
  };
  return (
    <footer>
      <span className="copyed">Скопійовано!</span>
      <span className="footer-location-text">
        Житомирська обл., Черняхівський р-н, с. Високе
      </span>
      <span className="footer-name-text">Микола:</span>
      <span className="number-and-img" onClick={copyControl}>
        <a className="phone-number" onClick={copyPhone}>+380 098 96 56 054 </a>
        <img className="copy-img" src={copyimg} alt="" />
      </span>
    </footer>
  );
};

export {Footer};

// className={(isModalOpen)? "modal modalblock" : "modal"}
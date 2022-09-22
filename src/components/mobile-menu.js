const MobileMenu = () => {
  const mobileMenuHandler = function () {
    const iconMenu = document.querySelector(".mobile-menu");
    if (iconMenu) {
      const menuBody = document.querySelector(".navigation");
      iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
      });
    }
  };

  return (
    <div className="mobile-menu" onClick={mobileMenuHandler}>
      <span></span>
    </div>
  );
};

export {MobileMenu};

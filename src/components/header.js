import {HeaderImgBox} from "./header_img_box";
import {MobileMenu} from "./mobile-menu";
import {Navigation} from "./navigation";
import {ThemeSwitchWrapper} from "./theme-switch-wrapper";

const Header = () => {

  return (
    <header>
      <HeaderImgBox />
      <Navigation />
      <ThemeSwitchWrapper />
      <MobileMenu />
    </header>
  );
};

export {Header};

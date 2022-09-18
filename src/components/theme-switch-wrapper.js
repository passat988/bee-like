import { useEffect } from "react";

const ThemeSwitchWrapper = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      );
      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }
  });

  const switchTheme = function (e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onClick={switchTheme} />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default ThemeSwitchWrapper;

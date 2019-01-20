import React from "react";
import * as classNames from "classnames";

const Header = props => {
  const logoClasses = classNames("logo", props.logoType);
  const headerClasses = classNames("header", {
    withGradient: props.withGradient
  });
  const greetingClasses = classNames("greeting", {
    hidden: !props.withGreeting
  });
  return (
    <div className={headerClasses}>
      <a href="/">
        <div className={logoClasses} />
      </a>
      <div className={greetingClasses}>
        Hola, <span className="blue">Federico Donner</span>
      </div>
    </div>
  );
};

export default Header;

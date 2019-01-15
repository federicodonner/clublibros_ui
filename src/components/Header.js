import React from "react";
import * as classNames from "classnames";

const Header = props => {
  const logoClasses = classNames("logo", props.logoType);
  const headerClasses = classNames("header", {
    withGradient: props.withGradient
  });
  return (
    <div className={headerClasses}>
      <div className={logoClasses} />
      <div className="greeting">
        Hola, <span className="blue">Federico Donner</span>
      </div>
    </div>
  );
};

export default Header;

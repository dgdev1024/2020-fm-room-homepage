import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg width={20} height={14} {...props}>
      <path
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconHamburger;

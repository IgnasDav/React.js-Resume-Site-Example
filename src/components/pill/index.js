import "./index.css";
import cx from "classnames";

function Pill({ children, color, content }) {
  const className = cx(
    "pill",
    ["green", "yellow", "red"].includes(color) && `pill--${color}`
  );
  return <span className={className}>{children}</span>;
}
// function Pill({ children, isRed, isGreen, isYellow }) {
//   const className = "pill".concat(
//     isRed ? " pill--red" : "",
//     isYellow ? " pill--yellow" : "",
//     isGreen ? " pill--green" : ""
//   );
//   return <span className={className}>{children}</span>;
// }

export default Pill;

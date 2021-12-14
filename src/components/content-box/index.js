import Separator from "../separator";
import "./index.css";
function ContentBox({ children, title, flexS, flexM, pillBox }) {
  const className = "content-box".concat(
    flexS ? " flex-1" : "",
    flexM ? " flex-2" : "",
    pillBox ? " pills-box" : ""
  );

  return (
    <div className={className}>
      <h3 className="content-box__title">{title}</h3>
      <Separator isFancy />
      <div className="content-box__content d-inline-flex flex-column">
        {children}
      </div>
    </div>
  );
}
export default ContentBox;

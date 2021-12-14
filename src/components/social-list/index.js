import "./index.css";
function SocialList({ content }) {
  if (!Array.isArray(content)) {
    return null;
  }
  return (
    <ul className="social-list">
      {content.map(({ href, src, alt, text }, i) => (
        <li key={i} className="social-list__item" href={href}>
          <a href={href} target="_blank" rel="noreferrer">
            <img src={src} alt={alt} />
            <p>{text}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
export default SocialList;

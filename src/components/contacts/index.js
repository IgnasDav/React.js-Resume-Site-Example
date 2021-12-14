import "./index.css";
function Contacts({ title, content }) {
  return (
    <div className="contacts__item">
      <h3 className="contacts__item-headline">{title}</h3>
      {content.map((entry, i) =>
        entry.href ? (
          <a key={i} className="link" href={entry.href}>
            {entry.text}
          </a>
        ) : (
          <p key={i}>{entry.text}</p>
        )
      )}
    </div>
  );
}
export default Contacts;

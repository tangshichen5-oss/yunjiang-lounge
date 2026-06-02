import Revealer from './Revealer.jsx';

export default function HorizontalRail({ eyebrow, title, copy, children, id, warm = false }) {
  return (
    <section id={id} className={warm ? 'horizontal-shell horizontal-warm' : 'horizontal-shell'}>
      <Revealer className="section-title">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </Revealer>
      <div className="horizontal-rail" tabIndex="0" aria-label={title}>
        {children}
      </div>
    </section>
  );
}

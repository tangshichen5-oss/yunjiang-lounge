export default function VisualPlaceholder({ type = 'lounge', label, className = '' }) {
  return (
    <div className={`visual visual-${type} ${className}`} aria-label={label || type}>
      <div className="visual-depth back" />
      <div className="visual-depth mid" />
      <div className="visual-depth front" />
      <div className="visual-light" />
      <div className="visual-caption">{label}</div>
    </div>
  );
}

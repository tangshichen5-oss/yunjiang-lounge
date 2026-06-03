import { ChevronDown } from 'lucide-react';

export default function BrandSelect({ label, name, value, placeholder = '请选择', options, openSelect, setOpenSelect, onChange }) {
  const isOpen = openSelect === name;
  const displayValue = value || placeholder;

  return (
    <div
      className="form-control custom-select-field"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpenSelect(null);
        }
      }}
    >
      <span className="field-label">{label}</span>
      <div className={isOpen ? 'custom-select is-open' : 'custom-select'}>
        <button
          type="button"
          className={value ? 'custom-select-trigger' : 'custom-select-trigger is-placeholder'}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setOpenSelect(isOpen ? null : name)}
        >
          <span>{displayValue}</span>
          <ChevronDown size={18} />
        </button>
        {isOpen && (
          <div className="custom-select-menu" role="listbox" tabIndex={-1}>
            {options.map((option) => (
              <button
                type="button"
                role="option"
                aria-selected={option === value}
                className={option === value ? 'custom-select-option is-selected' : 'custom-select-option'}
                key={option}
                onClick={() => {
                  onChange(name, option);
                  setOpenSelect(null);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

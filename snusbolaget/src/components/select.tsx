import styled from "styled-components";

export interface IOptions {
  id: number;
  label: string;
  enabled: boolean;
  data: any;
}

export interface ISelectProps {
  label?: string;
  options: IOptions[];
  selected: IOptions;
  setSelected: (selected: IOptions) => void;
  className?: string;
}

export default function Select({ label, options, selected, setSelected, className }: ISelectProps) {
  return (
    <>
      {label && <label htmlFor="quantity">Quantity</label>}
      <select
        className={className}
        title="quantity"
        name="quantity"
        value={selected.id}
        onChange={(e) => setSelected(options[+e.target.value - 1])}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id} disabled={!selected.enabled}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

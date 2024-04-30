// Types
import { SorterContainerProps } from './types/SorterContainerProps';

export const SorterContainer = ({ value, title, rows, cols }: SorterContainerProps) => {
  return (
    <section>
      <label htmlFor={value}>{title}</label>
      <textarea id={value} rows={rows} cols={cols}></textarea>
    </section>
  );
};

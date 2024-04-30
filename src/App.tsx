import './App.css';

// Components
import { SorterContainer } from './components/SorterContainer';

export const App = () => {
  return (
    <main>
      <SorterContainer value='input' title='Input Strings' rows={8} cols={50} />
      <SorterContainer value='sorted' title='Sorted Strings' rows={8} cols={50} />
    </main>
  );
};

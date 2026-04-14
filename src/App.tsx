import { Header } from 'components/Header/Header';

import { APP_ID } from 'tests/testIds';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.mainContainer} data-testid={APP_ID}>
      <Header />
    </div>
  );
};

export default App;

import { APP_ID } from 'tests/testIds';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.mainContainer} data-testid={APP_ID}>
      Przykładowa treść...
    </div>
  );
};

export default App;

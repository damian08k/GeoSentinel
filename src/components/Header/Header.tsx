import { useEffect, useState, type ChangeEvent, type MouseEvent } from 'react';

import Logo from 'assets/icons/logo.svg';

import styles from './Header.module.css';

const DATE_RANGE_OPTIONS = [
  { label: 'Ostatnie 7 dni', value: '7_days' },
  { label: 'Ostatni miesiąc', value: '1_month' },
] as const;

type DateRange = (typeof DATE_RANGE_OPTIONS)[number]['value'];

const actionsMap = {
  analyst: () => console.log('analyst...'),
  logout: () => console.log('logout...'),
};
type Actions = keyof typeof actionsMap;

const isAction = (value: string): value is Actions => {
  return value in actionsMap;
};

export const Header = () => {
  const [range, setRange] = useState<DateRange>('7_days');

  const filterData = (range: DateRange) => {
    switch (range) {
      case '7_days':
        console.log('Filtr 7 dni');
        break;
      case '1_month':
        console.log('Filtr 1 miesiąc');
        break;
    }
  };

  useEffect(() => {
    filterData(range);
  }, [range]);

  const handleOnChangeDateRange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value as DateRange;

    setRange(value);
  };

  const onActionChange = (action: Actions) => {
    actionsMap[action]();
  };

  const handleButtonClick = (evt: MouseEvent<HTMLDivElement>) => {
    const action = (evt.target as HTMLElement).closest('button')?.dataset.action;

    if (!action || !isAction(action)) {
      return;
    }

    onActionChange(action);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="GeoSentinel Logo" />
      </div>
      <h1 className={styles.mainHeading}>SYSTEM MONITOROWANIA INCYDENTÓW</h1>
      <div className={styles.rightPanel}>
        <select value={range} onChange={handleOnChangeDateRange} className={styles.selectDateRange}>
          {DATE_RANGE_OPTIONS.map(({ label, value }) => (
            <option key={value} value={value} className={styles.dateRangeOption}>
              {label}
            </option>
          ))}
        </select>
        <div className={styles.userRole} onClick={handleButtonClick}>
          <button data-action="analyst">Analyst</button>
          <span className={styles.divider} aria-hidden="true" />
          <button data-action="logout" disabled>
            Wyloguj
          </button>
        </div>
        {/* <div className="options">lightmode/darkmode</div> */}
      </div>
    </header>
  );
};

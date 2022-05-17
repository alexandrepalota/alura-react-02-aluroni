import React from 'react';
import filters from './filters.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

type IOption = typeof filters[0]

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({filter, setFilter}: Props) {

  function selectFilter(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map(option => (
        <button
          // to use classNames, it needs to install classname dependency (npm install classname)
          className={classNames({
            // the parameter between [] is the class, and the boolean is to apply or not apply the style.
            [styles.filters__filter]: true,
            [styles['filters__filter--active']]: filter === option.id
          })}
          key={option.id}
          onClick={() => selectFilter(option)}>{ option.label }</button>
      ))}
    </div>
  );
}
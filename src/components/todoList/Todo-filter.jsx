import classNames from 'classnames';
import React from 'react';

const TodoFilter = ({ setCurrentFilter, currentFilter, filterMap }) => {
  const filterNames = Object.keys(filterMap); // ['ToDo', 'Done', 'All']

  return (
    <div className="filter">
      {filterNames.map((filterName) => (
        <button
          key={filterName}
          onClick={() => setCurrentFilter(filterName)}
          className={classNames({ current: currentFilter === filterName })}
        >
          {filterName}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;

import React from 'react';

type ButtonProps = {
  key: number;
  button: string;
  handleSort: (key: number) => void;
  sort: Sor | undefined;
};

export const Button = (props: ButtonProps) => {
  const { key, button, handleSort, sort } = props;

  // propsで渡されたデータを元に見た目を実装
  return (
    <button
      onClick={() => handleSort(key)}
      className={`ItemHead ${button}`}
      key={button}
    >
      {button.charAt(0).toUpperCase() + button.slice(1)}
    </button>
  );
};

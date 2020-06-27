import React, { FC } from 'react';

interface textareaProps {
  name: string;
  value: string;
}

const TextareaComp: FC<textareaProps> = props => {
  const { value } = props;
  return(
    <>
      <textarea value={value} ></textarea>
    </>
  )
};

export default TextareaComp;
import React from 'react';
import { add } from 'Utils/math';

interface IProps {
  a: number;
  b: number;
}

function ComputedOne(props: IProps): JSX.Element {
  const { a, b } = props;
  const sum = add(a, b);

  return <div>{`Hi, I'm computed one, my sum is ${sum}.`}</div>;
}

export default ComputedOne;

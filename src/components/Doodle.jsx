import React from 'react';
import 'css-doodle';

export default function Doodle(props) {
  const { text } = props;
  let doodle = null;
  if (/鱼|fish/i.test(text)) {
    doodle = 'fish';
  } else if (/糖|甜|candy|圣诞|Christmas|xmas|春节/i.test(text)) {
    doodle = 'candy'
  }

  if (!doodle) { return null; }

  return (
    <css-doodle use="var(--rule)" class={doodle}></css-doodle>
  )
}

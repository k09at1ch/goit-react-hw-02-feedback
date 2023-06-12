import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>
      <span>Good:</span> {good}
    </li>
    <li>
      <span>Neutral:</span> {neutral}
    </li>
    <li>
      <span>Bad:</span> {bad}
    </li>
    <li>
      <span>Total:</span> {total}
    </li>
    <li>
      <span>Positive feedback:</span> {positivePercentage}%
    </li>
  </ul>
);

export default Statistics;

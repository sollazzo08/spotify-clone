import React from 'react';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { colors } from '../constants/colors';

function SvgBackground({
  topColor,
  x1 = '100%',
  x2 = '100%',
  y1 = '100%',
  y2 = '.1%',
  offset1 = '80%',
  offset2 = '100%',
}) {
  return (
    <Svg height="812" width="420">
      <Defs>
        <LinearGradient id="homescreen" x1={x1} y1={y1} x2={x2} y2={y2}>
          <Stop offset={offset1} stopColor={colors.primary} />
          <Stop offset={offset2} stopColor={topColor} />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" height="100%" width="100%" fill="url(#homescreen)" />
    </Svg>
  );
}

export default SvgBackground;

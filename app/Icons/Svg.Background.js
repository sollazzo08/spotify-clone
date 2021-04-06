import React from 'react';
import Svg,{ Defs, LinearGradient, Rect, Stop} from 'react-native-svg'
import colors from '../constants/colors';

function SvgBackground() {
  return (
    <Svg height='812' width="420" >
      <Defs>
        <LinearGradient id="homescreen" x1="100%" y1="100%" x2="60%" y2=".1%">
          <Stop offset="80%" stopColor={colors.primary} />
          <Stop offset="100%" stopColor="#4803fc" />
        </LinearGradient>
      </Defs>
    <Rect x="0" y ="0" height="100%" width="100%" fill="url(#homescreen)"/>
    </Svg>
  );
}

export default SvgBackground;
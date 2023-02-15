import { Dimensions } from 'react-native';
import {isLowPixelDensityDevice} from '../utils/responsive_util'

const scalingFontSize = (size) => {
  const scale = (Dimensions.get('window').width / 320) + 1;
  if (isLowPixelDensityDevice())
    return size - scale;

  return size;
}

export const messageLabelFontSize = scalingFontSize(18)
import {isLowPixelDensityDevice} from '../utils/responsive_util';

export const pressableSize = 48
export const messageIconSize = isLowPixelDensityDevice() ? 45 : 50
export const iconColor = '#ffffff'
export const textColor = '#ffffff'
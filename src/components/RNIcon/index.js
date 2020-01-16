/**
 * @file
 * RNIcon component. This component is to be used to access any icons included
 * in the icon font, loaded by the CustomerConfiguration. Deeper documentation can be found
 * in the README beside this file.
 *
 * @author Arjun Sedani
 * @copyright Arjun Sedani
 */

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

export const RNIcon = createIconSetFromIcoMoon(icoMoonConfig);

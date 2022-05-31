/**
 * @file A simple hook that wraps React Native's StyleSheet.
 *
 * The keys in named styles should be typed properly. Usually this boils down to
 * defining a type that uses `ImageStyle`, `TextStyle` or `ViewStyle`.
 * Important: always make sure that required dependencies are passed for
 * `useMemo` hook in order to avoid re-rendering issues.
 */

import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

function useStyle<T>(style: T, deps: any[] = []): T {
  return useMemo(() => {
    return StyleSheet.create(style);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useStyle;

import {pickBy} from 'ramda';
import React, {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';

interface Props {
  testID?: string | undefined;
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

type BoxSpace =
  | 'm'
  | 'mx'
  | 'my'
  | 'mt'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'p'
  | 'px'
  | 'py'
  | 'pt'
  | 'pb'
  | 'pl'
  | 'pr';

type SpaceProps = Partial<Record<BoxSpace, number>>;

const mappedSpacing = ({
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
}: SpaceProps) => {
  return pickBy((value, _) => value > 0)({
    margin: m,
    marginHorizontal: mx,
    marginVertical: my,
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
    padding: p,
    paddingHorizontal: px,
    paddingVertical: py,
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
  });
};

const Box: React.FC<Props> = ({
  children,
  style = {},
  testID = '',
  ...rest
}: PropsWithChildren<Props>): React.ReactElement => {
  const styles = {
    spacing: mappedSpacing(rest),
  };

  return (
    <View testID={testID} style={[styles.spacing, style].flat()} {...rest}>
      {children}
    </View>
  );
};

export default Box;

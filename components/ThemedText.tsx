import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { fonts } from '@/assets/fonts/fonts';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'heading' | 'descriptionSmall' | 'descriptionBig' | 'defaultBold';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        // type === 'subtitle' ? styles.subtitle : undefined,
        type === 'descriptionSmall' ? styles.descriptionSmall : undefined,
        type === 'descriptionBig' ? styles.descriptionBig : undefined,
        type === 'heading' ? styles.heading : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  defaultSemiBold: {
    fontSize: 16,
    fontFamily: fonts.bold['600'],
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.bold['500'],
  },
  descriptionSmall: {
    fontSize: 12,
    fontFamily: fonts.regular['300'],
  },
  descriptionBig: {
    fontSize: 14,
    fontFamily: fonts.bold['500'],
  },
  heading: {
    fontSize: 24,
    fontFamily: fonts.bold['500'],
  },
  link: {
    fontSize: 16,
    color: '#0a7ea4',
  },
});

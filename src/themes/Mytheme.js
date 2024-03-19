import colors from "./colors";
import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.themeBackground, // Set your default background color here
    },
  };

  export default MyTheme
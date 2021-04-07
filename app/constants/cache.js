import * as Font from 'expo-font';
import preloadFonts from './preloadFonts';

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadAssetsAsync = async () => {
  const fontAssets = cacheFonts(preloadFonts);
  return Promise.all([...fontAssets]);
};

export default {
  loadAssetsAsync,
};

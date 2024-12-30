import { registerRootComponent } from 'expo';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

registerRootComponent(StorybookUIRoot);

export default StorybookUIRoot;
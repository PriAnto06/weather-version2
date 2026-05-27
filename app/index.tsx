import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Link, Stack } from 'expo-router';
import {
  MoonStarIcon,
  StarIcon,
  SunIcon,
  DropletIcon,
  GaugeIcon,
  FlagIcon,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, type ImageStyle, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  title: 'React Native Reusables',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

export default function Screen() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-around gap-8 p-4">
          <View className="w-full flex-1 flex-row justify-between">
            <Text>20/05</Text>
            <Text>21/05</Text>
            <Text>22/05</Text>
          </View>
          <Text className="text-2xl font-black">Villa Riachuelo</Text>
          <Icon as={SunIcon} size={128}></Icon>
          <View className="w-full px-8">
            <View className="flex flex-row items-center">
              <Icon as={DropletIcon} size={16}></Icon>
              <Text className="ml-2 font-black">Villa Riachuelo</Text>
            </View>
            <View className="flex flex-row items-center">
              <Icon as={GaugeIcon} size={16}></Icon>
              <Text className="ml-2 font-black">Villa Riachuelo</Text>
            </View>
            <View className="flex flex-row items-center">
              <Icon as={FlagIcon} size={16}></Icon>
              <Text className="ml-2 font-black">Villa Riachuelo</Text>
            </View>
          </View>
          <View className="w-full flex-1 flex-row items-center justify-around">
            <Text>26º</Text>
            <Text className="text-2xl">25º</Text>
            <Text>20º</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="ios:size-9 rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}

import { render } from '@testing-library/react-native';

import HomeScreen, { CustomText } from '@/example/example';

describe('<HomeScreen />', () => {
  test('Text renders correctly on HomeScreen', async () => {
    const { getByText } = await render(<HomeScreen />);

    getByText('Welcome!');
  });
});

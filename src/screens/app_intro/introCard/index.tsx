import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Slide } from './slide';
import { SlideProps } from './types';

interface AppIntroProps { }

export const IntroCards = (props: AppIntroProps) => {
  const [showRealApp, setShowRealApp] = React.useState<boolean>(false);

  const slides: SlideProps[] = [
    {
      key: 1,
      title: 'Organize your works',
      description: 'Let\'s organize your works with priority and do everything without stress.',
      image: require('../../../asserts/images/intro_1.png')
    },
    {
      key: 2,
      title: 'Title 2',
      description: '2nd Description.',
      image: require('../../../asserts/images/intro_1.png')
    }
  ];
  const _onDone = () => {
    setShowRealApp(true)
  }
  return (
      <AppIntroSlider
        renderItem={Slide}
        data={slides}
        onDone={_onDone}
        activeDotStyle={{ backgroundColor: '#FD92A1' }}
      />
  );
};
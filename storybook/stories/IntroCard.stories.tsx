import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import {Slide} from '../../src/screens/app_intro/introCard/slide';

const item: any = {
  item: {
    key: 0,
    image: require('../../src/asserts/images/intro_1.png'),
    title: 'Welcome',
    description: 'Sample description here'
  }, 
}
storiesOf('Slide', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add("Default", () => (
        <Slide
            item={item.item}
        />
    ))
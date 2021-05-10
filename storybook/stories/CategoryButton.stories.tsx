import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from './CenterView';
import CategoryButton from '../../src/screens/home/category/card';

storiesOf('CategoryButton', module)
    .addDecorator((getStory) => <CenterView onlyBackgroundColor>{getStory()}</CenterView>)
    .add("Default", () => (
        <CategoryButton onPress={action('tapped-default')}
        id={1}
        isSelected
        title='Category 1' 
        />
    ))
    .add("De-active", () => (
        <CategoryButton onPress={action('tapped-default')}
        id={1}
        isSelected={false}
        title='Category 1' 
        />
    ))
    .add("Active", () => (
        <CategoryButton onPress={action('tapped-default')}
        id={1}
        isSelected
        title='Category 1' 
        />
    ))
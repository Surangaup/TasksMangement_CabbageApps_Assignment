import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from './CenterView';

import Button from '../../src/component/button';
storiesOf('Button', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add("Default", () => (
        <Button onPress={action('tapped-default')}
            title='Press me'
        />
    ))
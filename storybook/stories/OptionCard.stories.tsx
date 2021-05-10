import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from './CenterView';

import OptionCard from '../../src/screens/home/popup/card';

storiesOf('Option Card', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add("Default", () => (
        <OptionCard onPress={action('tapped-default')}
            icon='calendar-outline'
            title='Select date and time'
            key='1'
        />
    ))
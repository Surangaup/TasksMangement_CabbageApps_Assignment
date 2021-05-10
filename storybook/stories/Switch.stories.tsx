import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from './CenterView';

import Switch from '../../src/component/switch';
storiesOf('Switch', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add("Default", () => (
        <Switch offText='Off'
            onText='On'
        />
    ))
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';

import Button from '../../src/screens/app_intro/loginPanel/button';
storiesOf('Login Button', module)
    .addDecorator((getStory) => <CenterView onlyBackgroundColor>{getStory()}</CenterView>)
    .add("Default", () => (
        <Button 
            hasBackgroundColor={false}
            title='Login with your email'
            image={require('../../src/asserts/images/email.png')}
        />
    ))
    .add("With background", () => (
        <Button 
            hasBackgroundColor
            title='Login with your email'
            image={require('../../src/asserts/images/email.png')}
        />
    ))
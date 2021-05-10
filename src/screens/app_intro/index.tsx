import * as React from 'react';
import { View } from 'react-native';
import {IntroCards} from './introCard';
import { styles } from './introCard/styles';
import LoginButtons from './loginPanel';

const AppIntro = () => {
    return (
        <React.Fragment>
            <View style={styles.introContainer}>
                <IntroCards />
            </View>
            <View style={styles.loginContainer}>
                <LoginButtons />
            </View>
        </React.Fragment>
    );
};

export default AppIntro;
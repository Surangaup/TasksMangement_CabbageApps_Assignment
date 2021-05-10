import * as React from 'react';
import renderer from 'react-test-renderer';
import {IntroCards} from '../../src/screens/app_intro/introCard';

test(('IntroCards snapshot'), ()=>{
    const snap = renderer.create(<IntroCards />).toJSON();
    expect(snap).toMatchSnapshot();
})
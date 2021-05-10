import * as React from 'react';
import renderer from 'react-test-renderer';
import AppIntro from '../../src/screens/app_intro';

test(('AppIntro snapshot'), ()=>{
    const snap = renderer.create(<AppIntro />).toJSON();
    expect(snap).toMatchSnapshot();
})
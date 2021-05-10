import * as React from 'react';
import renderer from 'react-test-renderer';
import LoginPanel from '../../src/screens/app_intro/loginPanel';

test(('LoginPanel snapshot'), ()=>{
    const snap = renderer.create(<LoginPanel />).toJSON();
    expect(snap).toMatchSnapshot();
})
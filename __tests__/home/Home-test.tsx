import * as React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/screens/home';

test(('Home snapshot'), ()=>{
    const snap = renderer.create(<Home />).toJSON();
    expect(snap).toMatchSnapshot();
})
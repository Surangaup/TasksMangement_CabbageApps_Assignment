import * as React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/screens/home/header';

test(('Header snapshot'), ()=>{
    const snap = renderer.create(<Header />).toJSON();
    expect(snap).toMatchSnapshot();
})
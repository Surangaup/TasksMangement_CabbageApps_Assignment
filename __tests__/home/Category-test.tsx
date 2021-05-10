import * as React from 'react';
import renderer from 'react-test-renderer';
import Category from '../../src/screens/home/category';

test(('Category snapshot'), ()=>{
    const snap = renderer.create(<Category />).toJSON();
    expect(snap).toMatchSnapshot();
})
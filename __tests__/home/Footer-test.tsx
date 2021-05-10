import * as React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../src/screens/home/footer';

test(('Footer snapshot'), ()=>{
    const snap = renderer.create(<Footer openPanel={()=>{}} />).toJSON();
    expect(snap).toMatchSnapshot();
})
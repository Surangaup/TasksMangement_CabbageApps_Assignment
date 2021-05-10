import * as React from 'react';
import renderer from 'react-test-renderer';
import Tasks from '../../src/screens/home/tasks';

test(('Tasks snapshot'), ()=>{
    const snap = renderer.create(<Tasks onCheckChange={()=>{}} tasks={[]} />).toJSON();
    expect(snap).toMatchSnapshot();
})
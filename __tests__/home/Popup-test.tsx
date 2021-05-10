import * as React from 'react';
import renderer from 'react-test-renderer';
import Popup from '../../src/screens/home/popup';
import "react-native-gesture-handler"

test(('Popup snapshot'), ()=>{
    const snap = renderer.create(<Popup onNewTask={()=>{}} tasks={[]} />).toJSON();
    expect(snap).toMatchSnapshot();
})
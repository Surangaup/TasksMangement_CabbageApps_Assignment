import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CenterView from './CenterView';

import TaskCard from '../../src/screens/home/tasks/card';
storiesOf('Task Card', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add("Default", () => (
        <TaskCard
            id={1}
            date='2021-05-10'
            fromTime='10:25 AM'
            toTime='01:25 PM'
            isCompleted
            taskType='I'
            description='Description 1'
            onCheckChange={() => { }}
            title='Press me'
        />
    ))
    .add("Completed", () => (
        <TaskCard
            id={1}
            date='2021-05-10'
            fromTime='10:25 AM'
            toTime='01:25 PM'
            isCompleted
            taskType='I'
            description='Description 1'
            onCheckChange={() => { }}
            title='Press me'
        />
    ))
    .add("Pending", () => (
        <TaskCard
            id={1}
            date='2021-05-10'
            fromTime='10:25 AM'
            toTime='01:25 PM'
            isCompleted={false}
            taskType='I'
            description='Description 1'
            onCheckChange={() => { }}
            title='Press me'
        />
    ))
    .add("Important", () => (
        <TaskCard
            id={1}
            date='2021-05-10'
            fromTime='10:25 AM'
            toTime='01:25 PM'
            isCompleted
            taskType='I'
            description='Description 1'
            onCheckChange={() => { }}
            title='Press me'
        />
    ))
    .add("Planned", () => (
        <TaskCard
            id={1}
            date='2021-05-10'
            fromTime='10:25 AM'
            toTime='01:25 PM'
            isCompleted
            taskType='P'
            description='Description 1'
            onCheckChange={() => { }}
            title='Press me'
        />
    ))
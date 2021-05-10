import * as React from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import Category from './category';
import Header from './header';
import Tasks from './tasks';
import { styles } from './styles';
import Footer from './footer';
import { SwipeablePanel } from 'rn-swipeable-panel';
import NewTask from '../home/popup';
import { Task } from './tasks/types';

const Home = () => {
  const [tasks, setTasks] = React.useState<Task[]>([])

  const [isPanelActive, setIsPanelActive] = React.useState(false);

  React.useEffect(() => {
    setTasks([
      {
        id: 1,
        title: 'Meeting with Alex',
        fromTime: '12:30 PM',
        toTime: '01:00 PM',
        date: '2021-04-26',
        isCompleted: false,
        taskType: 'I'
      },
      {
        id: 2,
        title: 'Project Review : Crodox',
        fromTime: '02:30 PM',
        description: 'All illustration design should be handover to Smith today for review.',
        toTime: '03:45 PM',
        date: '2021-04-26',
        isCompleted: false,
        taskType: 'P'
      },
      {
        id: 3,
        title: 'Meeting with Mark',
        fromTime: '10:30 AM',
        toTime: '11:00 AM',
        date: '2021-04-26',
        isCompleted: true,
        taskType: 'P'
      },
    ])
  }, [])

  const onCheckChange = (id: number, isCompleted: boolean) => {
    setTasks(tasks.map((x: Task) => (x.id === id ? { ...x, isCompleted: isCompleted } : x)));
  }

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const onNewTask = (taskDetails: Task) => {
    setTasks([...tasks, taskDetails])
    closePanel();
  }

  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <Tasks onCheckChange={onCheckChange} tasks={tasks} />
      <Footer openPanel={() => setIsPanelActive(true)} />

      <SwipeablePanel
        fullWidth
        openLarge
        onClose={() => closePanel()}
        isActive={isPanelActive}>
        <NewTask tasks={tasks} onNewTask={onNewTask} />
      </SwipeablePanel>

    </View>
  );
};

export default Home;
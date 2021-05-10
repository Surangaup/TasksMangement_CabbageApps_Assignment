import * as React from 'react';
import { Text, FlatList, StyleSheet, View, ScrollView, SectionList } from 'react-native';
import Card from './card';
import { Task, TasksProps } from './types';
import ListEmptyComponent from '../../../component/listEmptyComponent';


const Tasks = ({ tasks, onCheckChange }: TasksProps) => {

  const DATA = [
    {
      title: "Tasks",
      data: tasks.filter(f => !f.isCompleted)
    },
    {
      title: "Completed",
      data: tasks.filter(f => f.isCompleted)
    },
  ]
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item: any) => item.id}
      ListEmptyComponent={<ListEmptyComponent message={'No task found'} />}
      renderItem={({ item }) =>
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          fromTime={item.fromTime}
          description={item.description}
          toTime={item.toTime}
          taskType={item.taskType}
          isCompleted={item.isCompleted}
          onCheckChange={onCheckChange}
        />
      }
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.groupTitle}>{title}</Text>
      )}
    />
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  groupTitle: {
    fontSize: 16,
    color: '#736F81',
    fontWeight: 'bold',
    marginLeft: 10
  }
});

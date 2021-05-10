import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Card from '../category/card';
import DateCard from './card';
import { CommonStyles } from '../../../theme/styles';
import { Button, Switch } from '../../../component';
import { Task } from '../tasks/types';
import DateTimePicker from '@react-native-community/datetimepicker';

interface NewTaskProps {
  tasks: Task[]
  onNewTask: any
}

const NewTask = ({ onNewTask }: NewTaskProps) => {
  const [id, setID] = React.useState<string>('')
  const [title, setTitle] = React.useState<string>('')
  const [taskType, setTaskType] = React.useState<string>('I')
  const [showDatePicker, setShowDatePicker] = React.useState(false)
  const [pickerMode, setPickerMode] = React.useState<string>('date')
  const [date, setDate] = React.useState<string>('')
  const [time, setTime] = React.useState<string>('')

  React.useEffect(() => {
    let date = new Date();
    setID(`${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`)
  }, [])

  return (
    <KeyboardAvoidingView behavior='padding'>
    <View style={styles.container}>
      <Text style={styles.title}>Create a task</Text>
      <Text style={CommonStyles.label} >Task title</Text>
      <TextInput
        placeholder='Task Title'
        style={styles.titleInput}
        placeholderTextColor='#DADADF'
        onChangeText={(title) => setTitle(title)}
      />
      <View style={styles.separator} />
      <Text style={CommonStyles.label} >Task type</Text>
      <View style={{ flexDirection: 'row' }}>
        <Card
          id={1}
          isSelected={taskType === 'I'}
          onPress={() => { setTaskType('I') }}
          title='Important'
          key={1}
        />
        <Card
          id={2}
          isSelected={taskType === 'P'}
          onPress={() => { setTaskType('P') }}
          title='Planned'
          key={2}
        />
      </View>

      <View style={styles.separator} />

      <Text style={CommonStyles.label} >Choose date & time</Text>
      <View style={{ flexDirection: 'row' }}>
        <DateCard
          icon='calendar-outline'
          title={date !== '' ? date : 'Select a date'}
          onPress={() => { setShowDatePicker(true); setPickerMode('date') }}
        />        
        <DateCard
          icon='time-outline'
          title={time !== '' ? time : 'Select time'}
          onPress={() => { setShowDatePicker(true); setPickerMode('time') }}
        />
      </View>

      <View style={styles.separator} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Get alert for this task</Text>
        <Switch
          onText={'On'}
          offText={'Off'}
        />
      </View>

      <Button
        title='Done'
        onPress={() => {
          if (!title) {
            Alert.alert('Warning', 'Please enter the title')
            return;
          }
          if (!date || !time) {
            Alert.alert('Warning', 'Please check the selected date time')
            return;
          }
          onNewTask({
            id,
            title,
            fromTime: time,
            toTime: time,
            date,
            isCompleted: false,
            taskType // Important / Planned

          })
        }}
      />
    </View>
    {
          showDatePicker && <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            minimumDate={new Date()}
            mode={pickerMode}
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || new Date();
              if (pickerMode === 'date') setDate(currentDate.toLocaleDateString("en-US").split('T')[0])
              else setTime(currentDate.toLocaleTimeString())
              setShowDatePicker(false)
            }}
          />
        }
    </KeyboardAvoidingView>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: Dimensions.get('screen').height * .75,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    ...CommonStyles.baseFont_Lite
  },
  titleInputPlaceholder:{
    color: '#DADADF',

  },
  titleInput: {
    backgroundColor: '#F7F8FA',
    color: 'black',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DADADF'
  },
  separator: {
    marginTop: 20
  }
});
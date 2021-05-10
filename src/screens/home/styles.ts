import { StyleSheet } from "react-native";
import { gray, white } from '../../theme/colors';
import { CommonStyles } from "../../theme/styles";

export const styles = StyleSheet.create({
  // index
  container: {
    flex:1,
    backgroundColor: 'white'
  },
  // header
  header_container: {
    flexDirection: 'row',
    margin: 10,
  },
  greetingPanel: {
    flex: 7,
  },
  greeting: {
    color: gray,
    fontSize:23,
    ...CommonStyles.baseFont_SemiBold
  },
  userName:{
    fontSize:23,
    ...CommonStyles.baseFont_SemiBold
  },
  userImage: {
    height: 50,width: 50,  borderRadius: 50,
    margin: 5
  },
});

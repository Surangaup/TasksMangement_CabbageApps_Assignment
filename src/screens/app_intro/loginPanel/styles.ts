import { StyleSheet } from "react-native";
import { gray, white } from '../../../theme/colors';
import { CommonStyles } from "../../../theme/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  button_container: {
    flexDirection: 'row',
    marginHorizontal: '5%', marginVertical: 5,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    height: 50,
  },
  backgroundColor: {
    backgroundColor: white,
  },
  border: {
    borderWidth: 1, borderColor: gray
  },
  image: {
    marginLeft: 5
  },
  title: {
    paddingLeft: 5,
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
    ...CommonStyles.baseFont_SemiBold
  }
});
/* eslint-disable */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

export default ListItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemName}>
        <Text>{props.title}</Text>
      </View>

      <View style={styles.checkBoxView}>
        <Checkbox
          checked={props.status}
          style={{backgroundColor: '#f2f2f2', color: 'green', borderRadius: 5}}
          onChange={(name, checked) => props.toggleCheckbox(name, checked)} />
      </View>

      <View style={ styles.buttonView}>
        <Button
          onPress={() => props.deleteItem()}
          title="delete"
          color="red"
          accessibilityLabel="delete this item"
          buttonStyle={{
              backgroundColor: "white",
              width: 300,
              height: 45,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  itemName: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  checkBoxView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttonView: {
    flex: 1
  }
});

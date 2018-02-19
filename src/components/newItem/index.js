/* eslint-disable */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  Icon
} from 'react-native';

export default class NewItem extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            value={this.messages}
            onChangeText={(text) => this.setState({ text })}
            placeholder='New item'
            keyboardType='web-search'
            ref={input => { this.textInput = input }}
          />
        </View>

        <View style={styles.newItemInputView}>
          <TouchableHighlight
            style={styles.NewItemInput}
            onPress={() => {
              this.props.saveNewItem(this.state.text)
              this.textInput.clear()
            }}
            underlayColor='transparent'>
            <View>
              <Text style={styles.plusSign}>+</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  plusSign: {
    color: 'white',
    fontSize: 40
  },
  NewItemInput: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    paddingLeft: 10
  },
  newItemInputView: {
    flex: 1,
    backgroundColor: 'green'
  },
  textInputView: {
    flex: 3
  }
});

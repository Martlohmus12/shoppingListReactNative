/* eslint-disable */
import React, {Component} from 'react';
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
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 3}}>
                        <TextInput
                            style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height: '100%', paddingLeft:10}}
                            value = {this.messages}
                            onChangeText={(text) => this.setState({text})}
                            placeholder = 'New item'
                            keyboardType = 'web-search'
                            ref={input => { this.textInput = input }}
                        />
                    </View>

                    <View style={{flex: 1, backgroundColor: 'green'}}>
                        <TouchableHighlight
                            style={{alignItems:'center',justifyContent:'center', height: '100%'}}
                            onPress={()=>{
                                this.props.saveNewItem(this.state.text)
                                this.textInput.clear()
                            }}
                            underlayColor = 'transparent'>
                            <View>
                                <Text style={{color: 'white', fontSize: 40}}>+</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
            </View>
        );
    }
  }

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
        borderColor: '#d6d7da',
    }
});

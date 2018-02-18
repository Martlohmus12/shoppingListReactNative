import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';

export default ListItem = (props) => {
    return (
        <View>
            <Text>{ props.title }</Text>
            <Text>{ props.status === true }</Text>
            <Checkbox
                checked={true}
                style={{backgroundColor: '#f2f2f2', color:'green', borderRadius: 5}}
                onChange={(name, checked) => props.toggleCheckbox(name, checked)}/>
        </View>
    );
};

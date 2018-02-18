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
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                <Text>{props.title}</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Checkbox
                    checked={props.status}
                    style={{ backgroundColor: '#f2f2f2', color: 'green', borderRadius: 5 }}
                    onChange={(name, checked) => props.toggleCheckbox()} />
            </View>

            <View style={{ flex: 1 }}>
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
    button: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
        borderColor: '#d6d7da',
    }
});

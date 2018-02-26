/* eslint-disable */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { fetchItems, newItem, toggleStatus, deleteItem } from '../../actions/shoppingList';
import ListItem from '../../components/listItem';
import NewItem from '../../components/newItem';
import config from '../../config.js';

class ShoppingList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllItems(config.url);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  toggleCheckBox = (id, checked) => {
    this.props.toggleItemStatus(config.url, id , checked);
  }

  deleteItem = (id) => {
    this.props.deleteItem(config.url, id);
  }

  saveNewItem = (item) => {
    this.props.postNewItem(config.url, item )
  }

  render() {
    const { items = [], message = '' } = this.props;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
        <View style={styles.title}>
          <Text style={styles.title_text}>Simple shoppinglist</Text>
        </View>

        <View style={styles.displayItems}>
          <FlatList
            data={this.props.items}
            renderItem={({ item }) => (
              <ListItem
                status={item.status}
                title={item.name}
                toggleItemsStatus={item.status}
                toggleCheckbox={(name, checked) => (this.toggleCheckBox(item._id, checked))}
                deleteItem={() => (this.deleteItem(item._id))}
              />
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>

        <View style={styles.addNewItem}>
          <NewItem saveNewItem={(item) => (this.saveNewItem(item))} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

ShoppingList.PropTypes = {

};

function mapStateToProps(state) {
  return {
    items: state.shoppingItems.items,
    message: state.shoppingItems.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllItems: (url) => dispatch(fetchItems(url)),
    postNewItem: (url, data) => dispatch(newItem(url, data)),
    toggleItemStatus: (url, id, status) => dispatch(toggleStatus(url, id, status)),
    deleteItem: (url, id) => dispatch(deleteItem(url, id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'green'
  },
  title: {
    flex: .2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_text: {
    fontSize: 20,
    color: 'white'
  },
  displayItems: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  addNewItem: {
    flex: .2,
  },
  item: {
    color: 'white',
    height: 40
  }
});
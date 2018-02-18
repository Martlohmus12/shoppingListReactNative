/* eslint-disable */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { itemsFetchData, newItem, toggleStatus, deleteItem } from '../../actions/shoppingList';
import ListItem from '../../components/listItem';

class ShoppingList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItems('http://localhost:3000/api/items');
    // this.props.postNewItem('http://localhost:3000/api/items', { "name": "test12231312345"} )
    // this.props.toggleItemStatus('http://localhost:3000/api/items', '5a874a3d3cb808cec5976fa2' );
    this.props.deleteItem('http://localhost:3000/api/items', '5a8749ecb2547ccea3978b6c' );
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

  toggleCheckBox = () => {
    console.log('t66ytab');
  }

  render() {
    const { items = [] } = this.props;

    return (
      <View style={ styles.container }>

        <View style={ styles.navigation }>

        </View>

        <View style={ styles.displayItems }>
          <FlatList
              data={this.props.items}
              renderItem={({ item }) => (
                <ListItem
                  title={item.name}
                  toggleItemsStatus={item.status}
                  toggleCheckbox={(name,checked) =>( this.toggleCheckBox() )}
                />
              )}
              ItemSeparatorComponent={this.renderSeparator}
          />
        </View>

        <View style={ styles.addNewItem }>

        </View>

      </View>
    );
  }
}

ShoppingList.PropTypes = {

};

function mapStateToProps(state) {
  return {
    items: state.shoppingItems.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: (url) => dispatch(itemsFetchData(url)),
    postNewItem: (url, data) => dispatch(newItem(url, data)),
    toggleItemStatus: (url, id) => dispatch(toggleStatus(url, id)),
    deleteItem: (url, id) => dispatch(deleteItem(url, id))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigation: {
    backgroundColor: 'blue',
    flex: 1
  },
  displayItems: {
    flex: 4,
    backgroundColor: 'yellow'
  },
  addNewItem: {
    flex: 1,
    backgroundColor: 'red'
  },
  item: {
    color: 'white',
    height: 40
  }
});
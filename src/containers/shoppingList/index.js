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
import NewItem from '../../components/newItem';

class ShoppingList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItems('http://localhost:3000/api/items');
    // this.props.postNewItem('http://localhost:3000/api/items', { "name": "test12231312345"} )
    // this.props.toggleItemStatus('http://localhost:3000/api/items', '5a874a3d3cb808cec5976fa2' );
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

  toggleCheckBox = (id) => {
    this.props.toggleItemStatus('http://localhost:3000/api/items', id );
  }

  deleteItem = (id) => {
    this.props.deleteItem('http://localhost:3000/api/items', id );
  }

  saveNewItem = (item) => {
    this.props.postNewItem('http://localhost:3000/api/items', { "name": item} )
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
                  status={item.status}
                  title={item.name}
                  toggleItemsStatus={item.status}
                  toggleCheckbox={() =>( this.toggleCheckBox(item._id) )}
                  deleteItem={() =>( this.deleteItem(item._id) )}
                />
              )}
              ItemSeparatorComponent={this.renderSeparator}
          />
        </View>

        <View style={ styles.addNewItem }>
          <NewItem saveNewItem={(item) =>( this.saveNewItem(item) )}/>
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
    flex: .2
  },
  displayItems: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  addNewItem: {
    flex: .2,
    // backgroundColor: 'red'
  },
  item: {
    color: 'white',
    height: 40
  }
});
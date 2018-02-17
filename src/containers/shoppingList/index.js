/* eslint-disable */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ShoppingList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>tere</Text>
      </View>
    );
  }
}

ShoppingList.PropTypes = {

};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

const styles = StyleSheet.create({

});
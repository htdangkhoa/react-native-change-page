import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class ViewThree extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is page 3.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    }
})

export default ViewThree;
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class ViewTwo extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is page 2.</Text>
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

export default ViewTwo;
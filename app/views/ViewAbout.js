import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class ViewAbout extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is About page.</Text>
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

export default ViewAbout;
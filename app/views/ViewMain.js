import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class ViewMain extends Component {
    goToScreen(screen) {
        this.props.navigation.navigate(screen)
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.goToScreen.bind(this, 'one')}
                >
                    <Text>View 1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.goToScreen.bind(this, 'two')}
                >
                    <Text>View 2</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.goToScreen.bind(this, 'three')}
                >
                    <Text>View 3</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    button: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#ccc',
        height: 35,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ViewMain;
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Infoscreen = ()=>{
    return(
        <View style={styles.maincontainer}>
            <Text>This is the info screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Infoscreen;
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Flatbutton from '../components/Flatbutton';
//import * as fbdownloader from 'fb-video-downloader';



const Downloadingscreen = ({ navigation, route }) => {

    const { Url } = route.params;
    const { Filename } = route.params;
    const download = (url, filename) => {
        FileSystem.downloadAsync(
            url,
            FileSystem.documentDirectory + filename + '.mp4'
        )
        .then(({ uri }) => {
            console.log('Finished downloading to ', uri);
        })
        .catch(error => {
            console.error(error);
        });
    };

    
    return (
        <View style={styles.maincontainer}>
            <Text>Url is:  {Url}</Text>
            <Text>Filename is:  {Filename}</Text>
            <Flatbutton
                onpressing={() => { }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Downloadingscreen;
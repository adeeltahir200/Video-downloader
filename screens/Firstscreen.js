import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Flatbutton from '../components/Flatbutton';
import { Icon } from 'react-native-elements';


const Firstscreen = ({navigation}) => {


    return (
        <View style={styles.maincontainer}>
            <ImageBackground source={require('../assets/backgroundimage.png')} style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
                <View style={styles.topcontainer}>
                    <View style={{ height: '80%', width: '80%', borderRadius: 30 }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('video-downloading-screen')}}>
                            <ImageBackground source={require('../assets/topimage.png')} style={styles.boximagebackground}>

                                <Text style={styles.textstyle}>
                                    Download Video
                                </Text>
                                <Icon
                                    type='font-awesome'
                                    name='download'
                                    color='white'
                                />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomcontainer}>
                    <View style={{ height: '80%', width: '80%', borderRadius: 30 }}>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/bottomimage.jpg')} style={styles.boximagebackground}>
                                <Text style={styles.textstyle}>
                                    Edit Local video
                                </Text>
                                <Icon
                                    type='font-awesome'
                                    name='edit'
                                    color='white'
                                />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    topcontainer: {
        flex: 1,
        //backgroundColor: 'red',
        //marginHorizontal: '5%',
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomcontainer: {
        flex: 1,
        //backgroundColor: 'blue',
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boximagebackground: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection:'row'
    },
    textstyle: {
        fontStyle: 'italic',
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        letterSpacing: 3,
        marginTop: '15%'
    }
});

export default Firstscreen;
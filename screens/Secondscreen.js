import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Modal, ToastAndroid, ScrollView, Button } from 'react-native';
import Flatbutton from '../components/Flatbutton';
//import { WebView } from 'react-native-webview';
import { Input, Icon } from 'react-native-elements';
const axios = require('axios');


const Infoscreen = ({ navigation }) => {

    const [ismodal, setismodal] = useState(false);
    const [url, seturl] = useState('');
    const [filename, setfilename] = useState('');
    let data = {
        url: 'https://www.facebook.com/OfficialCaresOneNo/videos/165617894733689/'
    }

    const showtoastwithgravity = () => {
        ToastAndroid.showWithGravity('Please Enter both URL and Filename ', ToastAndroid.LONG, ToastAndroid.BOTTOM);
    }

    const afunction = async () => {
        fetch('http://192.168.0.105:3000/url', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => {
            if (response.ok) {
                //console.log(response)
                return (response);
            }
            else {
                let error = new Error(response.statusText);
                error.response = response
                throw error
            }
        }).then((response) => { return (response.json()) }).then((value) => { console.log(value) }).catch((error) => { console.log(error) })
    }


    return (
        <View style={styles.maincontainer}>
            <ImageBackground source={require('../assets/backgroundimage.png')} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.topcontainer}>

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ width: '90%' }}>
                            <Text style={styles.textstyle}>Want us to help you find a URL to download a video from?</Text>
                        </View>
                        <Flatbutton
                            title='Yes!'
                            style={{ marginTop: '5%' }}
                            onpressing={() => {
                                navigation.navigate('web-screen', {
                                    client_chosen_url: 'https://www.google.com'
                                })
                            }}
                        />
                        <Text style={[{ ...styles.textstyle }, { marginTop: '10%', fontWeight: 'bold', fontSize: 30 }]}>OR!</Text>
                        <Text style={styles.textstyle}>Enter your own Url!</Text>
                        <Flatbutton
                            title='Yes!'
                            style={{ marginTop: '5%', width: '60%' }}
                            onpressing={() => { setismodal(true) }}
                        />
                        <Text style={[{ ...styles.textstyle }, { marginTop: '10%', fontWeight: 'bold', fontSize: 30 }]}>OR!</Text>
                        <Text style={styles.textstyle}>Use the following options!</Text>

                    </View>

                </View>
                <View style={styles.socialiconscontainer}>
                    <Icon
                        name='facebook-square'
                        type='font-awesome'
                        color='white'
                        size={50}
                        style={{ marginLeft: '5%' }}
                        onPress={() => {
                            navigation.navigate('web-screen', {
                                client_chosen_url: 'https://www.facebook.com/'
                            })
                        }}
                    />
                    <Icon
                        name='twitter-square'
                        type='font-awesome'
                        color='white'
                        size={50}
                        style={{ marginLeft: '5%' }}
                        onPress={() => {
                            navigation.navigate('web-screen', {
                                client_chosen_url: 'https://www.twitter.com/'
                            })
                        }}
                    />
                    <Icon
                        name='instagram'
                        type='font-awesome'
                        color='white'
                        size={50}
                        style={{ marginLeft: '5%' }}
                        onPress={() => {
                            navigation.navigate('web-screen', {
                                client_chosen_url: 'https://www.instagram.com/'
                            })
                        }}
                    />
                    <Icon
                        name='snapchat-square'
                        type='font-awesome'
                        color='white'
                        size={50}
                        style={{ marginLeft: '5%' }}
                        onPress={() => {
                            navigation.navigate('web-screen', {
                                client_chosen_url: 'https://www.snapchat.com/'
                            })
                        }}
                    />
                </View>

                <View style={styles.bottomcontainer}>
                    <Button
                        title='Go to video screen'
                        onPress={() => {
                            navigation.navigate('Video-screen');
                        }}
                    />
                    <Flatbutton
                        onpressing={() => { navigation.navigate('Home') }}
                        title='Back'
                    />
                </View>

                <Modal visible={ismodal} transparent={true} animationType='slide'>
                    <View style={styles.modalcontainer}>
                        <View style={styles.innermodalcontainer}>
                            <View style={{ width: '100%', height: '60%', marginTop: '5%' }}>
                                <ScrollView>
                                    <Input
                                        placeholder='  http://example.com'
                                        onChangeText={(value) => { seturl(value) }}
                                        leftIcon={{ type: 'font-awesome', name: 'link' }}
                                        label='URl'
                                    />
                                    <Input
                                        placeholder='  enter your file name'
                                        onChangeText={(value) => { setfilename(value) }}
                                        leftIcon={{ type: 'font-awesome', name: 'file' }}
                                        label='File name'
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Flatbutton
                                    onpressing={() => { setismodal(false) }}
                                    title='Cancel'
                                    style={{ marginRight: '5%' }}
                                />

                                <Flatbutton
                                    onpressing={() => {
                                        if (url != '' || filename != '') {
                                            setismodal(false);
                                            navigation.navigate('Downloading-screen', {
                                                Url: url,
                                                Filename: filename
                                            });
                                        }
                                        else {
                                            showtoastwithgravity();
                                        }
                                    }}
                                    title='Download'
                                    style={{ marginLeft: '5%' }}
                                />

                            </View>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topcontainer: {
        flex: 3,
        //backgroundColor: 'green'
    },
    bottomcontainer: {
        flex: 1,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textstyle: {
        fontStyle: 'italic',
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        letterSpacing: 3,
        marginTop: '5%'
    },
    socialiconscontainer: {
        flex: 1,
        width: '100%',
        //backgroundColor: 'green',
        marginTop: '5%',
        marginLeft: '20%',
        marginRight: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    modalcontainer: {
        flex: 1,
        //backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility: 'visible',
        opacity: 30
    },
    innermodalcontainer: {
        height: '60%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 30,
        //justifyContent: 'center',
        //alignItems: 'center'
    }
})

export default Infoscreen;
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Modal, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import Flatbutton from '../components/Flatbutton'



const Webscreen = ({ route, navigation }) => {
    const [ismodal, setismodal] = useState(false);
    const [filename, setfilename] = useState('');
    const [canGoBack, setCanGoBack] = useState(false)
    const [canGoForward, setCanGoForward] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('')
    const [videourlreceived, setvideourlreceived] = useState(false)
    const checkurl = '';
    let data = {
        url: currentUrl
    }
    let supbro = '';
    const geturl = `
    let a = window.location.href
    let b=a.replace('https://m','https://www')
    window.ReactNativeWebView.postMessage(b)
    `
    //if (currentUrl != checkurl) {
    //console.log('This is your current url: ' + currentUrl + ' Period')
    //checkurl == currentUrl
    //}
    let currentobject;
    let { client_chosen_url } = route.params;
    const afunction = async (themoldedurl) => {
        console.log('Request sent with url: ' + themoldedurl)
        fetch('http://192.168.0.105:3000/url', {
            method: 'POST',
            body: JSON.stringify({ url: themoldedurl }),
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
        }).then((response) => { return (response.json()) })
            .then((value) => {
                console.log(value);
                setvideourlreceived(true);
                setismodal(true);
                return (
                    <Modal visible={ismodal} transparent={true}>
                        <View>

                        </View>
                    </Modal>
                );

                navigation.navigate('Video-screen', value);
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const webviewRef = useRef(null)

    const backButtonHandler = () => {
        if (webviewRef.current) {
            webviewRef.current.goBack();


        }
    }

    const frontButtonHandler = () => {
        if (webviewRef.current) {
            webviewRef.current.goForward();
            //console.log('Your current website url:' + JSON.stringify(webviewRef.current));
        }
    }

    /*useEffect(() => {
        Alert.alert(
            "Help",
            "Find a video online!\nCopy the video url and enter the url in previous screen!",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }, [])*/

    return (
        <View style={styles.maincontainer}>
            <Modal visible={true} transparent={true}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: '50%', width: '100%', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{height:'50%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Input
                                placeholder='Enter the name of the file'
                                onChangeText={(value) => {
                                    setfilename(value)
                                }}
                            />
                        </View>
                        <View style={{height:'50%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                                <Flatbutton
                                    style={{backgroundColor:'white'}}
                                    textstyle={{color:'black'}}
                                    title='Cancel'
                                    //setcoloroftextblack={true}
                                />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.topcontainer}>
                <TouchableOpacity onPress={backButtonHandler} >
                    <Text
                        style={styles.textstyle}>
                        Prev Page
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={frontButtonHandler}>
                    <Text style={styles.textstyle}>
                        Next page
                        </Text>
                </TouchableOpacity>
            </View>
            <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flex: 1, overflow: 'hidden' }}>
                <WebView
                    source={{ uri: client_chosen_url }}
                    style={{ overflow: 'hidden' }}
                    ref={webviewRef}
                    onNavigationStateChange={navState => {
                        setCanGoBack(navState.canGoBack)
                        setCanGoForward(navState.canGoForward)
                        setCurrentUrl(navState.url)
                        //console.log('This is the current URL:' + currentUrl);
                    }}
                    renderLoading={() => (
                        <ActivityIndicator
                            color='black'
                            size='large'
                            style={{ flex: 1 }}
                        />
                    )}
                    allowsFullscreenVideo={true}
                    onMessage={(event) => {
                        supbro = event.nativeEvent.data;
                        //= supbro.replace('https://m','https://www');
                        console.log(supbro);
                        afunction(supbro)
                    }}
                    mediaPlaybackRequiresUserAction={false}

                />
            </View>
            <View>
                <Flatbutton
                    title='Get the Link!'
                    onpressing={() => {
                        webviewRef.current.injectJavaScript(geturl);
                        //console.log(supbro);

                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: 'black',
        overflow: 'hidden'
    },
    topcontainer: {
        height: '5%',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'space-around'
    },
    textstyle: {
        fontStyle: 'italic',
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        letterSpacing: 3,
        //marginTop: '15%'
    }
})

export default Webscreen;
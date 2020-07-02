import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, StatusBar, Button, useWindowDimensions } from 'react-native';
import { Video } from 'expo-av';
import { ListItem, Input } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import Flatbutton from '../components/Flatbutton';
import VideoPlayer from 'expo-video-player';
import * as FileSystem from 'expo-file-system';


let downloadarray = [
    {
        download: {
            sd: "https://video.fisb5-1.fna.fbcdn.net/v/t42.9040-2/10000000_2660381157516607_2190126333443485361_n.mp4?_nc_cat=102&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_oc=AQmV1zsmaydFRBmysNBlQftwTs5U3Y3__10qzZP1J2g3Drvwi92YgkDWDiem61c2svI&_nc_ht=video.fisb5-1.fna&oh=703c1c3cf4ce35fab2452e0399edc4c9&oe=5EE4B6E5",
        },
        //error: null,
        thumb: "https://graph.facebook.com/2349168868718418/picture",
        title: "‪Goalcast - It’s never too late to find your real purpose | Facebook‬",
        //name: 'adeel tahir'
    },
    {
        download: {
            sd: "https://video.fisb5-1.fna.fbcdn.net/v/t42.9040-2/10000000_2660381157516607_2190126333443485361_n.mp4?_nc_cat=102&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_oc=AQmV1zsmaydFRBmysNBlQftwTs5U3Y3__10qzZP1J2g3Drvwi92YgkDWDiem61c2svI&_nc_ht=video.fisb5-1.fna&oh=703c1c3cf4ce35fab2452e0399edc4c9&oe=5EE4B6E5",
        },
        //error: null,
        thumb: 'https://graph.facebook.com/23242454654757575757/picture',
        title: 'akshvadhvajhvdjahvdjavdjvahdajhvdjahvdjhav ',
        //name: 'sana arshad'
    }

]

let The_download_array = [];

const Videscreen = ({ navigation, route }) => {
    const [text, settext] = useState('Download');
    const [url_for_modal, set_ur_for_modal] = useState('');
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [ismodal, setismodal] = useState(false);
    const [istickmark, setistickmark] = useState(false);
    const [progressbarvalue, setprogressbarvalue] = useState(0);
    let recieved_object = route.params;
    useEffect(() => {
        The_download_array.push(recieved_object);
    }, The_download_array)


    const pushnewobject = () => {
        let temobj = {
            title: text
        }
        //let temparray = [];
        //temparray = downloadarray;
        //downloadarray = temparray.push(temobj)
        downloadarray.push({ title: text })
    }
    //downloadarray.push(recievedobject);
    const keyExtractor = (item, index) => index.toString()
    const renderItem = ({ item, index }) => (
        <ListItem
            title={() => {
                return (
                    <View>
                        <Text>{item.title}</Text>
                        <Button
                            title={text}
                            onPress={() => {
                                //FileSystem.downloadAsync(
                                    //item.download.sd,
                                    //FileSystem.documentDirectory + 'small.mp4'
                                //)
                                    //.then(({ uri }) => {
                                        //console.log('Finished downloading to ', uri);
                                    //})
                                    //.catch(error => {
                                        //console.error(error);
                                    //});
                                settext('Watch Video!');
                                set_ur_for_modal(item.download.sd);
                                setismodal(true);
                                console.log('Url sent to the modal is: ' + item.download.sd)
                            }}
                        />
                    </View>
                );
            }}
            key={index}
            subtitle={() => <Progress.Bar progress={progressbarvalue} width={windowWidth - (10 * windowWidth) / 100} borderColor='white' />}
            bottomDivider
            checkmark={istickmark}
            containerStyle={{ marginTop: (2 * windowHeight) / 100, borderRadius: 30 }}
        />

    )

    const setmodal = () => {
        setismodal(false)
    }



    return (
        <View style={{ flex: 1, backgroundColor: '#888888' }}>
            <Modal visible={ismodal}>
                <View style={styles.modal_maincontainer}>
                    <View style={{ height: '10%' }}>

                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', height: '80%' }}>
                        <VideoPlayer
                            videoProps={{
                                shouldPlay: true,
                                resizeMode: Video.RESIZE_MODE_CONTAIN,
                                source: {
                                    uri: url_for_modal,
                                },
                            }}
                            inFullscreen={true}
                        />
                    </View>
                    <View style={{ height: '10%' }}>
                        <Button
                            title='Close'
                            onPress={setmodal}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.maincontainer}>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={The_download_array}
                    renderItem={renderItem}

                />
            </View >
            <View style={{ flex: 1, backgroundColor: 'grey' }}>
                <Button
                    title='Inc'
                    onPress={() => {
                        if (progressbarvalue <= 0.9) {
                            setprogressbarvalue(progressbarvalue + 0.1)
                        }
                        else if (progressbarvalue > 0.9) {
                            setistickmark(true)
                            console.log('Should show the tick mark!')
                        }
                    }}
                />
                <Button
                    title='Reset'
                    onPress={() => {
                        setprogressbarvalue(0)
                    }}
                />
                <Button
                    title='Dec'
                    onPress={() => {
                        if (progressbarvalue == 0) {
                            setprogressbarvalue(0)
                            setistickmark(false)
                        } else {
                            setprogressbarvalue(progressbarvalue - 0.1)
                            setistickmark(false)
                        }
                    }}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    maincontainer: {
        flex: 4,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    item: {
        height: 70,
        width: '100%',
        backgroundColor: 'grey',

    },
    modal_maincontainer: {
        flex: 1
    }
});

export default Videscreen;
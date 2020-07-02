import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableNativeFeedback,TouchableOpacity} from 'react-native';
//import {Octicons,MaterialIcons} from '@expo/vector-icons'

let textsty;
const Flatbutton = (props) =>{
    //textsty = {...styles.textstyle};
    return(
        <TouchableOpacity style={[styles.touchablecontainer, {...props.style}]} onPress={props.onpressing} onLongPress={props.onlongpressing}>
            <Text style={[props.Textstyle,{...styles.textstyle}]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchablecontainer:{
        height:50,
        width:150,
        backgroundColor:'black',
        elevation:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        

    },
    textstyle: {
        fontStyle: 'italic',
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        letterSpacing: 3,
        //marginTop: '15%',
    
    }
})

export default Flatbutton;
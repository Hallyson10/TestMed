import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity,TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// import { Container } from './styles';
interface Props extends TouchableOpacityProps {
  onPress : ()=>void;
  style? : object;
  title : string
}
const button_action = ({onPress,style,title}:Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <LinearGradient
    // Background Linear Gradient
    colors={['rgba(74,84,223,69)', 'rgba(21,212,216,4)']}
    end={{x:0.8,y:0}}
    start={{x:0,y:2.2}}
    style={[styles.container,style]}
    >
      <View style={styles.container}>
        <Text style={styles.text_button}>{title}</Text>
      </View>
      </LinearGradient>
      </TouchableOpacity>
  )
}

export default button_action;

const styles = StyleSheet.create({
    container : {
        height : 48,
        width:"90%",
        borderRadius:22,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
    },
    text_button : {
        fontSize : 18,
        color : "#FFF",
        fontWeight : "600"
    }
})
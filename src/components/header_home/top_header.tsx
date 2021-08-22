import React from 'react';
import { View,StyleSheet,Image,Text } from 'react-native';


const header_home = () => {
  return (
      <View style={styles.container}>
          <View style={styles.containerImageAvatar}>
          <Image style={styles.image_avatar} source={require("../../assets/user.jpg")} />
          </View>
          <Text style={styles.textLogo}>RELOAD</Text>
          <View>
              <View style={styles.notification}/>
          <Image source={require("../../assets/chat_icon.png")}/>
          </View>
      </View>
  )
}

export default header_home;

const styles = StyleSheet.create({
    container : {
        height : 70,
        backgroundColor : "white",
        paddingLeft:20,
        paddingRight:20,
        flexDirection : "row",
        alignItems : "center",
        justifyContent:"space-between"
    },
    image_avatar : {
        height:46,
        width : 46,
        borderRadius : 360
    },
    containerImageAvatar : {
        height : 52,
        width : 52,
        backgroundColor : "#FFE",
        shadowColor: "#ccc",
        borderRadius : 360,
        alignItems:"center",
        justifyContent:"center",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    textLogo : {
        fontSize:20,
        color : "#000",
        letterSpacing:6
    },
    notification : {
        height : 12,
        width:12,
        borderRadius : 360,
        backgroundColor : "orange",
        alignSelf:"flex-end",
        marginBottom:-8,
        marginRight : -4,
        zIndex:1
    }
    
})
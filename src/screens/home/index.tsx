import React,{useRef} from 'react';
import { SafeAreaView, StyleSheet,View,Text,Pressable } from 'react-native';
import { HeaderHome,ButtonAction,Calendar } from "../../components";
import { Modalize } from 'react-native-modalize';
import { AntDesign } from "@expo/vector-icons";

const home= () => {
    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };
    const onClose = () => {
        modalizeRef.current?.close();
    };

  return (
  <SafeAreaView style={styles.container}>
      <HeaderHome/>
      <ButtonAction title="Select date" onPress={onOpen}/>
      <Modalize modalHeight={550} modalStyle={{backgroundColor:"#fff"}} ref={modalizeRef}>
          <View style={{flex:1,justifyContent:"flex-end",height:500}}>
            <Pressable onPress={onClose} style={{flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:20,paddingLeft:10}}>
            <AntDesign name="close" size={20} color="#000" />
            <Text>Calendar</Text>
            </Pressable>
            <View style={{flex:1,paddingLeft:10,paddingRight:10}}>
                <Calendar/>
            </View>
            <ButtonAction title="Apply" onPress={onClose} style={{marginTop:20}}/>

          </View>
      </Modalize>
  </SafeAreaView>
  )
}

export default home;

const styles = StyleSheet.create({
    container : {
        flex:1,
    }
})
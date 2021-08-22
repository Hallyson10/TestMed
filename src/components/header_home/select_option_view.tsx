import React,{useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';

// import { Container } from './styles';

const header_home = () => {
    const [option,setOption] = useState("Timestamp");
  return (
      <View style={styles.container}>
          <Text onPress={()=>setOption("Timestamp")} style={[styles.text_option,{fontWeight:option==="Timestamp" ? "800":"600",color : option==="Timestamp" ? "#000" : "#ccc"}]}>Timestamp feed</Text>
          <Text onPress={()=>setOption("Activity")} style={[styles.text_option,{fontWeight:option==="Activity" ? "800":"600",color : option==="Activity" ? "#000" : "#ccc"}]}>Activity feed</Text>
      </View>
  )
}

export default header_home;

const styles = StyleSheet.create({
        container : {
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingLeft:20,
            paddingRight:20,
            height:50
        },
        text_option : {
            fontWeight:"800",
            fontSize:16,
        }
})
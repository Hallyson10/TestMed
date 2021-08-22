//import liraries
import React from 'react';
import { StyleSheet,ImageBackground,Text } from 'react-native';
import TopHeader from "./top_header";
import SelectOption from "./select_option_view";
// create a component
const MyComponent = () => {
    return (
        <>
        <TopHeader/>
        <ImageBackground resizeMode="cover" source={require("../../assets/ilustration_header.png")} style={styles.container} >
            <Text style={styles.text_title}>Lifestyle</Text>
            <Text style={styles.sub_title}>Get a holistic view of your activities to enhance your wellbeing and benefit from even more accurate recommendations. </Text>
        </ImageBackground>
        <SelectOption/>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height:180,
        paddingLeft:20,
        justifyContent: "center"
    },
    text_title : {
        fontSize:20,
        color : "#FFF",
        fontWeight: "600"
    },
    sub_title : {
        fontSize:16,
        color : "#FFF",
        width : 190
    }
});

//make this component available to the app
export default MyComponent;

import React,{useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

const App = ()=>{

    // const randomColor = 'rgb(32,0,126)'
    const [randomColor, setRandomColor] = useState('rgb(32,0,128)');

    const changeBG = ()=>{
        let color = "rgb(" + 
        Math.floor(Math.random() * 256) +
        "," + 
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";

        setRandomColor(color);
    };

    const resetBG = ()=>{
        let color = "rgb(0,0,0)";
        setRandomColor(color);
    }


    return (
        <>
        <StatusBar backgroundColor={randomColor}/>
        
       <View style={[styles.container,{backgroundColor: randomColor}]}>
       
       <TouchableOpacity onPress={changeBG}>
        <Text style={styles.text}>TapMe</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={resetBG}>
        <Text style={styles.text2}>Reset</Text>
        </TouchableOpacity>
        
        </View>
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize:30,
        backgroundColor:"#39FF14",
        paddingVertical:10,
        paddingHorizontal:40,
        color:"#FFFFFF",
        borderRadius:15,
        // textTransform: "uppercase",
    },

    text2: {
        fontSize:30,
        backgroundColor:"#39FF14",
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:50,
        color:"#FFFFFF",
        borderRadius:15,
    },

    
});
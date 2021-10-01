import React, {useState} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet

} from 'react-native'
import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'



const App = () => {
  // const uri = DiceFive
  const [uri, setUri] = useState(DiceOne)
  const [uri2, setUri2 ] = useState(DiceOne)

  const playButtonPress = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    let randomNumber2 = Math.floor(Math.random() * 6) + 1

    switch (randomNumber) {
      case 1:
        setUri(DiceOne)
        break;
      case 2:
        setUri(DiceTwo)
        break;
      case 3:
        setUri(DiceThree)
        break;
      case 4:
        setUri(DiceFour)
        break;
      case 5:
        setUri(DiceFive)
        break;
      case 6:
        setUri(DiceSix)
        break;
    
      default:
        setUri(DiceSix)
        break;
    };

    switch (randomNumber2) {
      case 1:
        setUri2(DiceOne)
        break;
      case 2:
        setUri2(DiceTwo)
        break;
      case 3:
        setUri2(DiceThree)
        break;
      case 4:
        setUri2(DiceFour)
        break;
      case 5:
        setUri2(DiceFive)
        break;
      case 6:
        setUri2(DiceSix)
        break;
    
      default:
        setUri2(DiceSix)
        break;
    }
  }

  return (
    <>
    <View style={styles.container}>
    <Pressable onPress={playButtonPress}>
      <Image style={styles.image} source={uri} />
      <Image style={styles.image2} source={uri2} />
      <Text style={styles.playgame}>Roll Dice!</Text>
      </Pressable>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,

  },
  image2:{
    width:200,
    height:200,
    marginTop: 10,
  },
  playgame: {
    fontSize: 25,
    color: "white",
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "skyblue",
    borderRadius: 15,
    borderWidth: 4,
    fontWeight: 'bold',
  


  }
})


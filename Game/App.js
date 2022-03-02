
import React, {useState} from 'react';

import Icons from './components/Icons'
import Snackbar from 'react-native-snackbar';

import {
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1, H3, 
  Button,
  Title,
} from 'native-base'
import { color } from 'native-base/lib/typescript/theme/styled-system';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [iseCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('')

  const changeItem = (itemNumber) => {
    //

  }

  const reloadGame = () => {
    //
  }

  const checkIsWinners = () => {
    //
  }


  return (
    <Container
    style= {{ backgroundColor: '333945', padding: 5}}
    >
      <Header>
        <Body>
          <Title>Tic.Tac.Toe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          <Icons name="circle" />
        </View>
      </Content>
 
    </Container>
  )
}

export default App;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    marginTop: 20,

  },
  box:{
    width: '33%',
    marginBottom: 6
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: "capitalize",
    color: '#FFFFFF',
    backgroundColor: '#03203C',
    paddingVertical:10, 
  }
})
import React, { Component } from 'react';
import Text from './Text';
import Button from './Button';
import Title from './Title';

class App extends Component {

  render() {
    const styles = {
      position:'absolute',
      width:'300px',
      height:'100px',
      bottom:'0px',
      right:'50%',
      left:'50%',
      marginLeft:'-150px',
    }
    return (
      <div style={{textAlign: 'center'}}>
        <Title text='Hello World'/>
        <Text text='1'/>
        <Text text='2'/>
        <Text text='3'/>
        <Text text='4'/>
        <br/><br/>
        <div style={styles}>
        <Button text='X' />
        <Button text='Y' />
        <Button text='Z' />
        </div>
      </div>
    );
  }
}

export default App;

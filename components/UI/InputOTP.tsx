import React, {FC, useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

interface Props {
  
  placeholder: any;
 
}


const Input: FC<Props> = props => {
  return (
    <View style={styles.container}>
        <TextInput
          style={{...styles.input
          }}
          
          placeholder={props.placeholder}
         
          ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    marginTop: 15,
    backgroundColor: '#FFF',
    height: 64,
    width: 64,
    paddingLeft: 10,
    fontSize:16,
    fontStyle:'normal',
    borderRadius:8,
    borderWidth:1,
    alignItems:'flex-start',
   
    
  },
 
});

export default Input;

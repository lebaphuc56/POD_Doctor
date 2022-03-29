import React, {FC, useState} from 'react';
import {StyleSheet, View, TextInput, Text,TextInputProps} from 'react-native';

interface Props extends TextInputProps{
  
  placeholder: any;
 
}


const Input: FC<Props> = props => {
  return (
    <View style={styles.container}>
        <TextInput
          style={{...styles.input
          }}
          {...props}
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
    marginTop: 10,
    backgroundColor: '#EFF3F6',
    alignSelf: 'center',
    height: 44,
    width: '89%',
    paddingLeft: 10,
    fontSize:16,
    fontStyle:'normal',
    fontWeight:'500',
    borderRadius:8
  },
  errorInput:{
    borderWidth:1,
    
  }
});

export default Input;

import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors';
const ToolBarHome = props => {
    return <View style={{ ...styles.toolbar, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    toolbar: {
      
        backgroundColor: '#FAFBFC',  
        height:70,
        flexDirection:"row",
        borderBottomColor: Colors.blue,
        borderBottomWidth:1,
        alignItems:'center',
       
        
    }
})

export default ToolBarHome;
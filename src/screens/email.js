import React,{useState} from "react";
import { View ,Image,Pressable,FlatList,TextInput,Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Email= props => {
    
    const[myPassword,setPassword]=useState('')


    return(
        
                <SafeAreaView style={{backgroundColor:'#FAFAFA',display:'flex',flex:1}}>
                     <View style={{padding:15}}>
       <Text 
                style={{color:'#D9344E',fontSize:20,fontWeight:'600',textAlign:'center'}}>
                Login with email address
                </Text>
            <View style={{flexDirection:'column'}}>
           
            <View style={{height:responsiveHeight(3),marginTop:50,width: responsiveWidth(100), paddingLeft: '2%'}}>
<Text style={{ fontSize:12,fontWeight:'600',color:' #382E30'}}>
           Email Address
        </Text>
</View>

            <View style={{position:'relative',borderWidth:1,borderColor:'#F8EBED',flexDirection:'row',marginTop:5,width:"100%",backgroundColor:'white',paddingTop:12,paddingBottom:12,justifyContent:'center',alignItems:'center',borderRadius:18}}>

  <TextInput
  style={{width: '80%'}}
        value={myPassword}
        onChangeText={(userPassword) =>setPassword(userPassword)}
        
        placeholder="Sample Text"
   />
    <Pressable>
    <MaterialCommunityIcons name="eye" size={30} color="lightgrey" style={{width: '100%'}}  />
    </Pressable>
            </View>
            <View style={{height:responsiveHeight(3),marginTop:30,width: responsiveWidth(100), paddingLeft: '2%'}}>
<Text style={{ fontSize:12,fontWeight:'600',color:' #382E30'}}>
           Password
        </Text>
</View>

            <View style={{position:'relative',borderWidth:1,borderColor:'#F8EBED',flexDirection:'row',marginTop:5,width:"100%",backgroundColor:'white',paddingTop:12,paddingBottom:12,justifyContent:'center',alignItems:'center',borderRadius:18}}>

  <TextInput
  style={{width: '80%'}}
        value={myPassword}
        onChangeText={(userPassword) =>setPassword(userPassword)}
        
        placeholder="Sample Text"
   />
    <Pressable>
    <MaterialCommunityIcons name="eye" size={30} color="lightgrey" style={{width: '100%'}}  />
    </Pressable>
            </View>
            </View>
            <LinearGradient
        // Button Linear Gradient
        colors={[ '#FF7D8B','#FF0731']}
        style={{paddingBottom:20,paddingTop:20,width:responsiveWidth(90),justifyContent:"center",alignItems:"center",flexDirection:'row',borderRadius:22}}>
    
 <Text 
                style={{paddingRight:60,fontSize:12,color:'white'}}>
          Caimbatore
                </Text>

      </LinearGradient>
 <View style={{position:'relative',marginTop:25,width:"100%",flexDirection:'row',paddingTop:12,paddingBottom:12,justifyContent:'center',alignItems:'center',borderRadius:18}}>
 <Text 
                style={{color:'black',fontSize:14,fontWeight:'400'}}>
                Don’t have an account? 
                </Text>
                <Text 
                style={{paddingLeft:5,color:'#D9344E',fontSize:14,fontWeight:'500'}}>
                 Sign Up
                </Text>

</View>
<View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

</View> 

 

</View>
<View style={{position:'absolute',width:"100%",bottom:20,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{color:'#05392E',fontSize:10,fontWeight:'400'}}>
                Privacy policy | Terms and conditions
                </Text>

</View>
                </SafeAreaView>
        
      
    
    )
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        
    },
});
export default Email;
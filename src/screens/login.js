import React from "react";
import { View ,Image,FlatList, Dimensions,Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";


const LogIn= props => {


    return(
        
                <SafeAreaView style={{backgroundColor:'#FAFAFA',display:'flex',flex:1}}>
                     <View style={{padding:15}}>
       <Text 
                style={{color:'#D9344E',fontSize:20,fontWeight:'600',textAlign:'center'}}>
                How would you like to login?
                </Text>
            <View style={{flexDirection:'column'}}>
            <View style={{position:'relative',marginTop:60,width:"100%",backgroundColor:'white',paddingTop:22,paddingBottom:22,justifyContent:'center',alignItems:'center',borderRadius:18}}>
            <Image
        style={{marginLeft:10,position:'absolute',left:15,top:15,height:30,width:30}}
        source={require('../../assets/google.png')}
      />
            <Text 
                style={{color:'black',fontSize:14,fontWeight:'600'}}>
                Login with Google
                </Text>

            </View>
            <View style={{position:'relative',marginTop:25,width:"100%",backgroundColor:'white',paddingTop:22,paddingBottom:22,justifyContent:'center',alignItems:'center',borderRadius:18}}>
            <Image
        style={{marginLeft:10,position:'absolute',left:15,top:18,height:20,width:20}}
        source={require('../../assets/phone.png')}
      />
            <Text 
                style={{color:'black',fontSize:14,fontWeight:'600'}}>
                Login with Email Adress
                </Text>

            </View>
            <View style={{position:'relative',marginTop:25,width:"100%",backgroundColor:'white',paddingTop:22,paddingBottom:22,justifyContent:'center',alignItems:'center',borderRadius:18}}>
            <Image
        style={{marginLeft:10,position:'absolute',left:15,top:18,height:20,width:20}}
        source={require('../../assets/phone.png')}
      />
            <Text 
                style={{color:'black',fontSize:14,fontWeight:'600'}}>
                Login with mobile number
                </Text>

            </View>
            </View>
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
export default LogIn;
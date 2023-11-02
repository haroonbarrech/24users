import React from "react";
import { View ,Image,FlatList, TextInput,Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const Support= props => {
    console.log(props);
    return(
        
        <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
                      <View style={{height:70,justifyContent:'center'}}>
        <Text 
                style={{paddingLeft:10,fontSize:16,fontWeight:'600',color:'#524D62',fontWeight:'500'}}>
         Contact us for any help
                </Text>
           
            </View>
            <View style={{marginLeft:10,width:319,height:130,backgroundColor:'#FAFAFA',justifyContent:'center',borderRadius:18}}>
            <View style={{marginLeft:18,borderWidth:1,borderColor:'#F5F5F5',borderRadius:12,width:264,height:44,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
      <SimpleLineIcons style={{paddingLeft:20}} name="envelope" size={24} color="black" />
<TextInput
  style={{paddingLeft:10}}
  placeholder="Enter Your Email"
  keyboardType="numeric"
/>
 </View>
 <View style={{height:responsiveHeight(1)}}>
      </View>
 <View style={{marginLeft:18,borderWidth:1,borderColor:'#F5F5F5',borderRadius:12,width:264,height:44,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
 <FontAwesome style={{paddingLeft:20}}name="phone" size={24} color="black" />
<TextInput
  style={{paddingLeft:10}}
  placeholder="+91 987654 84683"
  keyboardType="numeric"
/>
 </View>
 </View>
 <View style={{height:70,justifyContent:'center'}}>
        <Text 
                style={{paddingLeft:10,fontSize:16,fontWeight:'600',color:'#524D62',fontWeight:'500'}}>
         Talk to Us?
                </Text>
           
            </View>
            <View style={{margin:16,height:120,borderWidth:1,borderColor:'#F5F5F5',borderRadius:18}}>
        <Text 
                style={{padding:20,fontSize:14,fontWeight:'400',color:'#382E30',fontWeight:'500'}}>
         Tell Us Your Issue......................
                </Text>
           
            </View>
            <LinearGradient
          // Button Linear Gradient
          colors={[ '#FF7D8B','#FF0731']}
          style={{marginLeft:30,height:46,width:320,marginTop:25,justifyContent:"center",alignItems:"center",flexDirection:'row',borderRadius:18,}}>
          
   <Text 
                  style={{fontSize:14,color:'white'}}>
        Submit Changes
                  </Text>
  
        </LinearGradient>
        <View style={{height:responsiveHeight(22)}}>
      </View>
      <View style={{height:responsiveHeight(3),justifyContent:'center',alignItems:'center'}}>
      <Text 
                  style={{fontSize:10,fontWeight:'400',color:'#05392E'}}>
         Privacy policy | Terms and conditions 
                  </Text>
      </View>
      <View style={{marginTop:10,height:responsiveHeight(3),justifyContent:'center',alignItems:'center'}}>
      <Text 
                  style={{fontSize:10,fontWeight:'400',color:'#05392E'}}>
        2022 © COSMOZEAL TECH LLP
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
export default Support;
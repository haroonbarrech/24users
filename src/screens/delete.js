import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';
const Delete= props => {
    console.log(props);
    return(
        
 <SafeAreaView style={{}}>
      <Image
        style={{width:responsiveWidth(100),position:'relative'}}
        source={require('../../assets/blur.png')}
      />
     <View style={{marginLeft:20,backgroundColor:'white', width: 360,position:'absolute',top:250,borderRadius:22,
             height:270,
             }}>
             <Text
        style={{paddingLeft:20,paddingTop:20,fontSize:16,fontWeight:'bold',color:'#382E30',fontWeight:'500'}}>
                    Are you sure you want to
                </Text>
                <Text
        style={{paddingLeft:20,fontSize:16,fontWeight:'bold',color:'#382E30',fontWeight:'500'}}>
                     delete your account?
                </Text>
                <Text
        style={{paddingLeft:20,paddingTop:20,fontSize:14,fontWeight:'400',color:'#786D6F',fontWeight:'500'}}>
                  Once deleted, you won’t be able to 
                </Text>
                <Text
        style={{paddingLeft:20,fontSize:14,fontWeight:'400',color:'#786D6F',fontWeight:'500'}}>
                  revert back or recover the details
                </Text>
                <Text
        style={{paddingLeft:20,fontSize:14,fontWeight:'400',color:'#786D6F',fontWeight:'500'}}>
         saved to the 24 hrs account.
                </Text>
                <View style={{height:responsiveHeight(7)}}>
      </View>
                <View style={{ width: 360,borderRadius:24,height:60,justifyContent:'center',flexDirection:'row' }}>
                <View style={{backgroundColor:'#FAFAFA', width: 150,borderRadius:24,height:50 ,justifyContent:'center',alignItems:'center'}}>
                <Text
        style={{fontSize:14,fontWeight:'600',color:'#382E30',fontWeight:'500'}}>
        Delete anyway
                </Text>

</View>
 
    <LinearGradient
          // Button Linear Gradient
          colors={[ '#FF7D8B','#FF0731']}
          style={{marginLeft:20,backgroundColor:'#FC7D91', width: 150,borderRadius:24,height:50 ,justifyContent:'center',alignItems:'center'}}>
       
   <Text 
                  style={{fontSize:14,fontWeight:'600',color:'#FFFFFF',fontWeight:'500'}}>
            Caimbatore
                  </Text>
  
        </LinearGradient>

             </View>
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
export default Delete;
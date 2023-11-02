import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const ImageDetail= props => {
    console.log(props);
    return(
        
       <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
       <ScrollView>
             <View style={{marginLeft:18,marginTop:10}}>
             <Image
        style={{height:responsiveHeight(40),width:responsiveWidth(90),borderRadius:18}}
        source={require('../../assets/shirt2.png')}
      />
      </View>
      <View style={{height:responsiveHeight(6),marginTop:10,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
      <Text 
                style={{fontSize:18,paddingLeft:10,fontWeight:'700',color:'#524D62'}}>
         Nike White T-Shirt
                </Text>
    <View style={{backgroundColor:'#FFA800',marginRight:10,borderRadius:8,height:responsiveHeight(4),width:responsiveWidth(22),alignItems:'center',justifyContent:'center',flexDirection:'row'}}>

      <Text 
                style={{fontSize:14,fontWeight:'700',color:'#FFFFFF',}}>
         20% Off
                </Text>
    </View>

      </View>
      <View style={{height:responsiveHeight(4),alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
      <Text 
                style={{paddingBottom:19,fontSize:11,paddingLeft:10,fontWeight:'400',color:'#8A8492'}}>
         Nike Store
                </Text>
      </View>
      <TouchableOpacity onPress={() => { props.navigation.navigate('OnlineOffers')}}>
                <View style={{position:"absolute",right:150,top:1,backgroundColor:"red",height:50,width:50,borderRadius:34,justifyContent:'center',alignItems:"center"}}>
           <Text style={{fontSize:12,color:"white"}}>
            Next page

           </Text>

            </View>

                </TouchableOpacity>
      <View style={{height:responsiveHeight(6),alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
      <Text 
                style={{fontSize:14,fontWeight:'600',color:'#524D62'}}>
         Offer Price:
                </Text>
                <Text 
                style={{fontSize:22,fontWeight:'600',color:'#524D62'}}>
         ₹303
                </Text>
                <View style={{height:responsiveHeight(6),width:responsiveWidth(29)}}>

                </View>

                <Text 
                style={{fontSize:12,paddingLeft:10,fontWeight:'400',color:'#524D62'}}>
        Regular Price
                </Text>
                <Text 
                style={{fontSize:16,fontWeight:'700',color:'#8A8492'}}>
        ₹303
                </Text>
    

      </View>
      <View style={{backgroundColor:'#F5F5F5',marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(6),marginTop:10,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
      <Octicons name="stopwatch" size={20} color="black" />
      <Text 
                style={{paddingLeft:10,fontSize:12,fontWeight:'400',color:'#382E30'}}>
        Expiring in
                </Text>
                <Text 
                style={{paddingLeft:10,fontSize:18,fontWeight:'700',color:'##382E30'}}>
        23 :00 : 12
                </Text>
      </View>
     
      <LinearGradient
        // Button Linear Gradient
        colors={[ '#A5061F','#D9344E']}
        style={{marginTop:10,justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(7),}}>
              <Image
        style={{marginLeft:15,height:responsiveHeight(4),width:responsiveWidth(8),borderRadius:18}}
        source={require('../../assets/watsapp.png')}
      />
        <Text 
            style={{fontSize:14,fontWeight:'600',color:'#FFFFFF'}}>
       Get Offer Via Watsapp
            </Text>
            <AntDesign style={{paddingRight:15}}name="right" size={24} color="white" />
      </LinearGradient>
      <LinearGradient
        // Button Linear Gradient
        colors={[ '#FC7D91','#D9344E']}
        style={{marginTop:10,justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(7),}}>
              <Image
        style={{marginLeft:15,height:responsiveHeight(4),width:responsiveWidth(8),borderRadius:18}}
        source={require('../../assets/watsapp.png')}
      />
        <Text 
            style={{fontSize:14,fontWeight:'600',color:'#FFFFFF'}}>
       Get Offer Via Phone Call
            </Text>
            <AntDesign style={{paddingRight:15}}name="right" size={24} color="white" />
      </LinearGradient>
      <View style={{marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(6),flexDirection:'row'}}>
      
                <Text 
                style={{paddingLeft:10,paddingTop:15,fontSize:12,fontWeight:'400',color:'#9CA4AB'}}>
        ------------------------------------------Other Options------------------------------------------
                </Text>

      </View>
      <View style={{backgroundColor:'#F5F5F5',marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(15),flexDirection:'row'}}>
      <View style={{backgroundColor:'white',height:84,borderRadius:18,margin:16,width:90,justifyContent:'center',alignItems:'center'}}>
      <Ionicons name="logo-instagram" size={40} color="black" />
      <Text 
                style={{fontSize:10,fontWeight:'600',color:'#382E30'}}>
        Instagram
                </Text>
</View>
 <View style={{backgroundColor:'white',height:84,borderRadius:18,margin:16,width:90,justifyContent:'center',alignItems:'center'}}>
 <FontAwesome5 name="facebook" size={40} color="black" />
      <Text 
                style={{fontSize:10,fontWeight:'600',color:'#382E30'}}>
        Facebook
                </Text>

</View>
 <View style={{backgroundColor:'white',height:84,borderRadius:18,margin:16,width:90,justifyContent:'center',alignItems:'center'}}>
 <MaterialCommunityIcons name="web" size={40} color="black" />
      <Text 
                style={{fontSize:10,fontWeight:'600',color:'#382E30'}}>
        Global
                </Text>

</View>
      
      </View>
      <View style={{backgroundColor:'#F5F5F5',marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(20),marginTop:10,flexDirection:'column'}}>
      <View style={{height:responsiveHeight(6),width:responsiveWidth(30),marginTop:10}}>
      <Text 
                style={{fontSize:14,paddingLeft:10,fontWeight:'600',color:'#524D62'}}>
        Description
                </Text>
              
 

      </View>
      <Text 
                style={{fontSize:12,paddingLeft:10,fontWeight:'400',color:'#8A8492'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
         ex ea commodo consequat
                </Text>
      </View>
</ScrollView>
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
export default ImageDetail;
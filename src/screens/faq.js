import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated, Button} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Entypo } from '@expo/vector-icons';
const FAQ= props => {
    console.log(props);
    return(
        
 <SafeAreaView>
            <View style={{position:'relative',marginTop:10,borderTopLeftRadius:18,borderTopRightRadius:18,backgroundColor:'white',justifyContent:'center'}}>
        <Text 
                style={{paddingLeft:20,paddingTop:10,fontSize:16,fontWeight:'600',color:'#524D62',fontWeight:'500'}}>
        How to get the offers
                </Text>
                <Entypo style={{position:'absolute',paddingTop:6,right:0,top:1,paddingRight:20}}name="chevron-small-down" size={28} color="black" />
                <Text 
                style={{paddingLeft:20,paddingTop:15,fontSize:14,fontWeight:'400',color:'#524D62',fontWeight:'500'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n
                </Text>
                <Text 
                style={{paddingLeft:20,paddingTop:15,fontSize:14,fontWeight:'400',color:'#524D62',fontWeight:'500'}}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </Text>
                <Text 
                style={{paddingLeft:20,paddingTop:15,fontSize:14,fontWeight:'400',color:'#524D62',fontWeight:'500'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n
                </Text>
            
            </View>
            <View style={{marginTop:4,height:60,backgroundColor:'white',justifyContent:'space-between',flexDirection:'row'}}>
            <Text 
                style={{paddingLeft:20,paddingTop:20,fontSize:16,fontWeight:'bold',color:'#382E30',fontWeight:'500'}}>
      How do I add my offer in app
                </Text>
                <TouchableOpacity>
                <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
                <Entypo style={{}}name="chevron-small-down" size={28} color="black" />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:4,height:60,backgroundColor:'white',justifyContent:'space-between',flexDirection:'row'}}>
            <Text 
                style={{paddingLeft:20,paddingTop:20,fontSize:16,fontWeight:'bold',color:'#382E30',fontWeight:'500'}}>
      How to get support
                </Text>
                <TouchableOpacity>
                <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
                <Entypo style={{}}name="chevron-small-down" size={28} color="black" />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:4,height:60,backgroundColor:'white',justifyContent:'space-between',flexDirection:'row'}}>
            <Text 
                style={{paddingLeft:20,paddingTop:20,fontSize:16,fontWeight:'bold',color:'#382E30',fontWeight:'500'}}>
      How to set alarm 
                </Text>
                <TouchableOpacity>
                <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
                <Entypo style={{}}name="chevron-small-down" size={28} color="black" />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:4,height:60,backgroundColor:'white',justifyContent:'space-between',flexDirection:'row'}}>
            <Text 
                style={{paddingLeft:20,paddingTop:20,fontSize:16,fontWeight:'bold',color:'#382E30',fontWeight:'500'}}>
    How to purchase products
                </Text>
                <TouchableOpacity>
                <View style={{height:60,width:50,justifyContent:'center',alignItems:'center'}}>
                <Entypo style={{}}name="chevron-small-down" size={28} color="black" />
                </View>
                </TouchableOpacity>
            </View>
            <Button
            style={{backgroundColor:'#D9344E',width:20}}
        title="Go To Next Page"
        onPress={() => { props.navigation.navigate('Delete');}}
      />

      

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
export default FAQ;
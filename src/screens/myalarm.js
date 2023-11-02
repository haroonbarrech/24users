import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedTileScrolling from "../components/slider4";
const MyAlarm= props => {
    console.log(props);
    return(
        
 
        <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
        <ScrollView>
               
            <View style={{height:responsiveHeight(6),justifyContent:'center'}}>
 <Text 
                style={{paddingLeft:20,fontSize:16,fontWeight:'600',color:'#524D62'}}>
       Products Alarm
                </Text>
      </View>
      <View style={{}}>
      <AnimatedTileScrolling />

      </View>
   
 
      <View style={{marginTop:25,height:responsiveHeight(6),justifyContent:'center'}}>
 <Text 
                style={{paddingLeft:20,fontSize:16,lineHeight: 24,fontWeight:'600',color:'#524D62'}}>
        Store alarm 
                </Text>
      </View>
      <View style={{marginLeft:10,backgroundColor:'white',alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(16),width:responsiveWidth(90)}}>
    <View style={{marginLeft:10,alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(16),width:responsiveWidth(38)}}>

  <Image
    style={{height:responsiveHeight(14),width:responsiveWidth(38)}}
    source={require('../../assets/mart2.png')}
  />
  </View>
      <View style={{borderRadius:18,flexDirection:'column',height:responsiveHeight(16),width:responsiveWidth(49)}}>
      <View style={{height:responsiveHeight(3)}}>
      </View>
 <Text 
                style={{paddingTop:6,fontSize:14,fontWeight:"600",lineHeight:22,paddingLeft:10,color:'#524D62'}}>
      Levis Clothing
                </Text>
                <Text 
                style={{paddingTop:6,fontSize:11,fontWeight:"400",paddingLeft:10,color:'#524D62'}}>
      Clothing Shop
                    </Text>
          
                <View style={{backgroundColor:'',flexDirection:'row',height:responsiveHeight(3)}}>
                <View style={{backgroundColor:'#F5F5F5',left:88,top:"20%" ,height:28,width:77,justifyContent:"center",alignItems:"center",flexDirection:'row',borderRadius:18}}>
                <Text 
                  style={{fontSize:12,color:'#786D6F'}}>
            Remove
                  </Text>
                </View>
              
                </View>
</View>
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
export default MyAlarm;
import React from "react";
import { View ,Image,FlatList, TextInput,Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


        
const Alarm= props => {
    console.log(props);
    return(
        <SafeAreaView>
        <View style={{position:'relative',flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>

        
        <LinearGradient
        // Button Linear Gradient
        colors={[ '#FF7D8B','#FF0731']}
        style={{position:'absolute',left:'12.5%',right:"51.56%",top:"13.33%" ,bottom:"13.33%" ,height:44,width:147,borderRadius:18,justifyContent:"center",alignItems:"center",flexDirection:'row'}}>
        
 <Text 
                style={{fontSize:14,fontWeight:'600',color:'white'}}>
          Store
                </Text>

      </LinearGradient>
      <LinearGradient
        // Button Linear Gradient
        colors={[ '#FAFAFA','#FAFAFA']}
        style={{position:'absolute',left:'54.06%',right:"51.56%",top:"13.33%" ,bottom:"13.33%" ,height:44,width:147,borderRadius:18,justifyContent:"center",alignItems:"center",flexDirection:'row'}}>

 <Text 
                style={{fontSize:14,fontWeight:'600',color:'#465166'}}>
          Product
                </Text>

      </LinearGradient>
   
      </View>
      <View style={{marginTop:60,height:responsiveHeight(1)}}>
      </View>
      <View style={{marginLeft:18,backgroundColor:'white',borderRadius:25,width:360,height:48,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
      <Ionicons style={{paddingLeft:20}} name="search-outline" size={24} color="black" />

     
<TextInput
  style={{paddingLeft:10}}

  placeholder="Search For Stores"
  keyboardType="numeric"
/>
 </View>
 <View style={{height:responsiveHeight(3)}}>
      </View>
 <View style={{height:responsiveHeight(6),justifyContent:'center'}}>
 <Text 
                style={{paddingLeft:10,fontSize:16,fontWeight:'600',color:'#524D62'}}>
          Recommended Stores
                </Text>
      </View>
      <View style={{marginLeft:10,backgroundColor:'white',alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(16),width:responsiveWidth(90)}}>
    <View style={{marginLeft:10,alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(16),width:responsiveWidth(38)}}>

  <Image
    style={{height:responsiveHeight(14),width:responsiveWidth(38)}}
    source={require('../../assets/mart.png')}
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
                <TouchableOpacity>
                <LinearGradient
          // Button Linear Gradient
          colors={[ '#FC7D91','#D9344E']}
          style={{left:88,top:"20%" ,height:28,width:77,justifyContent:"center",alignItems:"center",flexDirection:'row',borderRadius:18}}>    
   <Text 
                  style={{fontSize:12,color:'white'}}>
            Set Alarm
                  </Text>
        </LinearGradient>
                </TouchableOpacity>
                </View>
</View>
            </View>
            <View style={{marginLeft:10,marginTop:10,backgroundColor:'white',alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(16),width:responsiveWidth(90)}}>
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
                <TouchableOpacity>
                <LinearGradient
          // Button Linear Gradient
          colors={[ '#FC7D91','#D9344E']}
          style={{left:88,top:"20%" ,height:28,width:77,justifyContent:"center",alignItems:"center",flexDirection:'row',borderRadius:18}}>    
   <Text 
                  style={{fontSize:12,color:'white'}}>
            Set Alarm
                  </Text>
        </LinearGradient>
                </TouchableOpacity>
                </View>
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
export default Alarm;
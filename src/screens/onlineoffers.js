import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import EditNewNew from "./edit3";

const OnlineOffers= props => {
    const spinValue = React.useState(new Animated.Value(0))[0];
    console.log(props);
    return(
        <View>
        <View style={{backgroundColor:'red',height:responsiveHeight(5)}}></View>
        <View style={{backgroundColor:'#D9344E',height:responsiveHeight(7),flexDirection:'row'}}>
      
        <View style={{width:responsiveWidth(10),height:responsiveHeight(6),justifyContent:"center",alignItems:'center'}}>
        <TouchableOpacity>
        <Entypo name="chevron-small-left" size={24} color="white" />
        </TouchableOpacity>
               </View>
               <View style={{width:responsiveWidth(40),height:responsiveHeight(6),justifyContent:"center",alignItems:'center'}}>
               <Text 
                  style={{fontSize:16,paddingRight:50,fontWeight:'600',color:'white'}}>
         Online Offers
                  </Text>
               </View>
               <View style={{width:responsiveWidth(50),alignItems:'flex-end'}}>
               <LinearGradient
          // Button Linear Gradient
          colors={[ '#FF7D8B','#FF0731']}
          style={{height:responsiveHeight(4),width:responsiveWidth(40),justifyContent:"center",alignItems:"center",flexDirection:'row',borderTopLeftRadius:18,borderBottomLeftRadius:18}}>
          <Entypo name="location-pin" size={24} color="white" />
   <Text 
                  style={{paddingRight:60,fontSize:12,color:'white'}}>
            Caimbatore
                  </Text>
  
        </LinearGradient>
        </View>
            
      
  
               </View>
               {/*------------------------------------------------*/}
               <LinearGradient
          // Button Linear Gradient
          colors={[ '#FE7D3B','#FE0503']}
          style={{width:responsiveWidth(90),borderRadius:18,height:responsiveHeight(21.85),margin:15,flexDirection:'column'}}>
          
          <Image
        style={{position:'absolute',right:0}}
        source={require('../../assets/tangle.png')}
      />
           <Text 
                style={{position:"absolute",width: 360,height: 526,left: 26,top: 39,fontWeight:'600',fontSize:18,color:"#FFFFFF"}}>
         Nike White T-Shirt
                </Text>
                
           <Text 
                style={{position:"absolute",width: 360,height: 526,left: 24,top: 67,fontWeight:'800',fontSize:32,color:"#FFFFFF"}}>
         60% Off
                </Text>
                <TouchableOpacity  onPress={() => { props.navigation.navigate('EditNewNew');}}>
                <View style={{backgroundColor:"white",height:30,width:102,position:'absolute',borderRadius:8,top:112,left:24,justifyContent:"center",alignItems:'center'}}>
                <Text 
                style={{fontWeight:'600',fontSize:12,color:"black"}}>
         Check Offers
                </Text>

                </View>

                </TouchableOpacity>
                
                <Image
        style={{position:'absolute',top:23,left:179,height:131,width:131}}
        source={require('../../assets/dish.png')}
      />


  
        </LinearGradient>
        <LinearGradient
          // Button Linear Gradient
          colors={[ '#FC3A42','#9C0D77']}
          style={{width:responsiveWidth(90),borderRadius:18,height:responsiveHeight(21.85),margin:15,flexDirection:'column'}}>
          
          <Image
        style={{position:'absolute',right:0}}
        source={require('../../assets/tangle.png')}
      />
           <Text 
                style={{position:"absolute",width: 360,height: 526,left: 26,top: 39,fontWeight:'600',fontSize:18,color:"#FFFFFF"}}>
         Nike White T-Shirt
                </Text>
                
           <Text 
                style={{position:"absolute",width: 360,height: 526,left: 24,top: 67,fontWeight:'800',fontSize:32,color:"#FFFFFF"}}>
         60% Off
                </Text>
                <View style={{backgroundColor:"white",height:30,width:102,position:'absolute',borderRadius:8,top:112,left:24,justifyContent:"center",alignItems:'center'}}>
                <Text 
                style={{fontWeight:'600',fontSize:12,color:"black"}}>
         Check Offers
                </Text>

                </View>
                <Image
        style={{position:'absolute',top:23,left:179,height:131,width:131}}
        source={require('../../assets/shirt22.png')}
      />


  
        </LinearGradient>
        <LinearGradient
          // Button Linear Gradient
          colors={[ '#F0424A','#A9082C']}
          style={{width:responsiveWidth(90),borderRadius:18,height:responsiveHeight(21.85),margin:15,flexDirection:'column'}}>
          
          <Image
        style={{position:'absolute',right:0}}
        source={require('../../assets/tangle.png')}
      />
           <Text 
                style={{position:"absolute",width: 360,height: 526,left: 26,top: 39,fontWeight:'600',fontSize:18,color:"#FFFFFF"}}>
         Nike White T-Shirt
                </Text>
                
           <Text 
                style={{position:"absolute",width: 360,height: 526,left: 24,top: 67,fontWeight:'800',fontSize:32,color:"#FFFFFF"}}>
         60% Off
                </Text>
                <View style={{backgroundColor:"white",height:30,width:102,position:'absolute',borderRadius:8,top:112,left:24,justifyContent:"center",alignItems:'center'}}>
                <Text 
                style={{fontWeight:'600',fontSize:12,color:"black"}}>
         Check Offers
                </Text>

                </View>
                <Image
        style={{position:'absolute',top:23,left:179,height:131,width:131}}
        source={require('../../assets/dish3.png')}
      />


  
        </LinearGradient>
        <TouchableOpacity onPress={() => { props.navigation.navigate('Edit');}}>
                <View style={{position:"absolute",right:0,backgroundColor:"red",height:70,width:70,borderRadius:34,justifyContent:'center',alignItems:"center"}}>
           <Text style={{fontSize:12,color:"white"}}>
            Next page

           </Text>

            </View>

                </TouchableOpacity>
              
               </View>
    
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
export default OnlineOffers;
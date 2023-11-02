import React from "react";
import { View ,Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';

const EditNoo= props => {
    console.log(props);
    return(
    
             <View style={{}}>
        <Image
        style={{height:responsiveHeight(80),width:responsiveWidth(100),position:'relative'}}
        source={require('../../assets/blurrr.png')}
      />
      
      <View style={{height:responsiveHeight(60),width:responsiveWidth(100),backgroundColor:'white',borderTopRightRadius:22,borderTopLeftRadius:22,position:'absolute',top:'35%',Bottom:0}}>
      <View style={{padding:10, flex: 1, flexDirection: 'column'}}>
      <View style={{height:responsiveHeight(3),marginTop:1,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
      <Text 
                style={{fontSize:16,paddingLeft:10,fontWeight:'600',color:'#524D62'}}>
         Swiggy Offers
                </Text>
    

      </View>
      
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
      <View style={{height:responsiveHeight(3)}}>

      </View>
 <View style={{marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(15),marginTop:1,flexDirection:'column'}}>
      <View style={{height:responsiveHeight(6),width:responsiveWidth(30),marginTop:3}}>
      <Text 
                style={{fontSize:14,paddingLeft:10,fontWeight:'600',color:'#524D62'}}>
        Offer Details
                </Text>
      </View>
      <Text 
                style={{fontSize:12,paddingLeft:10,fontWeight:'400',color:'#8A8492'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
         ex ea commodo consequat
                </Text>
      </View>
      <View style={{height:responsiveHeight(3)}}>
      <TouchableOpacity>
      <LinearGradient
          // Button Linear Gradient
          colors={[ '#FC7D91','#D9344E']}
          style={{marginLeft:30,width:320,height:46,borderRadius:18,margin:15,flexDirection:'column',justifyContent:"center",alignItems:'center'}}>
            <Text 
                style={{paddingLeft:10,fontSize:14,fontWeight:'600',color:'#FFFFFF'}}>
        Get Offer
                </Text>
    


  
        </LinearGradient>

      </TouchableOpacity>

</View>
    

  
               
      
      </View>
 
   
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
export default EditNoo;
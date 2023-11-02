import React from "react";
import { View ,Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const EditNew= props => {
    console.log(props);
    return(
    
             <View style={{}}>
        <Image
        style={{height:responsiveHeight(80),width:responsiveWidth(100),position:'relative'}}
        source={require('../../assets/blurrr.png')}
      />
      
      <View style={{height:responsiveHeight(80),width:responsiveWidth(100),backgroundColor:'white',borderTopRightRadius:22,borderTopLeftRadius:22,position:'absolute',top:'20%',Bottom:0}}>
      <View style={{padding:10, flex: 1, flexDirection: 'column'}}>
      <View style={{height:responsiveHeight(6),marginTop:1,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
      <Text 
                style={{fontSize:16,paddingLeft:10,fontWeight:'600',color:'#524D62'}}>
         Nike Store
                </Text>
    

      </View>
      
      <View style={{width: '100%', height: '100%', padding:0, margin:0,borderRadius:22,position:"relative"}}>
               <MapView style={{width: '100%', height: 150, padding:0, margin:0,}} />
        
               <View style={{position:'absolute',width: 105,height: 30,left:250,top: 116,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
               <TouchableOpacity>
               <Text 
                style={{fontSize:12,fontWeight:'600',color:'#524D62'}}>
         View on Map
                </Text>
                </TouchableOpacity>

               </View>

               
            
      </View>
   
      
      
      

 </View>
 <View style={{marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(10),marginTop:1,flexDirection:'column'}}>
      <View style={{height:responsiveHeight(6),width:responsiveWidth(30),marginTop:1}}>
      <Text 
                style={{fontSize:14,paddingLeft:10,fontWeight:'600',color:'#524D62'}}>
        Address
                </Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate('EditNoo');}}>
                <View style={{position:"absolute",left:"90%",top:-8,backgroundColor:"red",height:40,width:90,borderRadius:34,justifyContent:'center',alignItems:"center"}}>
           <Text style={{fontSize:12,color:"white"}}>  
            Next page

           </Text>

            </View>

                </TouchableOpacity>
              
 

      </View>
      <Text 
                style={{fontSize:12,paddingLeft:10,fontWeight:'400',color:'#8A8492'}}>
        L73/23 Oppanakara street, Opp to Saravana stores, 100 ft, Raja street, Coimbatore - 641001
                </Text>
      </View>
      <View style={{height:responsiveHeight(3)}}>

      </View>
 <View style={{marginLeft:15,marginRight:15,borderRadius:22,height:responsiveHeight(15),marginTop:1,flexDirection:'column'}}>
      <View style={{height:responsiveHeight(6),width:responsiveWidth(30),marginTop:3}}>
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
      <View style={{height:responsiveHeight(3)}}>

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
      <View style={{height:responsiveHeight(6),width:responsiveWidth(40),marginTop:5,flexDirection:'row'}}>
      <Text 
                style={{fontSize:12,paddingLeft:20,fontWeight:'400',color:'#382E30'}}>
        Any Issue?
                </Text>
                <Text 
                style={{fontSize:12,paddingLeft:1,fontWeight:'600',color:'#D9344E'}}>
        Report This Store
                </Text>
              
 

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
export default EditNew;
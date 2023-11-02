import React from "react";
import { View ,TextInput,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';





const Profile= props => {
    console.log(props);
    return(
        <SafeAreaView style={{backgroundColor:'white',display:'flex',flex:1}}>
 
        <LinearGradient
        // Button Linear Gradient
        colors={[ '#FF7D8B','#FF0731']}
        style={{height:98,justifyContent:"center",alignItems:"center",flexDirection:'row',}}>
  
  <Image
        style={{position:'absolute',left:0,top:10}}
        source={require('../../assets/profile.png')}
      />
       <Text 
                style={{position:'absolute',top:65,right:10,fontWeight:'600',fontSize:12,color:"white"}}>
         Edit
                </Text>
                <Text 
                style={{position:'absolute',top:60,left:122,fontWeight:'700',fontSize:18,color:"white"}}>
         Hi,John Doe
                </Text>

      </LinearGradient>
      <View style={{height:responsiveHeight(5)}}>
      </View>
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
 <View style={{height:responsiveHeight(1)}}>
      </View>
 <View style={{marginLeft:18,borderWidth:1,borderColor:'#F5F5F5',borderRadius:12,width:264,height:44,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
 <EvilIcons style={{paddingLeft:20}}name="location" size={24} color="black" />
<TextInput
  style={{paddingLeft:10}}
  placeholder="Caimbatore"
  keyboardType="numeric"
/>
 </View>
 <View style={{backgroundColor:"#FBF5F6",height: 132,width: 350,left: 20,top: 20,borderRadius:16}}>
 <View style={{flexDirection:'row',height:20}}>
 <Text 
                style={{position:'absolute',top:20,left:12,fontWeight:'600',fontSize:16,color:"#524D62"}}>
         Interested Categories
                </Text>
 <Text 
                style={{position:'absolute',top:20,right:10,fontWeight:'600',fontSize:12,color:"#D9344E"}}>
         Edit
                </Text>

      <View style={{position:"absolute",left:10,top:50,height:responsiveHeight(6), display:'flex',flexWrap:"wrap",flexDirection:'row'}}>
 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,fontWeight:'600',color:'white'}}>
          Clothing
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(14),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,fontWeight:'600',color:'white'}}>
          Food
                </Text>

 </View>

 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,fontWeight:'600',color:'white'}}>
          Others
                </Text>
 </View>
 </View>
 

      
 
                

 </View>
 
 <TouchableOpacity onPress={() => { props.navigation.navigate('ProfileEdit')}}>
                <View style={{position:"absolute",left:"90%",top:-90,backgroundColor:"red",height:80,width:80,borderRadius:34,justifyContent:'center',alignItems:"center"}}>
           <Text style={{fontSize:12,color:"white"}}>
            Profile Edit page

           </Text>

            </View>

                </TouchableOpacity>

 </View>
 <View style={{height:responsiveHeight(30)}}>
      </View>
      <View style={{marginLeft:30,height:56,width:350,backgroundColor:'#F5F5F5',borderRadius:12,alignItems:'center',flexDirection:'row'}}>
      <Ionicons style={{paddingLeft:20}}name="trash-outline" size={24} color="black" />
      <Text style={{paddingLeft:20,fontSize:16,fontWeight:'600',color:"#002441"}}>
           Delete Account

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
export default Profile;
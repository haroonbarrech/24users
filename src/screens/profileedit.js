import React from "react";
import { View ,Image,FlatList,TextInput, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView, Animated} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const ProfileEdit= props => {
  const [active, setActiVe] = React.useState([]);
 
    console.log(active);
    return(
        
        <SafeAreaView style={{position:'relative',display:'flex',flex:1}}>
        <View style={{position:'relative',justifyContent:'center',alignItems:'center'}}>
        <Image
        style={{height:responsiveHeight(22)}}
        source={require('../../assets/profile.png')}
      />

        </View>
     <View style={{}}>
             <Text 
                style={{padding:15,fontWeight:'600',fontSize:12,color:"black"}}>
         Your Name
                </Text>
          <View style={{marginLeft:18,backgroundColor:'white',borderRadius:12,width:responsiveWidth(90),height:44,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
<TextInput
  style={{paddingLeft:10}}
  placeholder="Enter Your Email"
  keyboardType="numeric"
/>
 </View>
 <Text 
                style={{padding:15,fontWeight:'600',fontSize:12,color:"black"}}>
         Your Email
                </Text>
          <View style={{marginLeft:18,backgroundColor:'white',borderRadius:12,width:responsiveWidth(90),height:44,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
<TextInput
  style={{paddingLeft:10}}
  placeholder="Enter Your Email"
  keyboardType="text"
/>
 </View>
 <Text 
                style={{padding:15,paddingTop:10,fontWeight:'600',fontSize:12,color:"black"}}>
         Your Location
                </Text>
          <View style={{marginLeft:18,backgroundColor:'white',borderRadius:12,width:responsiveWidth(90),height:44,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
<TextInput
  style={{paddingLeft:10}}
  placeholder="Enter Your Email"
  keyboardType="numeric"
/>
<MaterialIcons style={{position:"absolute",right:10}}name="my-location" size={24} color="lightgrey" />
 </View>
 </View>
 <View style={{borderTopRightRadius:22,borderTopLeftRadius:22}}>
      <View style={{height:responsiveHeight(8),width:responsiveWidth(100),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text 
                style={{paddingLeft:10,fontSize:16,fontWeight:'600',color:'#524D62',fontWeight:'500'}}>
          Select Interested Categories
                </Text>
           
      </View>
      <View style={{height:responsiveHeight(6), display:'flex',flexWrap:"wrap",flexDirection:'row'}}>
 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'white'}}>
          Clothing
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#FBF5F6',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(14),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'#786D6F'}}>
          Food
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#FBF5F6',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'#786D6F'}}>
          Clothing
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#FBF5F6',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'#786D6F'}}>
          Others
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'white'}}>
          Clothing
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#FBF5F6',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(14),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'#786D6F'}}>
          Gifts
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'white'}}>
          Clothing
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'white'}}>
          Others
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#FBF5F6',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(14),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'#786D6F'}}>
          Jewels
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#FBF5F6',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'#786D6F'}}>
          Cosmetics
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#FBF5F6',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'#786D6F'}}>
          Clothing
                </Text>

 </View>
 <TouchableOpacity onPress={() => {
  setActiVe((oldData) => [...oldData, 9]);
 }}>
 <LinearGradient
          // Button Linear Gradient
          colors={[ '#FF7D8B','#FF0731']}
          style={{marginLeft:30,height:46,width:320,marginTop:25,justifyContent:"center",alignItems:"center",flexDirection:'row',borderRadius:18,}}>
          
   <Text 
                  style={{fontSize:14,color:'white'}}>
            Save Changes
                  </Text>
  
        </LinearGradient>

 </TouchableOpacity>


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
export default ProfileEdit;
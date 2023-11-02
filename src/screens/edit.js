import React from "react";
import { View ,Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Edit= props => {
    console.log(props);
    return(
    
             <View style={{}}>
        <Image
        style={{height:responsiveHeight(80),width:responsiveWidth(100),position:'relative'}}
        source={require('../../assets/blurrr.png')}
      />
      <View style={{height:responsiveHeight(50),width:responsiveWidth(100),backgroundColor:'white',borderTopRightRadius:22,borderTopLeftRadius:22,position:'relative',top:-80,Bottom:10}}>
      <View style={{height:responsiveHeight(8),width:responsiveWidth(100),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text 
                style={{paddingLeft:10,fontSize:16,fontWeight:'600',color:'#524D62',fontWeight:'500'}}>
          Select Categories
                </Text>
                <Text 
                style={{paddingRight:10,fontSize:11,color:'#3F3F3F',fontWeight:'400'}}>
          Clear All
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

 </View>
 <TouchableOpacity onPress={() => { props.navigation.navigate('EditNew');}}>
                <View style={{position:"absolute",left:"90%",bottom:0,backgroundColor:"red",height:40,width:40,borderRadius:34,justifyContent:'center',alignItems:"center"}}>
           <Text style={{fontSize:12,color:"white"}}>
            Next page

           </Text>

            </View>

                </TouchableOpacity>

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
export default Edit;
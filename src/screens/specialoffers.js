import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { LinearGradient } from 'expo-linear-gradient';




//---------------------------------------------------------------------------------------------------------------------------
const mealsList1 = [
    {
        id: 1,
      
        text:'Chicken Grill',
        text1:'Rowthar Biryani',
        text2:'₹ 121',
        text3:'20 % discount',
        text4:"'₹ 221",
         img:require('../../assets/dish.png')
      
    },
    {
        id: 2,
      
        text:'Nike jordan Shoes',
        text1:'Nike Store',
        text2:'fdferiuf',
        text3:'10 % discount',
         img:require('../../assets/shirt.png')
      
    },
    {
        id: 3,
      
        text:'ddhhjdhjgg',
        text1:'dffff',
        text2:'fdferiuf',
        text3:'20 % discount',
         img:require('../../assets/dish.png')
      
    },
    {
        id: 4,
      
        text:'ddhhjdhjgg',
        text1:'dffff',
        text2:'fdferiuf',
        text3:'20 % discount',
         img:require('../../assets/dish.png')
      
    },


]
//----------------------------------------------------Slider1-----------------------------------------------------------------------

const Slider1= props => {
    return (
    <View style={styles.container}>
      <SwiperFlatList
        data={mealsList1}
        renderItem={({ item }) => {
          console.log(props);
          return (
            <View style={{position:'relative',marginLeft:12,backgroundColor:'white',borderRadius:18,height:268,width:168}}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Dashboard');}}>
            <Image
    style={{height:154,width:168}}
    source={item.img}
  />
            

            </TouchableOpacity>
  
   <Text 
            style={{paddingLeft:10,paddingTop:5,fontSize:14,fontWeight:'600',color:'#524D62'}}>
      {item.text}
            </Text>
            <Text 
            style={{paddingLeft:10,paddingTop:5,fontSize:11,color:'#8A8492'}}>
       {item.text1}
            </Text>
            <View style={{height:responsiveHeight(3),flexDirection:'row'}}>
            <Text 
            style={{paddingLeft:10,paddingTop:5,fontSize:16,color:'#5C5962',fontWeight:'600'}}>
        {item.text2}
            </Text>
             <Text 
            style={{paddingLeft:10,paddingTop:8,textDecorationLine:"line-through",fontSize:12,fontWeight:'500',color:'#524D62'}}>
        {item.text4}
            </Text>
             </View>
            <View style={{position:'absolute',bottom:0,left:15,}}>
            <LinearGradient
        // Button Linear Gradient
        colors={[ '#FF0731','#FF7D8B']}
        style={{justifyContent:'center',alignItems:'center',borderTopRightRadius:28,borderTopLeftRadius:28,height:responsiveHeight(3),width:responsiveWidth(36)}}>
         <Text 
            style={{fontSize:11,fontWeight:'400',color:'#FFFFFF'}}>
        {item.text3}
            </Text>
      </LinearGradient>
         
            </View>

</View>
   
         
  
        )
        }
        }
      />
    </View>
  );
        }

const SpecialOffer= props => {
    console.log(props);
    return(
        <ScrollView>
      <View>
             <View style={{}}>
                    
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
         24 hrs special
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
           
 

            
            <LinearGradient
        // Button Linear Gradient
        colors={['#A5061F','#D9344E']}
        style={{height:responsiveHeight(16)}}>
                 <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:responsiveHeight(8)}}>
            <Text 
                style={{paddingLeft:10,fontSize:14,fontWeight:'600',color:'white'}}>
         Select Categories
                </Text>
          
          <TouchableOpacity onPress={() => { props.navigation.navigate('Edit');}}>
                <View style={{marginRight:1,alignItems:'center',flexDirection:'row',height:responsiveHeight(4),width:responsiveWidth(16)}}>
                <FontAwesome style={{paddingLeft:10}} name="edit" size={15} color="white" />
                <Text 
                style={{paddingLeft:5,fontSize:12,color:'white',fontWeight:'500'}}>
          Edit
                </Text>
</View>
 </TouchableOpacity>
 </View>
 <View style={{height:responsiveHeight(6),flexDirection:'row'}}>
 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(20),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'white'}}>
          Clothing
                </Text>

 </View>
 <View style={{margin:5,backgroundColor:'#D9344E',borderWidth:1,borderColor:'white',height:responsiveHeight(5),width:responsiveWidth(14),borderRadius:18,justifyContent:'center',alignItems:'center'}}>
 <Text 
                style={{fontSize:12,color:'white'}}>
          Food
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

 </View>
 
 
 
      
      </LinearGradient>
      </View>
      <TouchableOpacity onPress={() => { props.navigation.navigate('ImageDetail');}}>
                <View style={{position:"absolute",right:90,backgroundColor:"red",height:40,width:40,borderRadius:34,justifyContent:'center',alignItems:"center"}}>
           <Text style={{fontSize:12,color:"white"}}>
            Next page

           </Text>

            </View>

                </TouchableOpacity>
      
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:responsiveHeight(8)}}>
            <Text 
                style={{fontSize:16,fontWeight:'600',paddingLeft:10,color:'#524D62'}}>
         Live Offers
                </Text>
          
          <TouchableOpacity>
                <View style={{marginRight:10,justifyContent:'center',alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(4),width:responsiveWidth(23)}}>
                <Text 
                style={{paddingLeft:10,fontSize:11,color:'#524D62'}}>
          View All
                </Text>
             
                <Entypo name="chevron-small-right" size={18} color="black" />
</View>
 </TouchableOpacity>
            </View>
            <Slider1/>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:responsiveHeight(8)}}>
            <Text 
                style={{fontSize:15,fontWeight:'600',paddingLeft:10,color:'#524D62'}}>
         Expired Offers
                </Text>
          
          <TouchableOpacity>
                <View style={{marginRight:10,justifyContent:'center',alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(4),width:responsiveWidth(23)}}>
                <Text 
                style={{paddingLeft:10,fontSize:11,color:'#524D62'}}>
          View All
                </Text>
             
                <Entypo name="chevron-small-right" size={18} color="black" />
</View>
 </TouchableOpacity>
            </View>
            <Slider1/>

            </View>
            </ScrollView>

            
        
    
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
export default SpecialOffer;
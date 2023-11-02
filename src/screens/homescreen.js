import React from "react";
import { View ,Image,FlatList, Text, StyleSheet,SafeAreaView, TouchableOpacity, ScrollView} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import SpecialOffer from "./specialoffers";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
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
      
        text:'ddhhjdhjgg',
        text1:'dffff',
        text2:'fdferiuf',
        text3:'sdyueqyie',
         img:require('../../assets/shoes.png')
      
    },
    {
        id: 3,
      
        text:'ddhhjdhjgg',
        text1:'dffff',
        text2:'fdferiuf',
        text3:'sdyueqyie',
         img:require('../../assets/dish.png')
      
    },

]
//-------------------------------------------------------------------------------------------------------------------------------
const List2 = [
    {
        id: 1,
      
        text:'Zudio Clothing',
        text1:'Clothing Shop',
        text2:'Saravanampata ,cbe',
        text3:'12 km near',
    },
    {
      id: 2,
    
      text:'Zudio Clothing',
      text1:'Clothing Shop',
      text2:'Saravanampata ,cbe',
      text3:'12 km near',
  },
]
//--------------------------------------------------------------------------------------------------------------------------------
const List3 = [
  {
      id: 1,
    
      text:'IPhone 14Pro',
      text1:'Apple Store',
      text2:'₹ 121',
      text3:"'₹ 221",
       img:require('../../assets/iphone.png')
    
  },
  {
    id: 2,
  
    text:'Mavic Mini 3',
    text1:'DJI Drone',
    text2:'₹ 121',
    text3:"'₹ 221",
     img:require('../../assets/drone.png')
  
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
            <View style={{position:'relative',marginLeft:12,backgroundColor:'lightgrey',borderRadius:18,height:responsiveHeight(26),width:responsiveWidth(38)}}>
        <Image
    style={{height:responsiveHeight(14),width:responsiveWidth(38)}}
    source={item.img}
  />
   <Text 
            style={{paddingLeft:10,fontsize:80,color:'#524D62'}}>
      {item.text}
            </Text>
            <Text 
            style={{paddingLeft:10,fontsize:80,color:'#524D62'}}>
       {item.text1}
            </Text>
            <View style={{height:responsiveHeight(3),flexDirection:'row'}}>
            <Text 
            style={{paddingLeft:10,fontsize:80,color:'#524D62'}}>
        {item.text2}
            </Text>
             <Text 
            style={{paddingLeft:10,textDecorationLine:"line-through",fontsize:80,color:'#524D62'}}>
        {item.text4}
            </Text>
             </View>
            
            <LinearGradient
        // Button Linear Gradient
        colors={[ '#FF7D8B','#FF0731']}
        style={{position:'absolute',bottom:0,left:15,backgroundColor:'#FC7D91',borderTopRightRadius:32,borderTopLeftRadius:32,height:responsiveHeight(3),width:responsiveWidth(30)}}>
    <Text 
            style={{paddingLeft:10,fontsize:20,color:'#FFFFFF'}}>
        {item.text3}
            </Text>
      </LinearGradient>
           

</View>
          
         
  
        )
        }
        }
      />
    </View>
  );
        }
//-----------------------------------------------------Slider2--------------------------------------------------------------------------
const Slider2= props => {
    return (
    <View style={styles.container}>
      <SwiperFlatList
        data={List2}
        renderItem={({ item }) => {
          console.log(props);
          return (
                <View style={{marginLeft:10,borderWidth:1,alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(16),width:responsiveWidth(90)}}>
    <View style={{marginLeft:10,alignItems:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(16),width:responsiveWidth(38)}}>

  <Image
    style={{height:responsiveHeight(14),width:responsiveWidth(38)}}
    source={require('../../assets/mart.png')}
  />
  </View>
      <View style={{borderRadius:18,flexDirection:'column',height:responsiveHeight(16),width:responsiveWidth(49)}}>
 <Text 
                style={{paddingTop:6,fontSize:responsiveFontSize(2.5),paddingLeft:10,color:'#524D62'}}>
      {item.text}
                </Text>
                <Text 
                style={{paddingTop:6,fontSize:responsiveFontSize(2),paddingLeft:10,color:'#524D62'}}>
      {item.text1}
                </Text>
                <Text 
                style={{paddingTop:6,fontSize:responsiveFontSize(2),paddingLeft:10,color:'#524D62'}}>
      {item.text2}
                </Text>
                <View style={{flexDirection:'row',height:responsiveHeight(3)}}>
                <Text 
                style={{paddingTop:2,fontSize:responsiveFontSize(2),paddingLeft:10,color:'#524D62'}}>
      {item.text3}
                </Text>
                <Text 
                style={{paddingLeft:20,paddingTop:2,fontSize:responsiveFontSize(2),paddingLeft:10,color:'#524D62'}}>
      ★★★★★
                </Text>

                </View>
         

</View>

            </View>

          
         
  
        )
        }
        }
      />
    </View>
  );
        }
//----------------------------------------------------Slider3---------------------------------------------------------------------------
const Slider3= props => {
  return (
  <View style={styles.container}>
    <SwiperFlatList
      data={List3}
      renderItem={({ item }) => {
        console.log(props);
        return (
          <View style={{position:'relative',marginLeft:12,backgroundColor:'lightgrey',borderRadius:18,height:responsiveHeight(22),width:responsiveWidth(38)}}>
        <Image
    style={{height:responsiveHeight(14),width:responsiveWidth(38)}}
    source={item.img}
  />
   <Text 
            style={{paddingLeft:10,fontsize:80,fontWeight:'bold',color:'#524D62'}}>
      {item.text}
            </Text>
            <Text 
            style={{paddingLeft:10,fontsize:80,color:'#524D62'}}>
      {item.text1}
            </Text>
            <View style={{height:responsiveHeight(3),flexDirection:'row'}}>
            <Text 
            style={{paddingLeft:10,fontsize:80,color:'#524D62'}}>
        {item.text2}
            </Text>
             <Text 
            style={{paddingLeft:10,textDecorationLine:"line-through",fontsize:80,color:'#524D62'}}>
      {item.text3}
            </Text>
             </View>
          
</View>
            

        
       

      )
      }
      }
    />
  </View>
);
      }
const HomeScreen= props => {
    console.log(props);
    return(
       <SafeAreaView style={{flex:1,backgroundColor:'#FEFEFF'}}>
       <ScrollView>
            
       
         <View style={{height:responsiveHeight(6),marginTop:15}}>
       <Text 
                style={{position:'absolute',fontSize:24,fontWeight:'600',paddingLeft:21,color:'#D9344E'}}>
              Welcome to 24 hours
                </Text>
                <Text  style={{position:'absolute',color:'#5E5E5E',paddingTop:6,left:20,top:30,fontWeight:'400',fontSize: 11,}}>
              Find Great details for today
                </Text>
              
            </View>
         
            
            <View style={{padding:15,display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('SpecialOffer');}}>
            <View style={{marginLeft:5,backgroundColor:'grey',flexDirection:'row',borderRadius:18,paddingTop:8,paddingBottom:8,width:160,justifyContent:'center',alignItems:'center'}}>
            <LinearGradient
        // Button Linear Gradient
        colors={[ '#FF7D8B','#FF0731']}
        style={{}}>
    <FontAwesome name="tag" size={30} color="#FF7D8B" />

      </LinearGradient>
           
            <Text  style={{paddingLeft:10,fontSize:12,fontWeight:'600',color:'#474747'}}>
              24 hrs special
                </Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={{marginLeft:26,backgroundColor:'lightgrey',flexDirection:'row',borderRadius:18,paddingTop:8,paddingBottom:8,width:160,justifyContent:'center',alignItems:'center'}}>
            <FontAwesome name="tag" size={30} color="#FF7D8B" />
            <Text  style={{paddingLeft:10,fontSize:12,fontWeight:'600',color:'#474747'}}>
            Retail Offers
                </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('SpecialOffer');}}>
            <View style={{marginLeft:5,marginTop:20,backgroundColor:'lightgrey',flexDirection:'row',borderRadius:18,paddingTop:8,paddingBottom:8,width:160,justifyContent:'center',alignItems:'center'}}>
            <FontAwesome name="tag" size={30} color="#FF7D8B" />
            <Text  style={{paddingLeft:10,fontSize:12,fontWeight:'600',color:'#474747'}}>
              24 hrs special
                </Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={{marginLeft:26,marginTop:20,backgroundColor:'lightgrey',flexDirection:'row',borderRadius:18,paddingTop:8,paddingBottom:8,width:160,justifyContent:'center',alignItems:'center'}}>
            <FontAwesome name="tag" size={30} color="#FF7D8B" />
            <Text  style={{paddingLeft:10,fontSize:12,fontWeight:'600',color:'#474747'}}>
            Retail Offers
                </Text>
            </View>
            </TouchableOpacity>
            
            </View>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:responsiveHeight(8)}}>
            <Text 
                style={{paddingLeft:"4%",fontSize:16,fontWeight:'600',color:'#524D62'}}>
          Deals for you
                </Text>
          
          <TouchableOpacity>
                <View style={{marginRight:10,marginLeft:30,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(4),width:responsiveWidth(23)}}>
                <Text 
                style={{fontSize:11,fontWeight:'400',color:'#524D62'}}>
          View All
                </Text>
             
                <Entypo name="chevron-small-right" size={20} color="black" />
</View>
 </TouchableOpacity>
            </View>
           <Slider1/>
             <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:responsiveHeight(8)}}>
            <Text 
                style={{fontSize:16,fontWeight:'600',paddingLeft:"4%",color:'#524D62'}}>
         Popular Store Near You
                </Text>
          
                <TouchableOpacity>
                <View style={{marginRight:10,marginLeft:30,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(4),width:responsiveWidth(23)}}>
                <Text 
                style={{fontSize:11,fontWeight:'400',color:'#524D62'}}>
          View All
                </Text>
             
                <Entypo name="chevron-small-right" size={20} color="black" />
</View>
 </TouchableOpacity>
            </View>
            {/*-----------------------------------Second Flat List------------------------------------------------*/}
            <Slider2/>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:responsiveHeight(8)}}>
            <Text 
                style={{fontSize:16,fontWeight:'600',paddingLeft:"4%",color:'#524D62'}}>
         Highly Rated
                </Text>
          
                <TouchableOpacity>
                <View style={{marginRight:10,marginLeft:30,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:18,flexDirection:'row',height:responsiveHeight(4),width:responsiveWidth(23)}}>
                <Text 
                style={{fontSize:11,fontWeight:'400',color:'#524D62'}}>
          View All
                </Text>
             
                <Entypo name="chevron-small-right" size={20} color="black" />
</View>
 </TouchableOpacity>
            </View>
            <Slider3/>
   
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
export default HomeScreen;
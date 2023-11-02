import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View ,Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import HomeScreen from "../screens/homescreen";
import SpecialOffer from "../screens/specialoffers";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Edit from "../screens/edit";
import ImageDetail from "../screens/imagedetail";
import EditNew from "../screens/edit2";
import OnlineOffers from "../screens/onlineoffers";
import EditNewNew from "../screens/edit3";
import EditNoo from "../screens/edit3";
import Alarm from "../screens/alarm";
import MyAlarm from "../screens/myalarm";
import Profile from "../screens/myprofile";
import ProfileEdit from "../screens/profileedit";
import Support from "../screens/support";
import FAQ from "../screens/faq";
import Delete from "../screens/delete";
import LogIn from "../screens/login";
import Email from "../screens/email";


const stack = createNativeStackNavigator();
const Navigator = props => {
  
    return(
      
        <stack.Navigator initialRouteName="SpecialOffer">
             <stack.Screen name="HomeScreen " component={HomeScreen} options={{
                headerTitleAlign: 'center',
                headerShown: true,
              title: '',
               headerStyle: {
               },
               headerLeft: () => (
                <Ionicons name="menu-outline" size={24} color="black" />),
                headerRight: () => (
                  <View style={{flexDirection:"row"}}>
                  <TouchableOpacity>
                  <AntDesign name="gift" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Ionicons style={{paddingLeft:20}} name="person-outline" size={24} color="black" />
                  </TouchableOpacity>
                  
                

                  </View>
                  )
            }} /> 
             <stack.Screen name="SpecialOffer" component={SpecialOffer} options={{
                headerTitleAlign: 'right',
                headerShown: false,
              title: '24 hrs Special',
               headerStyle: {
                backgroundColor: '#D9344E',
               },
               headerLeft: () => (
                <Entypo name="chevron-small-left" size={24} color="black" />),
                headerRight: () => (
                    <Ionicons name="person-outline" size={24} color="black" />)
            }} />   
            <stack.Screen name="Edit" component={Edit} options={{
                headerTitleAlign: 'right',
                headerShown:false,
              title: 'Edit',
               headerStyle: {
                backgroundColor: '#D9344E',
               },
               headerLeft: () => (
                <Entypo name="chevron-small-left" size={24} color="black" />),
                headerRight: () => (
                    <Ionicons name="person-outline" size={24} color="black" />)
            }} /> 
              <stack.Screen name="ImageDetail" component={ImageDetail} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: 'Nike Store',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={24} color="black" />),
                headerRight: () => (
                    <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>View Store</Text>)
            }} />
              <stack.Screen name="EditNew" component={EditNew} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: 'Nike Store',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={24} color="black" />),
                headerRight: () => (
                    <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>View Store</Text>)
            }} />   
                <stack.Screen name="OnlineOffers" component={OnlineOffers} options={{
                headerTitleAlign: 'right',
                headerShown:false,
              title: 'Nike Store',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={24} color="black" />),
                headerRight: () => (
                    <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>View Store</Text>)
            }} /> 
             <stack.Screen name="EditNoo" component={EditNoo} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: '---------',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={24} color="black" />),
                headerRight: () => (
                    <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>View Store</Text>)
            }} /> 
                  <stack.Screen name="Alarm" component={Alarm} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: 'Set Alarm',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={14} color="black" />),
                headerRight: () => (
                  <TouchableOpacity onPress={() => { props.navigation.navigate('MyAlarm');}}>
                  <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>My Alarm</Text>

                  </TouchableOpacity>)
            }} />    
                 <stack.Screen name="MyAlarm" component={MyAlarm} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: 'My Alarm',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={14} color="black" />),
                headerRight: () => (
                  <TouchableOpacity >
                  <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>Set Alarm</Text>

                  </TouchableOpacity>
                    )
            }} /> 
               <stack.Screen name="Profile" component={Profile} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: 'My Alarm',
               headerStyle: {
                backgroundColor: '#D9344E',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={14} color="black" />),
               
            }} /> 
            <stack.Screen name="ProfileEdit" component={ProfileEdit} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: 'Edit Profile',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={14} color="black" />),
                headerRight: () => (
                  <TouchableOpacity >
                  <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>Save</Text>

                  </TouchableOpacity>
                )
               
            }} />  
             <stack.Screen name="Support" component={Support} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: 'Support',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={14} color="black" />),
                headerRight: () => (
                  <TouchableOpacity>
                  <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>View FAQ's</Text>

                  </TouchableOpacity>
                )
               
            }} />    
              <stack.Screen name="FAQ" component={FAQ} options={{
                headerTitleAlign: 'right',
                headerShown:true,
              title: 'FAQs',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={14} color="black" />),
                headerRight: () => (
                  <TouchableOpacity >
                  <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>Get Supports</Text>

                  </TouchableOpacity>
                )
               
            }} />     
            <stack.Screen name="Delete" component={Delete} options={{
                headerTitleAlign: 'right',
                headerShown:false,
              title: 'FAQs',
               headerStyle: {
                backgroundColor: '#FFFFFF',
               },
               headerLeft: () => (
                <AntDesign style={{paddingRight:10}}name="left" size={14} color="black" />),
                headerRight: () => (
                  <TouchableOpacity >
                  <Text style={{color:'#D9344E',fontSize:12,fontWeight:'600'}}>Get Supports</Text>

                  </TouchableOpacity>
                )
               
            }} />  
             <stack.Screen name="LogIn" component={LogIn} options={{
              headerShadowVisible: false,
                headerShown:true,
              title: '',
               headerStyle: {
                backgroundColor: '#FAFAFA',
               
               },
     
                headerRight: () => (
                  <TouchableOpacity >
                  <Text style={{color:'grey',fontSize:12,fontWeight:'600'}}>Skip</Text>

                  </TouchableOpacity>
                )
               
            }} /> 
                  <stack.Screen name="Email" component={Email} options={{
              headerShadowVisible: false,
                headerShown:true,
              title: '',
               headerStyle: {
                backgroundColor: '#FAFAFA',
               
               },
               headerLeft: () => (
                <TouchableOpacity>
<Entypo name="chevron-small-left" size={24} color="black" />
                </TouchableOpacity>

                ),
     
                headerRight: () => (
                  <TouchableOpacity >
                  <Text style={{color:'grey',fontSize:12,fontWeight:'600'}}>Skip</Text>

                  </TouchableOpacity>
                )
               
            }} />           
        </stack.Navigator>
      
    )

}
export default Navigator;
import React, { useRef } from 'react';
import { Animated, Dimensions, ProgressViewIOSComponent, ScrollView,View,Image,Text, StyleSheet } from 'react-native';
import plants from '../dummydata/slider';

const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;
 const AnimatedTileScrolling = props => {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <ScrollView
            horizontal
            pagingEnabled
            decelerationRate="fast"
            contentContainerStyle={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            snapToInterval={offset}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
            })}>
            {plants.map((x, i) => (
                /// design start
                <View style={styles.shadow}>
      <Image
    style={{height:154,width:168,borderRadius:24}}
    source={require('../../assets/shirt.png')}
  />
   <Text 
                style={{paddingLeft:10,paddingTop:10,fontSize:11,fontWeight:'600',color:'#524D62'}}>
         White T-shirt
                </Text>
                <Text 
                style={{paddingLeft:10,paddingTop:3,fontSize:11,fontWeight:'400',color:'#524D62'}}>
         Nike Shirt 
                </Text>
                <View style={{backgroundColor:'#F5F5F5',left:15,top:"8%" ,height:28,width:77,justifyContent:"center",alignItems:"center",flexDirection:'row',borderRadius:18}}>
                <Text 
                  style={{fontSize:12,color:'#786D6F'}}>
            Remove
                  </Text>
                </View>
              
      </View>
                 
            ))}
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: padding,
        alignItems: 'center',
    },
    item: {
        height: itemWidth,
        width: itemWidth,
        backgroundColor: 'darkblue',
        borderRadius: 10,
    },
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
    marginLeft:10,
    height:280,
    width:168,
    backgroundColor:'white',
    borderRadius:24
});
export default AnimatedTileScrolling;
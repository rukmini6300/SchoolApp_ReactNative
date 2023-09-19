import React from "react";
import { View,Text, SafeAreaView ,ScrollView,Image,TouchableOpacity,StyleSheet,ImageBackground} from "react-native";
import ExStyles from "./ExStyles";
import { Calendar } from 'react-native-calendars';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
const Attendence=()=>{
    return(
        <SafeAreaView >
           {/* <ImageBackground source={require('../assets/backimg.png')} resizeMode='cover' style={{flex:1}}>
               
           </ImageBackground> */}
         
          <View style={{paddingTop:50 ,marginHorizontal:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:20}}>
            <Text style={{marginBottom:20,fontSize:20,fontWeight:'bold',color:'#FF725E',textAlignVertical:'center'}}>Student Attendence</Text>
            <Text style={{borderWidth:1,height:40,width:40,borderRadius:20,textAlignVertical:'center',padding:8}}>
              <Ionicons name="person-sharp" size={24} color="#FF725E"  />
         </Text>
         </View>
          <Calendar/>
           <View style={{borderWidth:1,backgroundColor:'#fff',borderColor:'#ccc',elevation:5,marginTop:30,paddingVertical:15}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'#FF725E',textAlign:'center'}}>Monthly Attendence</Text>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
               <View style={{flexDirection:'row'}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'#3CDB59',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Present:24</Text>
               </View>
               <View style={{flexDirection:'row'}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'red',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Absent:02</Text>
               </View>
              </View>

              <View style={{flexDirection:'row',alignSelf:'center',paddingTop:15}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'yellow',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Holidays:02</Text>
               </View>

               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
               <View style={{flexDirection:'row'}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'#95989A',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Half Day:0</Text>
               </View>
               <View style={{flexDirection:'row'}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'#407BFF',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Leave:02</Text>
               </View>
              </View>
           </View>

           <View style={{borderWidth:1,backgroundColor:'#fff',borderColor:'#ccc',elevation:5,marginTop:30,paddingVertical:15}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'#FF725E',textAlign:'center'}}>Yearly Attendence</Text>
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
               <View style={{flexDirection:'row'}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'#3CDB59',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Present:250</Text>
               </View>
               <View style={{flexDirection:'row'}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'red',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Absent:10</Text>
               </View>
              </View>

              <View style={{flexDirection:'row',alignSelf:'center',paddingTop:15}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'yellow',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Holidays:20</Text>
               </View>

               <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
               <View style={{flexDirection:'row'}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'#95989A',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Half Day:2</Text>
               </View>
               <View style={{flexDirection:'row'}}>
                <Text style={{borderWidth:1,height:15,width:15,borderRadius:10,backgroundColor:'#407BFF',borderColor:'#ccc',textAlignVertical:'center'}}></Text>
               <Text style={{paddingLeft:10,textAlignVertical:'center',fontSize:15}}>Leave:04</Text>
               </View>
              </View>
           </View>
        </View>
        </SafeAreaView>
    )
}

export default Attendence;
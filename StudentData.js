import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,TouchableOpacity
} from "react-native";
import ExStyles from "./ExStyles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";


// const images = [
//   "https://media.gettyimages.com/id/1148218795/photo/children-cheering-in-classroom.jpg?s=612x612&w=gi&k=20&c=mAtT-rGxoV7dfjAoTlnB9ic6D2Y2ev0j1eYnsHye-PQ=",
//   "https://www.onatlas.com/wp-content/uploads/2019/03/education-students-people-knowledge-concept-P6MBQ5W-1080x675.jpg",
//   "https://visualsstock.com/details_watermark.php?filename=59067",
// ];

// const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;
const StudentData = ({navigation}) => {
  // const [imgActive, setimgActive] = useState(0);

  // onchange = (nativeEvent) => {
  //   if (nativeEvent) {
  //     const slide = Math.ceil(
  //       nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
  //     );
  //     if (slide != imgActive) {
  //       setimgActive(slide);
  //     }
  //   }
  // };
  return (
   <SafeAreaView style={{position:'relative'}} showsVerticalScrollIndicator={false}>
    
  <View style={{backgroundColor:'#FF725E',paddingHorizontal:20,flexDirection:'row',position:'relative',paddingTop:70,height:200,borderBottomEndRadius:20,borderBottomLeftRadius:20}}>
    <View style={{borderWidth:1,borderRadius:50,borderColor:'#ccc',textAlignVertical:'center',width:80,height:80,}}>
    <Image source={require('../assets/boy.png')} style={{width:80,height:80,borderRadius:50}} />
    </View>
    <View style={{textAlignVertical:'center',paddingLeft:20}}>
      <Text style={{fontSize:20,color:'#fff'}}>Student Information</Text>
      <Text style={{color:'#fff'}}>student@gmail.com</Text>
    </View>
  
  </View>
  <View style={ExStyles.box_std_cont}>
    <Image source={require('../assets/new.png')} style={{width:40,height:40,position:'absolute'}}/>
      <Text style={{textAlign:'center',fontSize:20,color:'#FF725E'}}>Notice Board</Text>
      <Text style={{fontSize:17,textAlign:'center',paddingTop:8}}>Today is Holiday</Text>
    </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrap}> */}
            {/* <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}
            > */}
              {/* {images.map((e, index) => (
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{ uri: e }}
                />
              ))} */}
            {/* </ScrollView>
            <View style={styles.wrapDot}>
              {images.map((e, index) => (
                <Text
                  key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                >
                  ●
                </Text>
              ))}
            </View> */}
          {/* </View> */}
  

        <View style={ExStyles.container}>
          <View style={{ flexDirection: "row",justifyContent: "space-around", marginBottom: 20,}}>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
             <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                  <Ionicons name="person" size={40} color="#FF725E" />
                </Text>
              </View>
              <Text style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}> Profile</Text>
            </TouchableOpacity>
          

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("attedence")}>
              <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                  <Ionicons name="reader" size={40}color="#FF725E"  />
                </Text>
              </View>
              </TouchableOpacity>
              <Text
                style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}
              >
                Attendence
              </Text>
            </View>
            <View>
              <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                  <Ionicons name="cash" size={40} color="#FF725E"  />
                </Text>
              </View>
              <Text
                style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}
              >
                Fees
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" ,marginBottom: 20,}}
          >
            <View>
              <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                  <Ionicons name="bus" size={40} color="#FF725E"  />
                </Text>
              </View>
              <Text style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}> Transport</Text>
            </View>

            <View>
              <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                <Ionicons name="md-book-outline" size={40} color="#FF725E"  />
                </Text>
              </View>
              <Text
                style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}
              >
                Library
              </Text>
            </View>
            <View>
              <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                <Ionicons name="information-circle-outline" size={40} color="#FF725E"  />
                </Text>
              </View>
              <Text
                style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}
              >
                Notice Board
              </Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" ,marginBottom: 20,}}
          >
            <View>
              <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                <Ionicons name="videocam-outline" size={40} color="#FF725E" />
                </Text>
              </View>
              <Text style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}> Zoom</Text>
            </View>

            <View>
              <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                  <Ionicons name="calendar-outline" size={40} color="#FF725E"  />
                </Text>
              </View>
              <Text
                style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}
              >
                Time Table
              </Text>
            </View>
            <View>
              <View style={ExStyles.std_cont}>
                <Text  style={{alignSelf:'center'}}>
                  <Ionicons name="gift-outline" size={40} color="#FF725E"  />
                </Text>
              </View>
              <Text
                style={{ fontSize: 16, paddingTop: 6, textAlign: "center" }}
              >
                Events
              </Text>
            </View>
          </View>
          
          </View>
          
        
      {/* </ScrollView> */}
    
   
    {/* <View style={ExStyles.bottom}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View>
        <Ionicons name="home-outline" size={24} color="black" style={{alignSelf:'center'}}/>
        <Text>Home</Text>
    </View>
    <View>
    <Ionicons name="ios-notifications-outline" size={24} color="black" style={{alignSelf:'center',position:'relative'}}/>
    <Text style={ExStyles.nft_dot}></Text>
        <Text>Notification</Text>
    </View>
    <View>
    <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" style={{alignSelf:'center'}}/>
        <Text>Chat</Text>
    </View>
    <View>
    <Ionicons name="md-person-circle-sharp" size={24} color="black" style={{alignSelf:'center'}} />
        <Text>User</Text>
    </View>
    </View> */}
    {/* </View> */}
   </SafeAreaView>
     
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   wrap: {
//     width: WIDTH,
//     height: HEIGHT * 0.29,
//     borderWidth:1,
//     borderRadius:15,
//     borderColor:'#ccc'
    
//   },
//   wrapDot: {
//     position: "absolute",
//     bottom: 6,
//     flexDirection: "row",
//     alignSelf: "center",
//   },
//   dotActive: {
//     margin: 3,
//     color: "#fff",
//   },
//   dot: {
//     margin: 3,
//     color: "#888",
//   },
// });
export default StudentData;

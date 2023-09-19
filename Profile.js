import React from "react";
import { View ,Text, SafeAreaView,Image,TouchableOpacity} from "react-native";
import ExStyles from "./ExStyles";
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
const Profile=({navigation})=>{
    return(
        <SafeAreaView>
           <View style={[ExStyles.container, ExStyles.head]}>
           <View style={{alignSelf:'center',borderWidth:1,borderRadius:100}}>
            <Image source={require('../assets/boy1.jpg')} style={{borderRadius:100, height:130,width:130,}} />
            </View>
            <View style={ExStyles.profile_cont}>
                <Text>Name:Rukmini</Text>
                <Text>Section:A</Text>
                <Text>Roll No:10</Text>
                <Text>Student Id:100056</Text>
            </View>

            <View style={ExStyles.parent_info}>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
                    <View>
                        <Text style={{fontSize:16,fontWeight:'bold',paddingBottom:6}}>Father's Name</Text>
                        <Text>Mr.Sankara Rao</Text>
                        <Text>call:4567890</Text>
                    </View>
                    <View>
                    <Text style={{fontSize:16,fontWeight:'bold',paddingBottom:6}}>Mother's Name</Text>
                        <Text>Mrs.Ganga</Text>
                        <Text>call:4567890</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',borderTopWidth:1, borderTopColor:'#ccc',padding:15}}>
                    <View>
                    <Ionicons name="ios-location-sharp" size={54} color="black" />
                  
                    </View>
                    <View style={{borderLeftWidth:1,paddingLeft:20}}>
                        <Text style={{fontWeight:'bold',fontSize:16}}>Pressent Address:</Text>
                        <Text>Raja Praasadamu, Masjid Banda, </Text>
                            <Text>Sai Pruthvi Enclave, Hyderabad Telangana 500084</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
                <Text style={ExStyles.pass_btn}>Reset Password</Text>
            </TouchableOpacity>

     
                {/* <LottieView source={require('../assets/loading.json')} autoPlay loop/> */}
   
           </View>
        </SafeAreaView>
    )
}
export default Profile;

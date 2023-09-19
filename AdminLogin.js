import React from "react";
import { View,Text, SafeAreaView ,Image,TextInput,TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import ExStyles from "./ExStyles";

const AdminLogin=({navigation})=>{
    return(
       <SafeAreaView>
         <ScrollView showsVerticalScrollIndicator={false}>
         <View style={ExStyles.container}>
            <View style={{alignSelf:'center',paddingTop:20}}> 
            <Image source={require('../assets/login5.png')} style={{width:400,height:400}}/>
            </View>
            <Text style={{textAlign:'center',fontSize:25,paddingTop:20,color:'#FF725E'}}>Login Page</Text>
            <View style={{paddingTop:40}}>
                <TextInput  placeholder="Admin Name" style={ExStyles.input}/>
                <TextInput   secureTextEntry={true} placeholder=" Password" secure={true} style={ExStyles.input}/>
            </View>
            <Text style={{textAlign:'center',color:'#FF725E'}}>Forgot password?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("student")}>
            <Text style={ExStyles.btn1}>Login</Text>
            </TouchableOpacity>

            {/* <View style={{flexDirection:'row',alignSelf:'center',paddingTop:20}}>
            <Ionicons name="logo-facebook" size={24} color="#fff" style={ExStyles.icon1}/>
            <Ionicons name="logo-twitter" size={24} color="#fff" style={ExStyles.icon2}/>
            <Ionicons name="logo-youtube" size={24} color="#fff" style={ExStyles.icon3}/>
            </View> */}
        </View>
         </ScrollView>
       </SafeAreaView>
    )
}
export default AdminLogin;
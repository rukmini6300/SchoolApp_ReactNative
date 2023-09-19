import React from "react";
import { View,Text, SafeAreaView ,ScrollView,Image,TouchableOpacity, ToastAndroid} from "react-native";
import ExStyles from "./ExStyles";

const Main=({navigation})=>{

    return(
        <SafeAreaView style={{flex:1}}>
           <View>
          <ScrollView style={{position:'relative'}}>
          <View style={ExStyles.container}>
            <Image source={require('../assets/sc2.png')}  style={{width:500,height:300,marginTop:50,alignSelf:'center'}} />
          <Text style={ExStyles.sc_name}> Happy Valley School</Text>
            {/* <View style={ExStyles.box_head}>
               <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
               <Text style={ExStyles.box_cont}><Ionicons name="person" size={54} color="black" /></Text>
               <Text style={{fontSize:16,paddingTop:6}}>Admin App</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
               <Text style={ExStyles.box_cont}><Ionicons name="school-sharp" size={54} color="black" /></Text>
               <Text style={{fontSize:16}}>Student App</Text>
               </TouchableOpacity>
            </View>
          */}
             {/* <View style={ExStyles.person}>
             <Text ><Ionicons name="person" size={54} color="black" /></Text>
             </View>
            <Text style={{fontSize:16,textAlign:'center',paddingTop:6}}>Teacher App</Text> */}
            </View>
          </ScrollView>
            <View style={ExStyles.bottom_text}>
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}> School At Home is an online platform for managing data </Text>
                <Text  style={{paddingTop:20,fontSize:16,textAlign:'center'}}>
                School At Home is an online platform for managing data associated with its tutoring classes in the most efficient and transparent manner. It is a user-friendly app with amazing features like online attendance, fees management, </Text>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
                        <Text style={ExStyles.start_btn}>Get Started</Text>
                    </TouchableOpacity>
                
            </View>
        </View>
        </SafeAreaView>
    )
}
export default Main;
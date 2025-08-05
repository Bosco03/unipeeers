import { introStyles } from "@/styles/intro.styles"
import { ImageBackground, Text, TouchableOpacity, View } from "react-native"

export default function index() {
  return (
    <View style={introStyles.cover}>
      <ImageBackground
       style={introStyles.bg}
       source ={require("../assets/images/intro_bg.jpg")}>
        <View style={introStyles.layer}>
          <View style={introStyles.header}>
              <Text style={introStyles.title}>Unipeers</Text>
          </View>

          <View style={introStyles.boby}>
              <Text style={introStyles.bobyText}>The school app for socialisong. 
                connect with friends, create your own
                event, and find other amazing events from
                studends. </Text>
          </View>

          <View>
            <TouchableOpacity style={introStyles.btn}>
              <Text style={introStyles.btnText}> Get started</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </View>
  )
}

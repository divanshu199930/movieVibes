import { Text, View } from "react-native"
import Config from "react-native-config"
import { MMKV } from "react-native-mmkv"
import colors from "../themes/colors"
import commonStyles from "../themes/commonStyles"

export default {
    API_KEY : Config.API_KEY,
    BASE_URL : Config.BASE_URL,
    AUTHORIZATION:Config.AUTHORIZATION
    
}

export const ListEmptyComponent =() => (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignContent: "center",
      alignItems: 'center',
      height: '100%' // Ensure it takes the full height
    }}>
        
      <Text style={{
        ...commonStyles.fontSemiBold20,
        color: colors.steelGray,
        textAlign: 'center', // Center text horizontally
        marginTop: '50%'
      }}>
        No Data Available
      </Text>
    </View>
  )

export const storage = new MMKV()
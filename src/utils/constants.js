import Config from "react-native-config"
import { MMKV } from "react-native-mmkv"

export default {
    API_KEY : Config.API_KEY,
    BASE_URL : Config.BASE_URL,
    AUTHORIZATION:Config.AUTHORIZATION
    
}

export const storage = new MMKV()
import { StyleSheet } from "react-native";
import commonStyles from "../../themes/commonStyles";

export default StyleSheet.create({

    container : {...commonStyles.mainContainer},
    loginFlowTxt : {...commonStyles.fontSize16, },

  fullWidth : {width :'100%'},
  flexStart : {justifyContent: "flex-start"},
    logoLabel : {flexDirection: 'row', justifyContent: "space-between", alignItems: "center", }

})
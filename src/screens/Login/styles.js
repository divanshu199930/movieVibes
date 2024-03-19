import { StyleSheet } from "react-native";
import commonStyles from "../../themes/commonStyles";

export default StyleSheet.create({

    container : {...commonStyles.mainContainer, justifyContent: "center"},
    loginFlowTxt : {...commonStyles.fontBold32, color : 'white' },

  fullWidth : {width :'100%'},
  flexStart : {justifyContent: "flex-start"}
})
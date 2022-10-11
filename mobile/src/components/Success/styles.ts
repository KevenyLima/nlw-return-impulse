import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    alignItems:"center"
  },
  image:{
    justifyContent:"center"
  },
  title:{
    fontSize: 20,
    marginBottom: 24,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  },
  button:{
    height: 60,
    justifyContent:'center',
    alignItems:"center",
    paddingHorizontal: 24,
    marginBottom: 40,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
  },
  buttonTitle:{
    fontFamily:theme.fonts.medium,
    color: theme.colors.text_primary
  }
})
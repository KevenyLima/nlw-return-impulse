import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import { styles } from "./styles";
import { theme } from "../../theme";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

const Widget = () => {
  const BottomSheetRef = useRef<BottomSheet>(null);
  const handleOpen = () => {
    BottomSheetRef.current?.expand();
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      <BottomSheet ref={BottomSheetRef} snapPoints={[1, 260]}>
        
      </BottomSheet>
    </View>
  );
};
export default Widget;

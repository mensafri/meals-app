import { StyleSheet, Text, View } from "react-native";

export default function MealDetails(props) {
  const { duration, complexity, affordability, style, textStyles } = props;
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyles]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyles]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyles]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

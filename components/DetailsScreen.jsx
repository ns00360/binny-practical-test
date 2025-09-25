import { Text, View } from "react-native";
import styles from "../styles";

const DetailsScreen = ({ route }) => {
  const { post } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

export default DetailsScreen;

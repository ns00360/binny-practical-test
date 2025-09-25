import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import React, { useEffect, useState } from "react";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error(err));
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.counterHeaderBtn}
          onPress={() => navigation.navigate("Counter")}
        >
          <Text style={styles.counterHeaderBtnText}>Counter</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Posts</Text>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postCard}
            onPress={() => navigation.navigate("Details", { post: item })}
          >
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>End of List</Text>
          </View>
        }
      />
    </View>
  );
};

export default PostsScreen;

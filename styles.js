import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f2f7", // light gray background
  },

  // ==== HEADER ====
  headerContainer: {
    padding: 15,
    backgroundColor: "#e0e0e0", // light gray header
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222", // dark text
  },

  // ==== INPUTS ====
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#222222", // dark text inside
  },

  // ==== POSTS LIST ====
  postCard: {
    padding: 14,
    marginVertical: 6,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  postTitle: {
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 16,
    color: "#111111", // darker than body
  },
  postBody: {
    fontSize: 14,
    color: "#333333", // dark gray
  },

  // ==== FOOTER ====
  footer: {
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    color: "#444444",
    fontSize: 14,
  },

  // ==== COUNTER ====
  counterText: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#111111", // very dark text
  },
  counterButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  counterBtn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#d1d1d1", // light gray button
    borderRadius: 8,
  },
  counterBtnText: {
    color: "#111111", // dark text
    fontSize: 18,
    fontWeight: "bold",
  },
  counterBtn: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 20, // bigger button
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
  },

  // Button text
  counterBtnText: {
    fontSize: 28, // bigger text
    fontWeight: "bold",
    color: "#fff",
  },
  counterHeaderBtn: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#6200ee", // purple button
    borderRadius: 6,
  },
  counterHeaderBtnText: {
    color: "#fff", // white text for contrast
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;

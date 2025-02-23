import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Barre de statut */}
      <View style={styles.rowStatus}>
        {/* Icône Notification à gauche */}
        <Image
          source={require("../../assets/icons/bulks/notification.png")} // Icône Notification
          style={styles.iconLeft}
        />

        {/* Icône Menu Obstacle à droite */}
        <Image
          source={require("../../assets/icons/menu_obstacle.png")} // Icône Menu Obstacle
          style={styles.iconRight}
        />
      </View>

      {/* Titre et bouton d'action */}
      <View style={styles.headerObstacle}>
        <Text style={styles.obstacleTitle}>Mes obstacles</Text>
        <Image
          source={require("../../assets/icons/plus_icon.png")} // Icône pour ajouter un obstacle
          style={styles.addIcon}
        />
      </View>

      {/* Container Mes Obstacles */}
      <View style={styles.rowObstacle}>
        {/* Contenu des obstacles */}
        <View style={styles.obstacleContent}>
          {/* Section 1 : Choisir l'obstacle */}
          <View style={styles.obstacleCard}>
            <Text style={styles.label}>Choisir l’obstacle</Text>
            <View style={styles.card}>
              <View style={styles.cardLeft}>
                <Image
                  source={require("../../assets/icons/obstacle_icon.png")} // Icône obstacle
                  style={styles.icon}
                />
                <Text style={styles.cardText}>O-345</Text>
              </View>
              <Image
                source={require("../../assets/icons/lock_icon.png")} // Icône cadenas
                style={styles.icon}
              />
            </View>
          </View>

          {/* Section 2 : Réglage de la hauteur */}
          <View style={styles.obstacleCard}>
            <Text style={styles.label}>Réglage de la hauteur</Text>
            <View style={styles.card}>
              <View style={styles.cardLeft}>
                <Image
                  source={require("../../assets/icons/obstacle_icon.png")} // Icône obstacle
                  style={styles.icon}
                />
                <Text style={styles.cardText}>1.30m</Text>
              </View>
              <Image
                source={require("../../assets/icons/lock_icon.png")} // Icône cadenas
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A", // Fond noir
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  rowStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  iconLeft: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 8,
  },
  textWrapper: {
    flex: 1,
  },
  maskedView: {
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
    color: "black",
    textAlign: "left",
    lineHeight: 32,
  },
  gradient: {
    width: 100,
    height: 32,
  },
  iconRight: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },

  // Mes Obstacles
  rowObstacle: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "#3f3f44",
  },
  headerObstacle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  obstacleTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
  addIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  obstacleContent: {
    gap: 16,
  },
  obstacleCard: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
    color: "#000000",
  },
});

export default Home;

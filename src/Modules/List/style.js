import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    safeView: {
        flex: 1 
    },
    movieList: {
        flex: 0.82 
    },
    standView: { flex: 0.28 },
    mainView: {
        flex: 1,
      },
      container: {
        padding: 20,
      },
      containerStand: {
        padding: 20,
        margin: 10,
      },
      item: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      },
      itemStand: {
        flexDirection: "row",
        alignItems: "center",
    
        margin: 10,
        flex: 1,
      },
      itemText: {
        fontSize: 18,
      },
      itemTextS: {
        fontSize: 16,
      },
      cardDetailsView: {
         flexDirection: "column", 
         marginLeft: 10 
      },
      buyBtn: {
        marginTop: 20,
        backgroundColor: "green",
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
      },
      btnStyle: { 
        color: "black", 
        alignSelf: "center" 
    },

    modalViewText: {
        color: "black",
        fontSize: 18,
        fontWeight: "800",
        margin: 10,
      },
    summaryView: { 
        justifyContent: "center",
         alignItems: "center"
         },
    textView: { color: "red", margin: 4 },
    ticketNameView: { color: "red", margin: 4 },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
      },
      buttonClose: {
        backgroundColor: "green",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
      },
      standSvgView: { flex: 0.3 },
      standCard: { flex: 0.7, marginLeft: 10 },
      standCardMain: { flex: 1 },
      standCardNameView: { flex: 0.2},
      standCardCountView: { flex: 0.2 },
      standCountText: { color: "black", alignSelf: "center" },
      standCountAddView: { flex: 0.28, flexDirection: "row" },
      standIncTouch: {
        backgroundColor: "green",
        margin: 1,
        width: "40%",
        borderRadius: 4,
        justifyContent: "center",
      },
      standInCText: { color: "white", alignSelf: "center", fontSize: 18 },
      standDecView: {
        marginLeft: 5,
        backgroundColor: "red",
        margin: 1,
        width: "40%",
        borderRadius: 4,
        justifyContent: "center",
      },
      standDecText: { color: "white", alignSelf: "center", fontSize: 18 },
      addCartView: {
        flex: 0.32,
        backgroundColor: "orange",
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 2,
      },
      addCartText: { color: "black", alignSelf: "center" },
      });

export default styles;

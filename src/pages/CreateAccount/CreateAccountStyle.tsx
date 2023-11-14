import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      padding:25,
      justifyContent: 'flex-start',
    },
    input: {
        color: "#FFF",
        height: 35,
        width: "100%",
        borderColor: "#848484",
        borderWidth: 1,
        marginBottom: "5%",
        marginTop: "1%",
        paddingLeft: 10,
      },
    setTextColor: {
        color: "#FFF"
    },
    buttonStyle: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginHorizontal: 63,
        marginVertical: 10,
    }

  
  });

  export default styles;
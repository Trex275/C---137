import * as React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Alert,
    SafeAreaView
} from "react-native";
import { ListItem } from "react-native-elements";
import axios from "axios";

export default class Homescreen extends React.Component {
    constructor() {
        super();
        this.state = {
            listdata: [],
            url: "http://127.0.0.1:5000/"
        }
    }
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.get(this.state.url).then(
            response => {
                console.log(response)
                //response.headers("Access-Control-Allow-Origin", "*");
                return this.setState({
                    listdata: response.data.planet_data
                })
            }
        ).catch(error => {
            Alert.alert(error);
        });
    }
    renderItem = ({item, index}) =>{
        <ListItem 
        key = {index}
        title = {`Planet Name: ${item.name}`}
        titleStyle = {styles.title}
        containerStyle = {styles.listContainer}
        bottomDivider 
        onPress = {()=>{
            this.props.navigation.navigate("Details", { name: item.name })
        }}
        />
    }
    keyExtractor = (item, index) => index.toString(); 
    render() {

        const { listdata } = this.state
        if (listdata.length === 0) {
            return (
                <View style={styles.emptyContainer}>
                    <Text>Loading the data..</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <View style={styles.upperContainer}>
                    <Text style={styles.headerText}>Exo Planet App</Text>
                </View>
                <View style={styles.lowerContainer}>
                    <FlatList data={this.state.listdata}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor} />
                </View>          
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edc988"
    },
    upperContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#132743"
    },
    lowerContainer: {
        flex: 0.9
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyContainerText: {
        fontSize: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#d7385e"
    },
    listContainer: {
        backgroundColor: "#eeecda"
    }
});
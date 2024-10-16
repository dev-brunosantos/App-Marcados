import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

interface CardInforPros {
    titulo: string;
    data: string;
    onPress: () => void;
}

export const CardInfor = ({ titulo, data, onPress }:CardInforPros) => {
    return(
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.container}>
                <Text style={styles.txt}>{titulo}</Text>
                <Text style={styles.txt}>{data}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})
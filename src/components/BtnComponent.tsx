import { BtnProps } from "@/interfaces/Botao";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const BtnComponent = ({ titulo, onPress }: BtnProps) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.txt}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
import { useTema } from "@/hooks/useTema";
import { StyleSheet } from "react-native";

export const PageStyles = StyleSheet.create({
    tela: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 20
    },
    titulo: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container: {
        width: '100%',
        height: 'auto',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    picker: {
        // width: '45%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        // alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
})
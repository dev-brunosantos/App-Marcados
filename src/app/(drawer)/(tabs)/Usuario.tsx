import { PageStyles } from "@/styles/PageStyles";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from '@react-native-picker/picker'
import { useState } from "react";

export default function Usuario() {

    const [teste, setTeste] = useState("Bruno")

    return (
        <View style={PageStyles.tela}>
            <Text>Usuario: {teste}</Text>

            <View style={styles.container}>
                <Picker
                    style={styles.picker}
                    selectedValue={teste}
                    onValueChange={setTeste}
                >
                    <Picker.Item label="Bruno" value="Bruno" />
                    <Picker.Item label="Monica" value="Monica" />
                    <Picker.Item label="Sara" value="Sara" />
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 52,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    picker: {
        height: '100%',
        width: '100%',
        borderWidth: 1,
    },
})
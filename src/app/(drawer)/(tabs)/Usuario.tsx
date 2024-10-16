import { PageStyles } from "@/styles/PageStyles";
import { Text, View } from "react-native";
import { useState } from "react";

export default function Usuario() {

    const [teste, setTeste] = useState("Bruno")

    return (
        <View style={PageStyles.tela}>
            <Text>Usuario: {teste}</Text>

            
        </View>
    )
}

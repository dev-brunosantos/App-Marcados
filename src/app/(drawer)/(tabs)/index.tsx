import { CardInfor } from "@/components/Cards/CardInforComponent";
import { PageStyles } from "@/styles/PageStyles";
import { Text, View } from "react-native";

export default function Home() {
    return(
        <View style={PageStyles.tela}>
            <CardInfor 
                titulo="Escala de Quinta"
                data="17/10/2024"
                onPress={() => {}}
            />
            <CardInfor 
                titulo="Lista dos louvores"
                data="17/10/2024"
                onPress={() => {}}
            />
            <CardInfor 
                titulo="Aniversariantes"
                data="17/10/2024"
                onPress={() => {}}
            />
            <CardInfor 
                titulo="Lista dos louvores"
                data="17/10/2024"
                onPress={() => {}}
            />
        </View>
    )
}
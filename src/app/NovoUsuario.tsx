import { BtnComponent } from "@/components/BtnComponent";
import { InputComponent } from "@/components/InputComponents";
import { PageStyles } from "@/styles/PageStyles";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function NovoUsuario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const cadastrar = () => {
        if(nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }
        return (
            Alert.alert("Usuário cadastrado com sucesso."),
            router.back()
        )
    }

    return (
        <View style={PageStyles.tela}>
            <View style={PageStyles.container}>
                <InputComponent placeholder='Digite seu e-mail'
                    isPassword={false}
                    onChangeText={setNome}
                />
                <InputComponent placeholder='Digite seu e-mail'
                    isPassword={false}
                    onChangeText={setEmail}
                />
                <InputComponent placeholder='Digite sua senha'
                    isPassword={true}
                    onChangeText={setSenha}
                />
            </View>

            <View style={PageStyles.container}>
                <BtnComponent titulo='Entrar' onPress={cadastrar} />
            </View>

        </View>
    )
}
import { BtnComponent } from '@/components/BtnComponent'
import { InputComponent } from '@/components/InputComponents'
import { useLogin } from '@/hooks/useLogin'
import { PageStyles } from '@/styles/PageStyles'
import { router } from 'expo-router'
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function App() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { erro, login, usuario } = useLogin()

    const fazerLogin = () => {
        usuario.email = email
        usuario.senha = senha
        return login(usuario.email, usuario.senha)
    }

    return (
        <View style={PageStyles.tela}>
            <View style={[PageStyles.container, { marginTop: 150}]}>
                <Text style={PageStyles.titulo} >Marcados</Text>
            </View>

            <View style={PageStyles.container}>
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
                <BtnComponent titulo='Entrar' onPress={fazerLogin} />
            </View>

            <View style={PageStyles.container}>
                {erro && (
                    <TouchableOpacity onPress={() => router.push("/NovoUsuario")}>
                        <Text>Não tem conta? Clique aqui</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
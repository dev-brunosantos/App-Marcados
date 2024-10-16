import { BtnComponent } from '@/components/BtnComponent'
import { InputComponent } from '@/components/InputComponents'
import { useLogin } from '@/hooks/useLogin'
import { useTema } from '@/hooks/useTema'
import { PageStyles } from '@/styles/PageStyles'
import { router } from 'expo-router'
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { temaClaro, temaEscuro } from '@/styles/Cores'

export default function App() {

    const { tema, alterarTema } = useTema()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { erro, login, usuario } = useLogin()

    const fazerLogin = () => {
        usuario.email = email
        usuario.senha = senha
        return login(usuario.email, usuario.senha)
    }

    return (
        <View style={[PageStyles.tela, { backgroundColor: tema.background }]}>
            <View style={[PageStyles.container, { marginTop: 150}]}>
                <Text style={[PageStyles.titulo, { color: tema.color}]} >Marcados</Text>
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

            <TouchableOpacity onPress={() => { alterarTema(temaEscuro) }}>
                <Feather name='moon' size={35} color={tema.color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alterarTema(temaClaro) }}>
                <Feather name='sun' size={35} color={tema.color} />
            </TouchableOpacity>
        </View>
    )
}
import { BtnComponent } from "@/components/BtnComponent";
import { InputComponent } from "@/components/InputComponents";
import { api } from "@/config/api";
import { PageStyles } from "@/styles/PageStyles";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

interface CagosProps {
    id: number;
    cargo: string;
    dt_criacao: string;
    dt_atualizacao: string;
}

export default function NovoUsuario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [cargo, setCargo] = useState('Escolha seu cargo')
    // const [vozes, setVozes] = useState('Selecione seu naipe')
    const [vozes, setVozes] = useState('')
    const [instrumento, setInstrumento] = useState('Selecione seu instrumento')
    const [tamanho, setTamanho] = useState('100%')

    const cadastrar = () => {
        if (nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }
        // if(cargo === "Vocal") {
        //     Alert.alert(`${nome}--${email}--${senha}--${cargo}--${vozes}`)
        //     return router.back()
        // }
        return (
            // Alert.alert(`${nome}--${email}--${senha}--${cargo}--${instrumento}`),
            Alert.alert("Usuário cadastrado com sucesso."),
            router.back()
        )
    }

    useEffect(() => {
        function escolherCargo() {
            if (cargo === "Escolha seu cargo") { setTamanho("100%") }
            if (cargo !== "Escolha seu cargo") { setTamanho('49%') }
            if (cargo === "Ministro") { setTamanho('100%') }
        }
        escolherCargo()
    }, [cargo])

    const [apiDados, setApiDados] = useState<CagosProps[]>([])

    useEffect(() => {
        const teste = async () => {
            try {
                const response = await api.get("cargos")
                console.log(response.data)
                setApiDados(response.data)
            } catch (error) {
                console.log("Erro: ", error)
            }
        }
        teste()
    }, [cargo])

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

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <View style={[PageStyles.picker, { width: tamanho }]}>
                        <Picker selectedValue={cargo} onValueChange={setCargo}>
                            {apiDados.map((item, index) => (
                                <Picker.Item key={index} label={item.cargo} value={item.cargo} />
                            ))}
                        </Picker>
                    </View>

                    {cargo === "Vocal" && (
                        <View style={[PageStyles.picker, { width: tamanho }]}>
                            <Picker selectedValue={vozes} onValueChange={setVozes} >
                                <Picker.Item label="Soprano" value="Soprano" />
                                <Picker.Item label="Contralto" value="Contralto" />
                                <Picker.Item label="Tenor" value="Tenor" />
                            </Picker>
                        </View>
                    )}
                    {cargo === "Musico" && (
                        <View style={[PageStyles.picker, { width: tamanho }]}>
                            <Picker selectedValue={instrumento} onValueChange={setInstrumento} >
                                <Picker.Item label="Teclado" value="Teclado" />
                                <Picker.Item label="Violão" value="Violão" />
                                <Picker.Item label="Guitarra" value="Guitarra" />
                                <Picker.Item label="Baixo" value="Baixo" />
                                <Picker.Item label="Bateria" value="Bateria" />
                            </Picker>
                        </View>
                    )}
                </View>
            </View>

            <View style={PageStyles.container}>
                <BtnComponent titulo='Entrar' onPress={cadastrar} />
            </View>
        </View >
    )
}
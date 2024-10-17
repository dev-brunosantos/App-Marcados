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

interface VozesProps {
    id: number;
    voz: string;
    dt_criacao: string;
    dt_atualizacao: string;
}

interface InstrumentosProps {
    id: number;
    instrumento: string;
    dt_criacao: string;
    dt_atualizacao: string;
}

export default function NovoUsuario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [cargo, setCargo] = useState('')
    const [vozes, setVozes] = useState('')
    const [instrumento, setInstrumento] = useState('')
    const [tamanho, setTamanho] = useState('100%')

    useEffect(() => {
        function escolherCargo() {
            if (cargo === "Escolha seu cargo") { setTamanho("100%") }
            if (cargo !== "Escolha seu cargo") { setTamanho('49%') }
            if (cargo === "Ministro") { setTamanho('100%') }
        }
        escolherCargo()
    }, [cargo])

    const [apiDados, setApiDados] = useState<CagosProps[]>([])
    const [apiVozes, setApiVozes] = useState<VozesProps[]>([])
    const [apiInstrumentos, setApiInstrumentos] = useState<InstrumentosProps[]>([])
    const [salvarUsuario, setSalvarUsuario] = useState()

    useEffect(() => {
        const buscarCargos = async () => {
            try {
                const response = await api.get("cargos")
                setApiDados(response.data)
            } catch (error) { console.log("Erro: ", error) }
        }
        const buscarVozes = async () => {
            try {
                const response = await api.get("vozes")
                setApiVozes(response.data)
            } catch (error) { console.log("Erro ", error) }
        }
        const buscarInstrumentos = async () => {
            try {
                const response = await api.get("instrumentos")
                setApiInstrumentos(response.data)
            } catch (error) { console.log("Erro ", error) }
        }
        buscarCargos()
        buscarVozes()
        buscarInstrumentos()
    }, [])

    const cadastrar = async () => {
        if (nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }

        try {
            const response = await api.post("usuarios/cadastrar", {
                nome, email, senha, cargo, instrumento
            })
            setSalvarUsuario(response.data)
            Alert.alert(`${salvarUsuario}`)
            router.back()

        } catch (error) {
            console.log(error)
        }

        // return (
        //     Alert.alert("Usuário cadastrado com sucesso."),
        //     router.back()
        // )
    }

    return (
        <View style={PageStyles.tela}>
            <View style={PageStyles.container}>
                <InputComponent placeholder='Digite seu e-mail'
                    isPassword={false} onChangeText={setNome}
                />
                <InputComponent placeholder='Digite seu e-mail'
                    isPassword={false} onChangeText={setEmail}
                />
                <InputComponent placeholder='Digite sua senha'
                    isPassword={true} onChangeText={setSenha}
                />

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    {/* ESSE CODIGO DEPENDE DAS INFORMAÇÕES DA API, POR ISSO O SERVIDOR DEVE SER LIGADO ANTES */}
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
                                {apiVozes.map((item) => (
                                    <Picker.Item key={item.id} label={item.voz} value={item.voz} />
                                ))}
                            </Picker>
                        </View>
                    )}
                    {cargo === "Musico" && (
                        <View style={[PageStyles.picker, { width: tamanho }]}>
                            <Picker selectedValue={instrumento} onValueChange={setInstrumento} >
                                {apiInstrumentos.map((item) => (
                                    <Picker.Item key={item.id} label={item.instrumento} value={item.instrumento} />
                                ))}
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
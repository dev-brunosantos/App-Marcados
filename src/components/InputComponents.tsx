import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react';
import { InputProps } from '@/interfaces/Input';
import { useTema } from '@/hooks/useTema';
import { Cores } from '@/styles/Cores';

export const InputComponent = ({ placeholder, isPassword, onChangeText }: InputProps) => {

    const { tema } = useTema()

    const [icone, setIcone] = useState('eye-with-line')
    const [seguranca, setSeguranca] = useState(true)

    const verSenha = () => {
        setSeguranca(!seguranca)
        icone === 'eye-with-line' ? setIcone('eye') : setIcone('eye-with-line')
    }

    if (isPassword) {
        return (
            <View style={[styles.container, { borderColor: tema.color }]}>
                <TextInput
                    style={[styles.input, { color: tema.color}]}
                    placeholder={placeholder}
                    placeholderTextColor={tema.color === "#fff" ? Cores.cinza : "#bababa"}
                    secureTextEntry={seguranca}
                    onChangeText={onChangeText}
                />

                <TouchableOpacity style={styles.btn} onPress={verSenha}>
                    <Entypo name={icone} size={35} color={tema.color} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={[styles.container, { borderColor: tema.color }]}>
            <TextInput
                style={[styles.input, { color: tema.color}]}
                placeholder={placeholder}
                placeholderTextColor={tema.color === "#fff" ? Cores.cinza : "#bababa"}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        fontSize: 16
    },
    btn: {
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15,
    }
})
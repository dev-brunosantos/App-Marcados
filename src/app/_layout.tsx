import { AppContexts } from '@/contexts'
import { Stack } from 'expo-router'

export default function AppLayout() {
    return (
        <AppContexts>
            <Stack>
                <Stack.Screen name='index' options={{ headerShown: false}} />
                <Stack.Screen name='NovoUsuario' options={{ 
                    title: "Novo Usuário",
                    headerLeft: (({label}) => ( label = "" ))
                }} />
                <Stack.Screen name='(drawer)' options={{ headerShown: false, title: "Home"}} />
            </Stack>
        </AppContexts>
    )
}
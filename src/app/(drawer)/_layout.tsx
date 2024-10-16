import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {
    return(
        <Drawer screenOptions={{
            headerLeftContainerStyle: {
                position: 'absolute',
                right: 10,
                top: 12
            }
        }}>
            <Drawer.Screen name='(tabs)' />
            <Drawer.Screen name='Config' options={{ title: 'Configurações'}} />
        </Drawer>
    )
}
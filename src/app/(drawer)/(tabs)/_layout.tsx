import { Tabs } from 'expo-router'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

const HomeIcone = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name='home' size={50} />
        </View>
    )
}

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                height: 50
            },
            headerShown: false,
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
            }
        }} >
            <Tabs.Screen name='Escalas' options={{
                tabBarIcon: (({ focused }) => (
                    focused ? <FontAwesome name='list' size={25} /> : <FontAwesome name='list' size={25} />
                ))
            }} />
            <Tabs.Screen name='index' options={{
                title: "",
                tabBarIcon: (({ focused }) => (
                    focused ? <HomeIcone /> : <HomeIcone />
                ))
            }} />
            <Tabs.Screen name='Usuario' options={{
                tabBarIcon: (({ focused }) => (
                    focused ? <FontAwesome name='user' size={30} /> : <FontAwesome name='user' size={30} />
                ))
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        position: 'absolute',
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 100
    }
})
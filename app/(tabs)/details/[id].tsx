import { Image, StyleSheet } from "react-native";

import { Link, useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Detail() {
    const { id } = useLocalSearchParams();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.gameImage}
                />
            }>
            <ThemedView
                className='flex-1 justify-center items-center'
            >
                <ThemedText
                    className='font-blod mb-8 text-2xl'
                >
                    Detalle del juego {id}
                </ThemedText>
                <Link href='/' className='text-blue-500'>
                    Volver atrás
                </Link>
            </ThemedView>
        </ParallaxScrollView>

    )
}

const styles = StyleSheet.create({
    gameImage: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
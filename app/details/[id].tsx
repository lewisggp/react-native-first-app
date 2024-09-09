import { useEffect, useState } from "react";

import { ActivityIndicator, Image, StyleSheet } from "react-native";

import { Link, Stack, useLocalSearchParams } from "expo-router";

import { useThemeColor } from "@/hooks/useThemeColor";

import { getGameDetails } from "@/lib/metacritic";

import type { GameType } from "@/types/GameType";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Detail() {
    const { id } = useLocalSearchParams();
    const [game, setGame] = useState<GameType | undefined>(undefined);
    const color = useThemeColor({}, 'text');

    useEffect(() => {
        if (id) {
            getGameDetails(id).then(setGame);
        }
    }, [id])

    if (!game) {
        return (
            <ThemedView
                className='flex-1 justify-center items-center'
            >
                <Stack.Screen
                    options={{
                        headerTitle: ''
                    }}
                />
                <ActivityIndicator color={color} size={'large'} />
            </ThemedView>
        );
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={{ uri: game.image }}
                    style={styles.gameImage}
                />
            }>
            <Stack.Screen
                options={{
                    headerTitle: game.title
                }}
            />
            <ThemedView
                className='flex-1 justify-center items-center'
            >
                <ThemedText
                    className='font-bold mb-8 text-2xl'
                >
                    {game.title}
                </ThemedText>
                <ThemedText
                    className='mb-4 text-lg'
                >
                    {game.description}
                </ThemedText>
                <Link href='/' className='text-blue-500'>
                    Volver atrás
                </Link>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    gameImage: {
        height: 250,
        width: '100%',
        position: 'absolute',
        resizeMode: 'cover',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
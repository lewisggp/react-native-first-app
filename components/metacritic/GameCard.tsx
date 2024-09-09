import { useEffect, useRef } from "react";

import { Image, Animated, StyleSheet, Pressable } from "react-native";

import type { GameType } from "@/types/GameType";

import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { GameScore } from "./GameScore";
import { Link } from "expo-router";
import { ThemedPressable } from "../ThemedPressable";

type GameCardProps = {
    game: GameType;
};

export function GameCard({ game }: GameCardProps) {
    return (
        <Link
            href={{
                pathname: '/details/[id]',
                params: { id: game.slug }
            }}
            asChild
        >
            <ThemedPressable className='active:opacity-70 active:border-whiter/50'>
                <ThemedView
                    className="bg-slate-500/10 p-4 rounded-xl mb-5 flex-row"
                    key={game.slug}
                >
                    <Image source={{ uri: game.image }} style={styles.image} />
                    <ThemedView className="ml-4" style={{ backgroundColor: 'transparent', flex: 1 }} >
                        <ThemedText className="text-xl font-bold mb-2">
                            {game.title}
                        </ThemedText>
                        <GameScore score={game.score} maxScore={100} />
                        <ThemedText className="text-base text-justify mt-2">
                            {game.description.slice(0, 105)}...
                        </ThemedText>
                    </ThemedView>
                </ThemedView>
            </ThemedPressable>
        </Link>
    )
}

type AnimatedGameCardProps = {
    game: GameType;
    index: number;
};

export function AnimatedGameCard({ game, index }: AnimatedGameCardProps) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 42,
    },
    image: {
        width: 107,
        height: 147,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: "#eee",
    },
    score: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
        marginBottom: 10,
    },
});
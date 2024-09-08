import { useEffect, useRef } from "react";

import { Image, Animated, StyleSheet } from "react-native";

import type { GameType } from "@/types/GameType";

import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { GameScore } from "./GameScore";

type GameCardProps = {
    game: GameType;
};

export function GameCard({ game }: GameCardProps) {
    return (
        <ThemedView
            className="bg-slate-500/10 p-4 rounded-xl mb-10 items-center"
            key={game.slug}
        >
            <Image source={{ uri: game.image }} style={styles.image} />
            <ThemedView className="mt-4 items-center" style={{ backgroundColor: 'transparent' }} >
                <ThemedText className="text-xl font-bold mb-2">
                    {game.title}
                </ThemedText>
                <GameScore score={game.score} maxScore={100} />
                <ThemedText className="text-base text-justify mt-2">
                    {game.description}
                </ThemedText>
            </ThemedView>
        </ThemedView>
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
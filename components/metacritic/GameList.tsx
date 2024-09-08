import { useEffect, useState } from "react";

import { ActivityIndicator, FlatList } from "react-native";

import { useThemeColor } from '@/hooks/useThemeColor';

import { getLatestGames } from "@/lib/metacritic"

import { GameType } from "@/types/GameType";

import { ThemedView } from "../ThemedView";
import { AnimatedGameCard } from "./GameCard";

export function GameList() {
    const [games, setGames] = useState<GameType[]>([]);
    const color = useThemeColor({}, 'text');

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games);
        });
    }, []);

    return (
        <ThemedView>
            {games.length > 0 ? (
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
                />
            ) : (
                <ActivityIndicator color={color} size={'large'} />
            )}
        </ThemedView>
    )
}
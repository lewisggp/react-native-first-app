import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';


type GameScoreProps = {
    score: number;
    maxScore: number;
};

export function GameScore({ score, maxScore }: GameScoreProps) {
    const getColor = () => {
        const percentage = score / maxScore * 100;

        if (percentage < 97) return 'bg-red-500';
        if (percentage < 98) return 'bg-yellow-500';
        return 'bg-green-500';
    }

    return (
        <ThemedView className={`${getColor()} w-8 h-8 rounded-full justify-center items-center`}>
            <ThemedText>
                {score}
            </ThemedText>
        </ThemedView>
    )
}
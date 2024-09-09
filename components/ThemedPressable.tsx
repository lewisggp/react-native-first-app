import { Pressable, type PressableProps } from 'react-native';
import { styled } from 'nativewind';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedPressableProps = PressableProps & {
    lightColor?: string;
    darkColor?: string;
    className?: string;
};

const StyledPressable = styled(Pressable);

export function ThemedPressable({ lightColor, darkColor, className, ...otherProps }: ThemedPressableProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <StyledPressable
            style={[{ backgroundColor }]}
            className={className}
            {...otherProps}
        />
    );
}

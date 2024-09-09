import Svg, { Path, SvgProps } from 'react-native-svg';

export const Logo: React.FC<SvgProps> = (props) => (
    <Svg width={176} height={40} {...props}>
        <Path d="M36.978 19.49a17.49 17.49 0 1 1 0-.021" />
        <Path
            fill="#F2F2F2"
            d="m17.209 32.937 3.41-3.41-6.567-6.567c-.276-.276-.576-.622-.737-1.014-.369-.783-.53-2.004.369-2.903 1.106-1.106 2.58-.645 4.009.784l6.313 6.313 3.41-3.41-6.59-6.59c-.276-.276-.599-.691-.76-1.037-.438-.898-.415-2.027.392-2.834 1.129-1.129 2.603-.714 4.24.922l6.128 6.129 3.41-3.41L27.6 9.274c-3.364-3.364-6.52-3.249-8.686-1.083-.83.83-1.337 1.705-1.59 2.696a6.71 6.71 0 0 0-.092 2.81l-.046.047c-1.66-.691-3.549-.277-5 1.175-1.936 1.935-1.866 3.986-1.636 5.184l-.07.07-1.681-1.36-2.95 2.949c1.037.945 2.282 2.097 3.687 3.502l7.673 7.673Z"
        />
        <Path
            fill="#FFBD3F"
            d="M19.982 0A20 20 0 1 0 40 20v-.024A20 20 0 0 0 19.982 0Zm-.091 4.274A15.665 15.665 0 0 1 35.57 19.921v.018A15.665 15.665 0 1 1 19.89 4.274Z"
        />
        <Path
            fill="#fff"
            d="M46.547 27.942h4.59v-8.84c0-.373.032-.807.187-1.18.28-.775.993-1.706 2.203-1.706 1.489 0 2.171 1.303 2.171 3.226v8.5h4.591V19.07c0-.372.062-.868.186-1.21.31-.9 1.086-1.644 2.172-1.644 1.52 0 2.234 1.272 2.234 3.475v8.251h4.59v-8.934c0-4.53-2.202-6.576-5.118-6.576-1.116 0-2.047.248-2.885.744a6.388 6.388 0 0 0-1.954 1.83h-.062c-.652-1.582-2.203-2.575-4.157-2.575-2.606 0-3.94 1.428-4.591 2.39h-.093l-.218-2.048h-3.97c.062 1.334.124 2.947.124 4.84v10.33Zm39.261-6.08c.062-.341.155-1.055.155-1.861 0-3.754-1.861-7.57-6.763-7.57-5.274 0-7.662 4.25-7.662 8.097 0 4.747 2.947 7.756 8.096 7.756 2.048 0 3.94-.342 5.491-.962l-.62-3.195c-1.272.403-2.575.62-4.188.62-2.203 0-4.126-.93-4.281-2.885h9.772Zm-9.803-3.226c.124-1.272.93-3.071 2.916-3.071 2.171 0 2.668 1.923 2.668 3.07h-5.584Zm12.612-9.152v3.289H86.6v3.474h2.017v6.205c0 2.14.434 3.598 1.303 4.498.744.775 2.016 1.334 3.536 1.334 1.334 0 2.451-.186 3.072-.435l-.032-3.567a7.694 7.694 0 0 1-1.395.124c-1.427 0-1.862-.838-1.862-2.668v-5.49h3.382v-3.475h-3.382V8.43l-4.622 1.054Zm22.596 9.493c0-3.567-1.613-6.546-6.669-6.546-2.761 0-4.84.745-5.895 1.334l.869 3.04c.993-.62 2.637-1.147 4.188-1.147 2.327 0 2.761 1.148 2.761 1.954v.217c-5.367-.03-8.903 1.862-8.903 5.801 0 2.42 1.83 4.654 4.901 4.654 1.799 0 3.35-.652 4.343-1.862h.093l.279 1.52h4.25c-.155-.837-.217-2.233-.217-3.691v-5.274Zm-4.591 3.444c0 .279-.031.558-.093.806-.31.962-1.272 1.737-2.451 1.737-1.055 0-1.861-.59-1.861-1.799 0-1.83 1.923-2.42 4.405-2.389v1.645Zm18.381 1.644c-.714.31-1.582.496-2.699.496-2.296 0-4.157-1.458-4.157-4.25-.031-2.482 1.582-4.25 4.064-4.25 1.241 0 2.078.217 2.637.465l.744-3.505c-.992-.372-2.357-.59-3.598-.59-5.646 0-8.686 3.63-8.686 8.066 0 4.778 3.133 7.787 8.034 7.787 1.8 0 3.382-.342 4.219-.714l-.558-3.505Zm2.369 3.877h4.716V20.25c0-.372.031-.744.093-1.055.31-1.458 1.489-2.388 3.226-2.388.528 0 .931.062 1.272.155v-4.467c-.341-.063-.558-.063-.993-.063-1.458 0-3.319.931-4.095 3.134h-.124l-.155-2.792h-4.064c.062 1.303.124 2.76.124 4.994v10.175Zm15.67 0v-15.17h-4.715v15.17h4.715Zm-2.357-21.777c-1.52 0-2.513 1.024-2.482 2.389-.031 1.303.962 2.357 2.451 2.357 1.551 0 2.543-1.054 2.543-2.357-.031-1.365-.992-2.389-2.512-2.389Zm5.976 3.319v3.289h-2.016v3.474h2.016v6.205c0 2.14.434 3.598 1.303 4.498.744.775 2.016 1.334 3.536 1.334 1.334 0 2.451-.186 3.072-.435l-.031-3.567a7.707 7.707 0 0 1-1.396.124c-1.427 0-1.862-.838-1.862-2.668v-5.49h3.382v-3.475h-3.382V8.43l-4.622 1.054Zm14.655 18.458v-15.17H156.6v15.17h4.716Zm-2.358-21.777c-1.52 0-2.513 1.024-2.482 2.389-.031 1.303.962 2.357 2.451 2.357 1.551 0 2.544-1.054 2.544-2.357-.031-1.365-.993-2.389-2.513-2.389Zm16.152 17.9c-.714.31-1.582.496-2.699.496-2.296 0-4.157-1.458-4.157-4.25-.031-2.482 1.582-4.25 4.064-4.25 1.241 0 2.078.217 2.637.465l.744-3.505c-.993-.372-2.358-.59-3.598-.59-5.646 0-8.687 3.63-8.687 8.066 0 4.778 3.134 7.787 8.035 7.787 1.799 0 3.381-.342 4.219-.714l-.558-3.505Z"
        />
    </Svg>
);
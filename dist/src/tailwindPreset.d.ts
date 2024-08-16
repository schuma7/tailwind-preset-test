declare const tailwindPreset: {
    darkMode: string[];
    content: string[];
    theme: {
        container: {
            center: boolean;
            padding: string;
            screens: {
                '2xl': string;
            };
        };
        extend: {
            colors: {
                primary: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                };
                secondary: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                };
                tertiary: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                };
                typo: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                };
                elements: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                };
                surface: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                };
                alert: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                };
                warning: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                };
                success: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                };
                info: {
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                };
                branding: {
                    red: string;
                    white: string;
                    black: string;
                };
                red: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                orange: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                yellow: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                green: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                petrol: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                blue: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                indigo: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                purple: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                pink: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
            };
            borderRadius: {
                none: string;
                sm: string;
                DEFAULT: string;
                md: string;
                lg: string;
                xl: string;
                '2xl': string;
                full: string;
            };
            fontSize: {
                xxs: string;
                xs: string;
                sm: string;
                base: string;
                lg: string;
                xl: string;
                '2xl': string;
                '3xl': string;
                '4xl': string;
                '5xl': string;
                '6xl': string;
                '7xl': string;
                '8xl': string;
                '9xl': string;
            };
            fontFamily: {
                sans: string[];
            };
            boxShadow: {
                'elevation-100': string;
                'elevation-200': string;
                'elevation-400': string;
                'elevation-500': string;
            };
            spacing: {
                18: string;
            };
            lineHeight: {
                110: string;
                115: string;
                120: string;
                130: string;
                135: string;
                140: string;
                150: string;
                155: string;
                160: string;
            };
            keyframes: {
                'accordion-down': {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                'accordion-up': {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
            };
            animation: {
                'accordion-down': string;
                'accordion-up': string;
            };
        };
    };
    plugins: {
        handler: () => void;
    }[];
};
export { tailwindPreset };

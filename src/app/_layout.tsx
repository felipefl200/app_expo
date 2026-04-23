import { theme } from '@/theme/theme'
import { ThemeProvider } from '@shopify/restyle'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function RootLayout() {
	const colorScheme = useColorScheme()

	return (
		<ThemeProvider theme={theme}>
			<Stack screenOptions={{ headerShown: false }} />
		</ThemeProvider>
	)
}

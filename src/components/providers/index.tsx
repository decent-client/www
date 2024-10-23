import { ThemeProvider } from "~/components/providers/theme";

export function Providers({
	children,
}: { children: Readonly<React.ReactNode> }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}

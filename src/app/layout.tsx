import type { Metadata, Viewport } from "next";
import { Header } from "~/components/header";
import { Providers } from "~/components/providers";
import { satoshi } from "~/lib/typefaces";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "Decent Client",
		template: "%s | Decent Client",
	},
	description: "Minecraft Client",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("font-sans", satoshi.variable)}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}

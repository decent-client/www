import localFont from "next/font/local";

export const satoshi = localFont({
	src: [
		{ path: "../../../public/fonts/Satoshi-Variable.ttf" },
		{
			path: "../../../public/fonts/Satoshi-Variable-Italic.ttf",
			style: "italic",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});

export const geistMono = localFont({
	src: "../../../public/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

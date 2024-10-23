"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const links = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Download",
		href: "/download",
	},
	{
		title: "Link",
		href: "/link1",
	},
	{
		title: "Link",
		href: "/link2",
	},
];

export function Header() {
	return (
		<header className="container h-16 relative items-center flex justify-between">
			<h1 className="text-xl font-bold">Decent Client</h1>
			<ul className="bg-muted fixed p-1 rounded-full top-3 left-1/2 -translate-x-1/2 flex gap-x-1">
				{links.map((link) => (
					<HeaderLink key={link.title} title={link.title} href={link.href} />
				))}
			</ul>
			<p>other</p>
		</header>
	);
}

function HeaderLink({ title, href }: { title: string; href: string }) {
	const pathname = usePathname();

	return (
		<li
			className={cn("py-0.5 px-3 rounded-full", {
				"bg-blue-500": pathname === href,
			})}
		>
			<Link href={href}>{title}</Link>
		</li>
	);
}

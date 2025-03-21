import { Download, GithubIcon } from "lucide-react";
import { type Variants, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { useMediaQuery } from "~/hooks/media-query";

//! TODO: Fix border color

const variants: Variants = {
  initial: {
    top: 0,
    backgroundColor: "color-mix(in oklab, var(--accent) 0%, transparent)",
    // borderColor: "color-mix(in oklab, var(--border) 0%, transparent);",
    // borderWidth: 1,
  },
  desktop: {
    top: "1rem",
    backgroundColor: "color-mix(in oklab, var(--accent) 35%, transparent)",
    borderRadius: "calc(infinity * 1px)",
    // borderColor: "color-mix(in oklab, var(--border) 100%, transparent);",
    // borderWidth: 1,
  },
  mobile: {
    top: 0,
    backgroundColor: "color-mix(in oklab, var(--accent) 35%, transparent)",
    // borderColor: "color-mix(in oklab, var(--border) 0%, transparent);",
    // borderWidth: 1,
  },
};

export function Header() {
  const [header, setHeader] = useState<"initial" | "desktop" | "mobile">("initial");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHeader(latest >= 24 ? (isDesktop ? "desktop" : "mobile") : "initial");
  });

  return (
    <motion.header
      className="-translate-x-1/2 fixed left-1/2 flex h-13 w-full max-w-272 items-center px-6 pr-2 md:w-[calc(100%-2rem)]"
      variants={variants}
      animate={header}
    >
      <Link className="-translate-x-1/2 absolute left-1/2" to="/">
        <h1 className="font-black text-2xl">Decent Client</h1>
      </Link>
      <nav className="ml-auto flex items-center gap-x-1.5">
        <Button className="rounded-full" variant={"secondary"}>
          <Download className="size-4" />
          Download
        </Button>
        <Button className="rounded-full" variant={"secondary"} size={"icon"}>
          <GithubIcon className="size-4" />
        </Button>
      </nav>
    </motion.header>
  );
}

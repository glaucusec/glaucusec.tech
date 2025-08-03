import { getColorByIndex } from "@/lib/colors";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Abhishek Baiju",
  description:
    "Learn more about Abhishek Baiju, his studies in AI, languages, and his work as a web developer.",
};

export default function AboutPage() {
  const colors = getColorByIndex(0); // Use first color for consistency

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          About Me
        </h1>
      </header>

      <section className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          My name's Abhishek, but you might know me by my GitHub username,{" "}
          <Link
            href="https://github.com/glaucusec"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:underline"
          >
            @glaucusec
          </Link>
          .
        </p>
        <p>
          I'm a developer focused on building websites and exploring web
          technologies. My core interest lies at the intersection of web
          development and web security. I enjoy creating functional, efficient
          web experiences while continually learning how to make them more
          secure.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Fun Facts
        </h2>
        <div
          className={`${colors.bg} ${colors.border} border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-lg`}
        >
          <ul className="list-disc space-y-3 pl-5 text-lg text-muted-foreground leading-relaxed">
            <li>
              I’ve got a repo that’s basically a starter pack for web security
              newbies{" "}
              <a
                className="underline"
                href="https://github.com/glaucusec/awesome-repos"
              >
                here
              </a>{" "}
              — no secret handshakes required.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

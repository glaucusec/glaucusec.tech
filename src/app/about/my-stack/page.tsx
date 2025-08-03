import { getColorByIndex } from "@/lib/colors";
import type { Metadata } from "next";
import Link from "next/link";

type StackItem = {
  name: string;
  description: string;
  link?: string;
};

type StackSection = {
  category: string;
  items: StackItem[];
};

export const metadata: Metadata = {
  title: "My Stack - Abhishek Baiju",
  description:
    "Tools, technologies, and platforms that Abhishek Baiju uses for productivity, language learning, and development.",
};

const stack: StackSection[] = [
 
  
  {
    category: "Tech — Languages",
    items: [
      {
        name: "JavaScript / Node.js",
        description: "Fun to program in, but I prefer TypeScript.",
      },
      {
        name: "TypeScript",
        description: "Makes writing JavaScript not scary!",
      },
      {
        name: "Python",
        description: "Fantastic for AI/ML work.",
      },
      
    ],
  },
  {
    category: "Tech — Libraries",
    items: [
      {
        name: "React",
        link: "https://react.dev",
        description: "By far my favorite tool for building websites.",
      },
      {
        name: "Next.js",
        link: "https://nextjs.org",
        description: "Solid ecosystem, great performance.",
      },
      {
        name: "Tailwind",
        link: "https://tailwindcss.com",
        description:
          "Literally so much better than writing CSS by hand in separate files.",
      },
      {
        name: "shadcn/ui",
        link: "https://ui.shadcn.com",
        description:
          "My go-to for building UI components. Love how they're accessible + customizable!",
      },
    ],
  },
  {
    category: "Tech — Platforms",
    items: [
      {
        name: "Vercel",
        link: "https://vercel.com",
        description: "Fantastic solution for hosting web apps.",
      },
      {
        name: "GitHub Actions",
        link: "https://github.com/features/actions",
        description: "CI/CD built in to GitHub.",
      },
    
    ],
  },
];

export default function MyStackPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          My Stack
        </h1>
      </header>

      {stack.map((section, index) => {
        const colors = getColorByIndex(index);
        return (
          <section key={section.category} className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {section.category}
            </h2>
            <div
              className={`${colors.bg} ${colors.border} border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-lg`}
            >
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    {item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium text-foreground">
                        {item.name}
                      </span>
                    )}{" "}
                    — {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}

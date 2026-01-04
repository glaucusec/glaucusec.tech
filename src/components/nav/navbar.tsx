"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Code,
  FileText,
  FolderOpen,
  Home,
  Languages,
  LucideProps,
  Mail,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";


type NavigationType = (
  | {
      name: string;
      href: string;
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
      isSubItem?: undefined;
      parent?: undefined;
    }
  | {
      name: string;
      href: string;
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
      isSubItem: boolean;
      parent: string;
    }
)[];

const navigation: NavigationType = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  {
    name: "My Stack",
    href: "/about/my-stack",
    icon: Code,
  },
  // {
  //   name: "My Stack",
  //   href: "/about/my-stack",
  //   icon: Code,
  //   isSubItem: true,
  //   parent: "About",
  // },
  // { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Posts", href: "/posts", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];


export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:flex-col">
      {/* <div className="flex w-full flex-row overflow-y-auto bg-background"> */}
      <div className="flex grow flex-row justify-between w-full gap-y-5 px-6 py-8 md:py-12">
        {/* Profile Section */}
        <Link href="/" className="flex items-start space-x-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-border/20 group-hover:ring-border/40 transition-all">
            <Image
              src="/abhishekbaiju.jpg"
              alt="Profile photo"
              width={48}
              height={48}
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-1 min-w-0 flex-1">
            <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
              Abhishek Baiju
            </h2>
            <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
              @glaucusec
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col">
          <ul role="list" className="flex flex-1 flex-row gap-y-1">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/posts" && pathname.startsWith("/posts/")) ||
                (item.href === "/language-learning" &&
                  pathname.startsWith("/language-learning"));
              return (
                <li key={item.name} className="relative">
                  {item?.isSubItem && (
                    <div className="absolute left-2 top-0 h-1/2 w-px bg-border/70"></div>
                  )}
                  {item?.isSubItem && (
                    <div className="absolute left-2 top-1/2 w-4 h-px bg-border/70"></div>
                  )}
                  <Link
                    href={item.href}
                    className={`group flex gap-x-3 rounded-md p-2 text-sm font-medium leading-6 transition-all duration-200 ${
                      item?.isSubItem ? "ml-6" : ""
                    } ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <item.icon
                      className="h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className="">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </div>
  );
}

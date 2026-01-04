"use client";

import { MobileThemeToggle } from "@/components/mobile-theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Code,
  FileText,
  Home,
  LucideProps,
  Mail,
  Menu,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";

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

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="px-5 w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/posts" && pathname.startsWith("/posts/"));
              return (
                <div key={item.name} className="relative">
                  {item.isSubItem && (
                    <div className="absolute left-2 top-0 h-1/2 w-px bg-border/70"></div>
                  )}
                  {item.isSubItem && (
                    <div className="absolute left-2 top-1/2 w-4 h-px bg-border/70"></div>
                  )}
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      item.isSubItem ? "ml-6" : ""
                    } ${
                      isActive
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="border-t border-border/40 pt-4">
            <MobileThemeToggle onThemeChange={() => setOpen(false)} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

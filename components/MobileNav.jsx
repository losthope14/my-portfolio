"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "education",
        path: "/education",
    },
    {
        name: "stack",
        path: "/stack",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false); 
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center"  onClick={handleMenuClick}>
            <CiMenuFries className="text-[30px] text-accent"></CiMenuFries>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/*
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        アリスナ<span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>
            */}

            <nav className="flex flex-col justify-center items-center gap-8 mt-12">
                {links.map((link, index) => {
                    return (
                        <Link
                        href={link.path}
                        key={index}
                        onClick={handleNavItemClick}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                            text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
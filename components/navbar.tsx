"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS, PERSONAL_INFO, SECTION_IDS } from "@/lib/constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="shrink-0">
                        <a
                            href={`#${SECTION_IDS.HOME}`}
                            onClick={(e) => handleSmoothScroll(e, `#${SECTION_IDS.HOME}`)}
                            className="text-2xl font-bold text-black"
                        >
                            {PERSONAL_INFO.displayName}
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleSmoothScroll(e, item.href)}
                                    className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-all duration-200 hover:underline underline-offset-4"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8 space-y-4">
                                    {NAV_ITEMS.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block text-black hover:text-gray-700 px-3 py-2 text-base font-medium transition-all duration-200 hover:underline underline-offset-4"
                                            onClick={(e) => {
                                                handleSmoothScroll(e, item.href);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
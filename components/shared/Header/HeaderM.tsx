import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"; // 確保路徑正確
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="p-4">
                    <Image
                        src="/path/to/hamburger_icon.svg" // 更換為實際路徑
                        width={36}
                        height={36}
                        alt="Menu"
                    />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="background-light900_dark200 border-none">
                <div className="p-4">
                    <SheetClose asChild>
                        <Link href="/home">
                            <a className="flex items-center gap-2">
                                <Image
                                    src="/path/to/your_logo.svg" // 更換為實際路徑
                                    width={40}
                                    height={40}
                                    alt="Logo"
                                />
                                <span className="text-lg font-bold">Your Logo</span>
                            </a>
                        </Link>
                    </SheetClose>
                    {/* Navigation links */}
                    <SheetClose asChild>
                        <Link href="/about">
                            <a className="block p-4 text-lg">About</a>
                        </Link>
                    </SheetClose>
                    {/* 更多導航鏈接 */}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

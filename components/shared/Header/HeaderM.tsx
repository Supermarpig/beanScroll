import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"; // 確保路徑正確
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="p-4 mr-12">
                    <Image
                        src="/assets/icons/hamburger.svg"
                        width={36}
                        height={36}
                        alt="Menu"
                    />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="background-light900_dark200 border-none">
                <div className="p-4">
                    <SheetClose asChild>
                        <Link href="/home" className="flex items-center gap-2">
                            <Image
                                src="/assets/images/site-logo.svg"
                                width={40}
                                height={40}
                                alt="Logo"
                            />
                            <span className="text-lg font-bold">Your Logo</span>
                        </Link>
                    </SheetClose>
                    {/* Navigation links */}
                    <SheetClose asChild>
                        <Link href="#Home" className="block p-4 text-lg">
                            Home
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="#Pricing" className="block p-4 text-lg">
                            Pricing
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="#FAQ" className="block p-4 text-lg">
                            FAQ
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="blog" className="block p-4 text-lg">
                            Blog
                        </Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

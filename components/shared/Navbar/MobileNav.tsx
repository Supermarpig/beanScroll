"use client";

import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
// import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
    const pathName = usePathname();

    return (
        <section className="flex h-full flex-col gap-6 pt-16">
            {sidebarLinks.map((item) => {
                const isActive =
                    (pathName.includes(item.route) && item.route.length > 1) ||
                    pathName === item.route;

                return (
                    <SheetClose asChild key={item.route}>
                        <Link
                            href={item.route}
                            className={`${isActive
                                    ? "primary-gradient rounded-lg text-light-900"
                                    : "text-dark300_light900"
                                } flex items-center justify-start gap-4
                  bg-transparent p-4`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={`${isActive ? "" : "invert-colors"}`}
                            />
                            <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                                {item.label}
                            </p>
                        </Link>
                    </SheetClose>
                );
            })}
        </section>
    );
};

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src="/assets/icons/hamburger.svg"
                    width={36}
                    height={36}
                    alt="Menu"
                    className="invert-colors sm:hidden"
                />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="background-light900_dark200 border-none"
            >
                <Link href="/home" className="flex items-center gap-1">
                    <Image
                        src="/assets/images/site-logo.svg"
                        width={23}
                        height={23}
                        alt="DevFlow"
                    />
                    <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
                        Con<span className="text--500">tek</span>
                    </p>
                </Link>
                <div>primary
                    <NavContent />

                    <div className="flex flex-col gap-3 pt-10">
                        <SheetClose>
                            <Link href="/sign-in">
                                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg py-3 shadow-none">
                                    <span className="primary-text-gradient">Login</span>
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose>
                            <Link href="/sign-up">
                                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg py-3 shadow-none">
                                    SignUp
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                    {/* <SignedOut>
                    </SignedOut> */}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

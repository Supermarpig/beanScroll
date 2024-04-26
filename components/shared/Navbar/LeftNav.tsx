"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathName = usePathname();

  return (
    <section className="h-full flex-col gap-6 pt-20">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

        return (
          <Link
            href={item.route}
            className={`${
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900"
            } flex items-center justify-start gap-4 bg-transparent p-4`}
            key={item.route}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p className={`${isActive ? "base-bold" : "base-medium"}`}>{item.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

const LeftNav = () => (
  <div className="w-30 h-[100vh] flex-col hidden sm:flex"> {/* 左側欄位的寬度可以根據需要調整 */}
    <NavContent />

    <div className="flex flex-col gap-3 mt-auto">         
        <Link href="/sign-in">
            <Button className="small-medium btn-secondary hover:btn-tertiary min-h-[41px] w-full rounded-lg py-3 shadow-none">
                <span className="primary-text-gradient">Login</span>
            </Button>
        </Link>
        <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-secondary hover:btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg py-3 shadow-none">
                SignUp
            </Button>
        </Link>  
     </div>
  </div>
);

export default LeftNav;

"use client";

import Logo from "@ds-components/logo";
import VerticalMenu from "@ds-components/VerticalMenu";
import { House, Compass, Cloud, ChatCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TBadgeState = "success" | "warning" | "danger" | "info";

type TList = {
  id: string;
  link: JSX.Element;
  slug: string;
  icon: JSX.Element;
  hasNotification?: boolean;
  badge?: {
    label: string;
    state: TBadgeState;
    overrideClassName?: string;
  };
};

const ListMenu: TList[] = [
  {
    id: "home",
    link: <Link href={"/"}>Home</Link>,
    slug: "/",
    icon: <House size={22} weight="duotone" />,
  },
  {
    id: "locations",
    link: <Link href={"/locations"}>Locations</Link>,
    slug: "/locations",
    icon: <Compass size={22} weight="duotone" />,
  },
  {
    id: "cloud-storage",
    link: <Link href={"/cloud"}>Cloud Storage</Link>,
    slug: "/cloud",
    icon: <Cloud size={22} weight="duotone" />,
  },
  {
    id: "messages",
    link: <Link href={"/messages"}>Messages</Link>,
    slug: "/messages",
    hasNotification: true,
    badge: {
      label: "10",
      state: "success",
    },
    icon: <ChatCircle size={22} weight="duotone" />,
  },
];

export default function Home() {
  const pathname = usePathname();
  return (
    <main className="">
      <div className="flex">
        <aside className="w-[240px] h-full flex-none">
          <div className="mt-10 ml-6">
            <Logo />
          </div>
          <VerticalMenu
            pathname={pathname}
            className="mt-16 gap-y-9"
            lists={ListMenu}
          />
        </aside>
        <span className="h-full border border-gray-100 w-[1px]"></span>
        <div className="w-full h-full"></div>
        <div className="w-[324px] h-full flex-none"></div>
      </div>
    </main>
  );
}

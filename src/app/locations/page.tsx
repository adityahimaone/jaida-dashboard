"use client";
import Logo from "@/components/Logo";
import VerticalMenu from "@/components/VerticalMenu";
import React from "react";
import { House, Compass, Cloud, ChatCircle } from "@phosphor-icons/react";

type Props = {};

const ListMenu = [
  {
    id: "",
    label: "Home",
    slug: "/",
    icon: <House size={22} weight="duotone" />,
  },
  {
    id: "locations",
    label: "Locations",
    slug: "/locations",
    icon: <Compass size={22} weight="duotone" />,
  },
  {
    id: "cloud-storage",
    label: "Cloud Storage",
    slug: "/cloud",
    icon: <Cloud size={22} weight="duotone" />,
  },
  {
    id: "messages",
    label: "Messages",
    slug: "/cloud-storage",
    icon: <ChatCircle size={22} weight="duotone" />,
  },
];

function Page({}: Props) {
  return (
    <main className="">
      <div className="flex">
        <aside className="w-[240px] h-full flex-none">
          <div className="ml-6 mt-10">
            <Logo />
          </div>
          <VerticalMenu className="mt-16 gap-y-9" lists={ListMenu} />
        </aside>
        <span className="h-full border border-gray-100 w-[1px]"></span>
        <div className="w-full h-full"></div>
        <div className="w-[324px] h-full flex-none"></div>
      </div>
    </main>
  );
}

export default Page;

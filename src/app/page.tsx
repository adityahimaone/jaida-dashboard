"use client";

// import Logo from "@/components/Logo";
import VerticalMenu from "@/components/VerticalMenu";
import Logo from "@ds-components/logo";
import { House, Compass, Cloud, ChatCircle } from "@phosphor-icons/react";

type TBadgeState = "success" | "warning" | "danger" | "info";

type TList = {
  id: string;
  label: string;
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
    hasNotification: true,
    badge: {
      label: "10",
      state: "success",
    },
    icon: <ChatCircle size={22} weight="duotone" />,
  },
];

export default function Home() {
  return (
    <main className="">
      <div className="flex">
        <aside className="w-[240px] h-full flex-none">
          <div className="mt-10 ml-6">
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

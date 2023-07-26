import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { log } from "console";

type TList = {
  id: string;
  label: ReactNode;
  slug?: string;
  icon?: ReactNode;
  hasNotification?: boolean;
  child?: TList[];
  badge?: {
    state: "success" | "warning" | "danger" | "info";
    overrideClassName?: string;
    label: string;
  };
  onClick?: () => void;
};

type Props = {
  className?: string;
  lists: TList[];
};

type TBadge = {
  state: "success" | "warning" | "danger" | "info";
  overrideClassName?: string;
  label: string;
};

const ActiveIndicator = () => {
  return (
    <span className="absolute left-0 transform -translate-y-1/2 top-1/2">
      <svg
        width="15"
        height="70"
        viewBox="0 0 15 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_0_614"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="-10"
          y="0"
          width="25"
          height="70"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-0.411081 2.86301C-0.411081 1.28182 -1.6929 0 -3.27409 0C-4.85529 0 -6.13711 1.28181 -6.13711 2.86301V19.7751C-6.13711 24.3724 -9.00012 28.8046 -9.00012 33.4019C-9.00012 37.9992 -6.13711 42.4314 -6.13711 47.0287V66.8037C-6.13711 68.3849 -4.85529 69.6667 -3.27409 69.6667C-1.6929 69.6667 -0.411081 68.3849 -0.411081 66.8037V55.8288C-0.411081 48.1864 6.59222 42.2349 12.3371 37.1948C13.6409 36.0509 14.4766 34.7634 14.4766 33.4019C14.4766 31.6794 13.139 30.0753 11.2081 28.7308C5.5852 24.8154 -0.411081 19.2583 -0.411081 12.4064V2.86301Z"
            className="fill-primary"
          />
        </mask>
        <g mask="url(#mask0_0_614)">
          <rect
            width="22.9041"
            height="48.6712"
            transform="matrix(-1 0 0 1 22.4925 8.58905)"
            className="fill-primary"
          />
        </g>
      </svg>
    </span>
  );
};

const badgeState: {
  [key: string]: string;
} = {
  success: "bg-primary",
  warning: "bg-[#FDD835]",
  danger: "bg-[#F44336]",
  info: "bg-[#2196F3]",
};

const Badge = ({ label, state, overrideClassName }: TBadge) => {
  return (
    <span
      className={[
        overrideClassName,
        badgeState[state],
        "text-white rounded-[5px] px-3 py-1 ml-6 text-xs",
      ].join(" ")}
    >
      {label}
    </span>
  );
};

export default function VerticalMenu({ lists, className }: Props) {
  const pathname = usePathname();
  return (
    <ul className={["flex w-full flex-col", className].join(" ")}>
      {lists.map((list, index) => {
        const isActive = !!list.slug && pathname.startsWith(list.slug);
        console.log(
          !!list.slug && pathname.includes(list.slug),
          list.slug,
          pathname
        );

        return (
          <li key={list.id} className="relative pl-7">
            <Link
              href={!!list.slug ? list.slug : "#"}
              className={[
                "",
                isActive ? "text-primary" : "text-primary-gray",
              ].join(" ")}
            >
              {isActive && <ActiveIndicator />}
              <span className="flex">
                {list.icon && (
                  <span className="relative mr-4">
                    {list.icon}
                    {!!list.hasNotification && (
                      <span className="w-[6px] h-[6px] bg-[#46D39A] rounded-full absolute bottom-[4px] right-0"></span>
                    )}
                  </span>
                )}
                <span
                  className={["text-sm", isActive ? "font-bold" : ""].join(" ")}
                >
                  {list.label}
                </span>
                {!!list.badge && (
                  <Badge
                    label={list.badge.label}
                    state={list.badge.state}
                    overrideClassName={list.badge.overrideClassName}
                  />
                )}
              </span>
              {/* !! : for checking if the value is not null or undefined */}
              {!!list.child && list.child.length > 0 && (
                <VerticalMenu lists={list.child} />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

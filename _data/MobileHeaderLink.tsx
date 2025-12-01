import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SubmenuItem = {
  label: string;
  href: string;
};

export type HeaderItem = {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
};

const MobileHeaderLink: React.FC<{
  item: HeaderItem;
  onClick?: () => void;
}> = ({ item, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    } else {
      if (onClick) onClick();
    }
  };

  const navString =
    item.label.slice(-1) === "s"
      ? item.label.toLowerCase().substring(0, item.label.length - 1)
      : item.label.toLowerCase();

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={handleToggle}
        className={`flex items-center text-2xl justify-between w-full py-2 px-3 text-white rounded-md ${
          path.startsWith(`/${navString}`) ? "bg-white! text-black!" : ""
        } ${path === item.href ? "bg-primary! text-black!" : ""}`}
      >
        {item.label}

        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`transition-transform ${
              submenuOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div className="bg-primary p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onClick}
              className={`block py-2 px-3 text-gray-100 ${
                path === subItem.href ? "text-black!" : ""
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;

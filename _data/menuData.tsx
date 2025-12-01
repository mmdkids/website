export interface HeaderItem {
  label: string
  href: string
  submenu?: {
    label: string
    href: string
  }[]
}


export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs"
  },
  {
    label: "Events",
    href: "/events"
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  { label: "Contact", href: "/contact" },
  
];


  // {
  //   label: "Events",
  //   href: "#",
  //   submenu: [
  //     { label: "Events list", href: "/events" },
  //     { label: "Events details", href: "/events/event-1" },
  //   ],
  // },
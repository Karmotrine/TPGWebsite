import Contacts from "./Home/Contacts";
import TPGLogo from "./base/TPGLogo";
import Link from "next/link";

type Subsection = {
  title: string;
  path: string;
};

type Page = {
  title: string;
  path: string;
};

type FooterDirectoryItem = {
  page: Page;
  subsections: Subsection[];
};

const FOOTER_DIRECTORY: FooterDirectoryItem[] = [
  {
    page: {
      title: "Home",
      path: "/",
    },
    subsections: [
      {
        title: "FAQs",
        path: "/#faqs",
      },
    ],
  },
  {
    page: {
      title: "Projects",
      path: "/",
    },
    subsections: [
      {
        title: "Events",
        path: "/events",
      },
    ],
  },
  {
    page: {
      title: "About",
      path: "/about",
    },
    subsections: [
      {
        title: "Vison",
        path: "/about#vision",
      },
      {
        title: "Mission",
        path: "/about#mission",
      },
      {
        title: "Community",
        path: "/about#community",
      },
    ],
  },
  {
    page: {
      title: "Be a Devskolar",
      path: "/register",
    },
    subsections: [
      {
        title: "Benefits",
        path: "/register#benefits",
      },
      {
        title: "Application Process",
        path: "/register#process",
      },
      {
        title: "Requirements",
        path: "/register#requirements",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col">
      <Contacts />
      <div className="flex flex-row justify-center gap-x-[184px] border-0 bg-[#052014] px-60 py-10 text-white">
        <TPGLogo />
        <div className="flex flex-row gap-x-12">
          {FOOTER_DIRECTORY.map((item: FooterDirectoryItem) => (
            <div key={`${item.page}-directory`} className="flex flex-col gap-y-4">
              <Link className="p-[10px] font-semibold" href={item.page.path}>
                {item.page.title}
              </Link>
              {item.subsections.map((subsection: Subsection) => (
                <Link key={`${subsection.title}-subdirectory`} className="p-[10px] text-sm" href={subsection.path}>
                  {subsection.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-0 bg-[#052014] pb-10 pt-4 text-white">
        <span>PUP - THE PROGRAMMERS’ GUILD</span>
        <span>All Rights Reserved © 2023</span>
      </div>
    </div>
  );
}

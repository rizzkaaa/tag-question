"use client";
import { useEffect, useState } from "react";
import { FaChevronDown, FaRobot } from "react-icons/fa";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { tenali_Ramakrishna } from "../../public/font";

export default function Home({ children }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("sidebar");
    if (saved !== null) {
      setOpen(saved === "true");
    }
  }, []);

  const menus = [
    {
      label: "Get Started",
      pathName: "/dashboard",
    },
    {
      label: "What Is A Tag Question?",
      pathName: "/dashboard/what-is-a-tag-question",
    },
    {
      label: "Why Do We Need Tag Question?",
      pathName: "/dashboard/why-do-we-need-tag-question",
    },
    {
      label: "How To Make Tag Question",
      pathName: "/dashboard/how-to-make-tag-question",
    },
    {
      label: "Formula Tag Question",
      pathName: "/dashboard/formula-tag-question",
    },
    {
      label: "Try It Yourself",
      pathName: "/dashboard/try-it-yourself",
    },
    {
      label: "More Video",
      pathName: "/dashboard/more-video",
    },
  ];

  function toggleSidebar() {
    setOpen((prev) => {
      localStorage.setItem("sidebar", String(!prev));
      return !prev;
    });
  }

  return (
    <div className="page">
      <aside
        className={`${styles.sidebar} ${!open ? styles.closeSidebar : ""}`}
      >
        <div className={styles.firstLayer}>
          <div className={styles.secondLayer}>
            {menus.map((menu, index) => {
              return (
                <div
                  className={`${styles.borderMenu} ${
                    path == menu.pathName ? styles.activeMenu : ""
                  }`}
                  key={index}
                >
                  <Link
                    className={`${styles.a} ${tenali_Ramakrishna.className}`}
                    href={menu.pathName}
                  >
                    {menu.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.firstLayer}>
          <div className={styles.secondLayer}>
            <div className={styles.wrap}>
              <div className={styles.toggleMenu}>
                <button
                  className={`${styles.toggleBtn} ${tenali_Ramakrishna.className}`}
                  onClick={toggleSidebar}
                >
                  <FaChevronDown
                    className={`${
                      open ? styles.closeToggle : styles.openToggle
                    } ${styles.toggleIcon}`}
                  />
                  {open ? "Close" : "Open"} Menu
                </button>
              </div>
              <div className={styles.toggleMenu}>
                <a href="/chatbot" className={styles.toggleBtn}>
                  <FaRobot />
                </a>
              </div>
            </div>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

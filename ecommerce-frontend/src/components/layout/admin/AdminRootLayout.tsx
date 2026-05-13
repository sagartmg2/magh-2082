import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router";
import type { RootState } from "../../../redux/store";
import { logout } from "../../../redux/features/userSlice";

const NAV_ITEMS = [
  {
    to: "/admin/dashboard",
    label: "Dashboard",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    to: "/admin/products",
    label: "Products",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    to: "/admin/categories",
    label: "Categories",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AdminRootLayout() {
  const reduxUser = useSelector((globalStore: RootState) => globalStore.user.value);
  const dispatch = useDispatch();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const initials =
    `${reduxUser.firstName?.[0] ?? ""}${reduxUser.lastName?.[0] ?? ""}`.toUpperCase() || "AD";

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 font-mono overflow-hidden">

      {/* ── SIDEBAR ── */}
      <aside
        className={`
          relative flex flex-col border-r border-zinc-800 bg-zinc-900
          transition-all duration-300 ease-in-out
          ${collapsed ? "w-16" : "w-60"}
        `}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 px-4 h-16 border-b border-zinc-800 ${collapsed ? "justify-center" : ""}`}>
          <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded flex items-center justify-center">
            <span className="text-zinc-900 font-black text-sm tracking-tighter">A</span>
          </div>
          {!collapsed && (
            <span className="text-sm font-bold tracking-widest text-zinc-100 uppercase">
              Admin
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                title={collapsed ? item.label : undefined}
                className={`
                  group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm
                  transition-all duration-150
                  ${active
                    ? "bg-amber-400 text-zinc-900 font-semibold shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                  }
                  ${collapsed ? "justify-center" : ""}
                `}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="tracking-wide">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User card */}
        <div className={`border-t border-zinc-800 p-3 ${collapsed ? "flex justify-center" : ""}`}>
          {collapsed ? (
            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-amber-400">
              {initials}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-amber-400 flex-shrink-0">
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-zinc-100 truncate">
                  {reduxUser.firstName} {reduxUser.lastName}
                </p>
                <p className="text-[10px] text-zinc-500 tracking-widest uppercase">Administrator</p>
              </div>
              <button
                onClick={() => dispatch(logout())}
                title="Logout"
                className="p-1.5 rounded text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="
            absolute -right-3 top-[72px]
            w-6 h-6 rounded-full
            bg-zinc-800 border border-zinc-700
            flex items-center justify-center
            text-zinc-400 hover:text-amber-400 hover:border-amber-400
            transition-colors z-10
          "
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${collapsed ? "rotate-0" : "rotate-180"}`}
            fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-zinc-800 bg-zinc-900 flex-shrink-0">
          <div>
            <h1 className="text-sm font-bold tracking-widest uppercase text-zinc-100">
              {NAV_ITEMS.find((n) => location.pathname.startsWith(n.to))?.label ?? "Admin"}
            </h1>
            <p className="text-[10px] text-zinc-500 tracking-wider">
              {location.pathname}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button className="relative p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path d="M15 17H9m3 4a1 1 0 01-1-1H10a1 1 0 011 1zm6-4H3l2-3V9a7 7 0 0114 0v5l2 3z" strokeLinecap="round" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full" />
            </button>

            {/* Logout button (topbar shortcut) */}
            <button
              onClick={() => dispatch(logout())}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-zinc-400 hover:text-red-400 hover:bg-zinc-800 border border-zinc-800 hover:border-red-900 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Logout
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-zinc-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
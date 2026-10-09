"use client";

import { usePathname } from "next/navigation";
import type { Category } from "@/lib/types";
import CategoryLinks from "./CategoryLinks";

/** Reads the URL to highlight the active category. Rendered inside <Suspense> (see Navbar). */
export default function CategoryNav({ categories }: { categories: Category[] }) {
  const pathname = usePathname();
  return <CategoryLinks categories={categories} activeHref={pathname} />;
}

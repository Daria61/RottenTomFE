import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const PageNum = ({ pageAll }: { pageAll: number }): JSX.Element => {
  const pages: number[] = [];

  const { pathname } = useRouter();
  const { query } = useRouter();
  const pageId = query.id;

  const active = "border rounded p-2 bg-blue-600";
  const none = "border rounded p-2";

  for (let i = 1; i <= pageAll; i++) {
    pages.push(i);
  }

  return (
    <div className="flex  gap-3 justify-center mb-5">
      {pages.map((num, ind) => [
        <Link
          href={pathname == "/movies" ? `/movies?id=${num}` : `?id=${num}`}
          key={ind}>
          <div className={num == pageId ? active : none}>{num}</div>
        </Link>,
      ])}
    </div>
  );
};

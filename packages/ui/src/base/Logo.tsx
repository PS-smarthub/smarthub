"use client";
import Link from 'next/link'

export default function Logo({ app_name }: { app_name: string }) {
  return (
    <Link href="/">
      <h1
        className="font-bold text-lg text-blue-700"
      >
        {app_name}
      </h1>
    </Link>
  );
}

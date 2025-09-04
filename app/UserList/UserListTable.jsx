import Link from "next/link";
import React from "react";

export default function UserListTable({ user }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="py-3 px-4 cursor-pointer">
        <Link href={`/user/${user.id}`}>
          <div className="font-medium text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">@{user.username}</div>
        </Link>
      </td>

      <td className="py-3 px-4 text-gray-700">
        <Link href={`/user/${user.id}`}>{user.email}</Link>
      </td>

      <td className="py-3 px-4 text-gray-700">
        <Link href={`/user/${user.id}`}>{user.phone}</Link>
      </td>

      <td className="py-3 px-4 text-gray-700">
        <Link href={`/user/${user.id}`}>{user.company?.name ?? "N/A"}</Link>
        <Link href={`/user/${user.id}`}>{user.company?.name ?? "N/A"}</Link>
      </td>
    </tr>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function UserDetails({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data: User) => setUser(data));
  }, [params.id]);

  if (!user) return <p className="text-center py-10">Loading..</p>;

  return (
    <div className="w-11/12 mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm flex items-center gap-2"
          >
            <ArrowLeft /> Back to Users
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">User Details</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-4">Personal Information</h2>
            <p>
              <span className="font-medium">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-medium">Username:</span> @{user.username}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-medium">Website:</span>{" "}
              <a
                href={`http://${user.website}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                {user.website}
              </a>
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-4">Address</h2>
            <p>
              <span className="font-medium">Street:</span> {user.address.street}
            </p>
            <p>
              <span className="font-medium">Suite:</span> {user.address.suite}
            </p>
            <p>
              <span className="font-medium">City:</span> {user.address.city}
            </p>
            <p>
              <span className="font-medium">Zipcode:</span>{" "}
              {user.address.zipcode}
            </p>
            <p>
              <span className="font-medium">Geo Location:</span>{" "}
              {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mt-6">
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <p>
              <div className="font-medium">Company Name:</div>
              <span>{user.company.name}</span>
            </p>
            <p>
              <div className="font-medium block">Catch Phrase:</div>
              <span>{user.company.catchPhrase}</span>
            </p>
            <p>
              <div className="font-medium">Business:</div>{" "}
              <span>{user.company.bs}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

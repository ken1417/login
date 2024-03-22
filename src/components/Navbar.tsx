"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useAuth } from "../app/hooks/auth";

const Navbar = () => {
  const { data: session }: any = useSession();
  const { user, logout } = useAuth();
  return (
    <div>
      <ul className="flex justify-between m-10 item-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>
          {/* {user ? (
            <>
              {user?.email}
              <li>
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          )} */}
          {user ? (
            <>
              <a className="hover:font-bold">{user?.email}</a>
              <button
                onClick={() => {
                  logout();
                }}
                className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

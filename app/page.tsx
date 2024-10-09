import Link from 'next/link';
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {session ? (
            <Link href="/dashboard" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Dashboard &rarr;</h3>
              <p className="mt-4 text-xl">
                Access your dashboard and manage your account.
              </p>
            </Link>
          ) : (
            <>
              <Link href="/login" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">Login &rarr;</h3>
                <p className="mt-4 text-xl">
                  Log in to your account and access the dashboard.
                </p>
              </Link>
              <Link href="/register" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">Register &rarr;</h3>
                <p className="mt-4 text-xl">
                  Create a new account and join our community.
                </p>
              </Link>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
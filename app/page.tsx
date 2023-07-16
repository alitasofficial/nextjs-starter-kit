import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl tracking-tight">Next.js Starter Template</h1>
      <Link href={"https://alitas.dev"} className="text-xl font-extralight">
        @AliTas
      </Link>
    </main>
  );
}

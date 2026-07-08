import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-24">
      <div className="container-x text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="h-display mx-auto mt-5 max-w-2xl text-4xl sm:text-5xl">
          A wrong turn, not a wrong start.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          This page does not exist. The good news: everything you actually need is one click away.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/services" className="btn btn-ghost">
            Browse services
          </Link>
        </div>
      </div>
    </section>
  );
}

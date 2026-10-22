import { config } from "@/consts/config";
import { cn } from "@/utils/classname";

export default function Home() {
  return (
    <section
      className={cn(
        "mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-4 px-6"
      )}
    >
      <p className="text-ink-muted text-sm font-medium tracking-wide uppercase">
        Vite · React · TanStack Router · Tailwind
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        {config.appTitle}
      </h1>
      <p className="text-ink-muted text-lg text-pretty">
        Clone this starter, rename the package, point git at
        your new repo, and start building.
      </p>
    </section>
  );
}

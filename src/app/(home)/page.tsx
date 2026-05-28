import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Explore the Platform",
    description:
      "Credential management, processflows, execution history, AI agents — everything built to simplify integration.",
    href: "/platform/what-is-appse-ai",
    image: "/img/homepage/explore-the-platform.png",
  },
  {
    title: "Integrate Applications",
    description:
      "Connect your favorite apps in minutes. Sync data effortlessly across platforms with zero-code integrations and enterprise-grade reliability.",
    href: "/app_integrations/intro",
    image: "/img/homepage/integrate-applications.png",
  },
  {
    title: "Start Your Automation Journey",
    description:
      "Turn manual tasks into smart, automated workflows. Launch faster, scale smarter.",
    href: "/platform/getting_started",
    image: "/img/homepage/start-your-automation-journey.png",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="px-6 py-20 text-center sm:py-28">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your AI automation journey starts here!
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-fd-muted-foreground">
          Build, orchestrate, and run AI-native workflows across SAP, Microsoft,
          Google, AWS, and 100+ apps.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://workflow.appse.ai/"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition hover:opacity-90"
          >
            Try appse ai now!
          </a>
          <Link
            href="/platform/what-is-appse-ai"
            className="rounded-md border border-fd-border px-5 py-2.5 text-sm font-semibold transition hover:bg-fd-accent"
          >
            Read the docs
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Link
            key={f.title}
            href={f.href}
            className="group flex flex-col rounded-xl border border-fd-border bg-fd-card p-6 transition hover:border-fd-primary/40 hover:shadow-md"
          >
            <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-lg bg-fd-muted">
              <Image
                src={f.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-2 transition group-hover:scale-[1.02]"
              />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-fd-muted-foreground">
              {f.description}
            </p>
            <span className="mt-4 text-sm font-medium text-fd-primary">
              Explore →
            </span>
          </Link>
        ))}
      </section>

      <footer className="border-t border-fd-border px-6 py-6 text-center text-sm text-fd-muted-foreground">
        Copyright © {new Date().getFullYear()} APPSeCONNECT
      </footer>
    </main>
  );
}

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { team } from "@/data/content";

function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-9 w-9"
      aria-hidden="true"
    >
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.69-8 6v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-3.31-3.58-6-8-6Z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="equipo" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Quiénes somos" title="Equipo" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.instagram} delay={(i % 3) * 100}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-black/10 bg-black/[0.02] p-8 text-center transition hover:-translate-y-1 hover:border-black/25 hover:shadow-lg hover:shadow-black/5">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white transition group-hover:scale-105">
                  <PersonIcon />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-black/50">{member.role}</p>
                <a
                  href={`https://www.instagram.com/${member.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-1.5 text-sm font-medium text-black/80 transition-all duration-300 ease-in-out hover:border-black hover:bg-black hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @{member.instagram}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-black/40">
          Seguí a cada barbero en Instagram para ver sus trabajos.
        </p>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import { team } from "@/data/content";

export default function Team() {
  return (
    <section id="equipo" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Quiénes somos" title="Equipo" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <a
              key={member.instagram}
              href={`https://www.instagram.com/${member.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-black/10 bg-black/[0.02] p-8 text-center transition hover:border-black/25"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-black text-xl font-black text-white">
                {member.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-black/50">{member.role}</p>
              <p className="mt-3 text-sm text-black/70 group-hover:text-black">
                @{member.instagram}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

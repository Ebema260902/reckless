import { whatsappLink } from "@/data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hola, quisiera reservar un turno")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg shadow-black/30 transition-all duration-300 ease-in-out hover:scale-110"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.34a9.85 9.85 0 0 0 4.62 1.15h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.03c-.25.7-1.23 1.29-2.02 1.46-.55.11-1.26.2-3.66-.79-3.07-1.27-5.05-4.39-5.2-4.6-.15-.2-1.24-1.65-1.24-3.15s.78-2.23 1.06-2.53c.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13.99 2.07 1.3 2.37 1.45.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.24.65-.14.26.09 1.66.78 1.94.92.28.15.47.22.53.34.07.13.07.72-.18 1.4z" />
      </svg>
    </a>
  );
}

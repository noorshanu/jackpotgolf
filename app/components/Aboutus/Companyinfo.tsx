type EmailRow = { kind: "email"; label: string; email: string };
type TextRow = { kind: "text"; label: string; lines: string[] };
type Row = EmailRow | TextRow;

const ROWS: Row[] = [
  {
    kind: "text",
    label: "CORPORATE HEADQUARTERS:",
    lines: ["7350 E Evans Rd Building D", "Scottsdale,", "AZ 85260, USA"],
  },
  {
    kind: "text",
    label: "PHONE & FAX:",
    lines: ["Toll Free: 877-977-0162", "Fax: 480-287-8749"],
  },
  {
    kind: "email",
    label: "GENERAL INFO:",
    email: "info@golflogix.com",
  },
  {
    kind: "email",
    label: "ADVERTISING:",
    email: "advertising@golflogix.com",
  },
  {
    kind: "email",
    label: "BUSINESS DEVELOPMENT:",
    email: "bizdev@golflogix.com",
  },
  {
    kind: "email",
    label: "PRESS INQUIRIES:",
    email: "press@golflogix.com",
  },
];

export default function Companyinfo() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-md px-6 sm:max-w-lg sm:px-8 md:max-w-2xl md:px-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl">
          Company Info
        </h2>

        <dl className="mt-8 flex flex-col gap-7 text-[#1A1A1A] sm:mt-10">
          {ROWS.map((row) => (
            <div key={row.label}>
              <dt className="text-base font-extrabold uppercase tracking-tight sm:text-lg">
                {row.label}
              </dt>
              <dd className="mt-1 text-base leading-relaxed sm:text-lg">
                {row.kind === "text" ? (
                  row.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))
                ) : (
                  <a
                    href={`mailto:${row.email}`}
                    className="underline underline-offset-2 hover:opacity-80"
                  >
                    {row.email}
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

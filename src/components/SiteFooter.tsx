import { site } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted-foreground">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-foreground">© {new Date().getFullYear()} {site.name}</p>
          <p>Online coaching · In presenza · Programmi personalizzati</p>
        </div>
      </div>
    </footer>
  );
}

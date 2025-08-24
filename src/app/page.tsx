import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/common/darkmode-toggle";

export default function RootLayout() {
  return (
    <main>
      <div className="flex items-center gap-2">
        <Button className="text-2xl font-bold">Hello</Button>
        <DarkModeToggle />
      </div>
    </main>
  );
}
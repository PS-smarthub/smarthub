import { Button } from "@repo/ui/button";


export default function Page(): JSX.Element {
  return (
    <main className="bg-black min-h-screen">
      <Button appName="web">
        Click me!
      </Button>
    </main>
  );
}

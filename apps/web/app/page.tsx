import { Button } from "@smarthub/ui";
import {Header} from '@smarthub/ui'


export default function Page(): JSX.Element {
  return (
    <main className="bg-black min-h-screen">
      <Button>
        Click me!
      </Button>
      <div>
        <h1 className="text-white">Teste</h1>
      </div>
      <Header />
    </main>
  );
}

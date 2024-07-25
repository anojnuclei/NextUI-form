import { ClientComponent } from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export default async function ServerPage() {
  return (
    <main>
      <h1 className="">This is runs on Server.</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}

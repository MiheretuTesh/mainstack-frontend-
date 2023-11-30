import Header from "./components/Navbar/Navbar";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-10 bg-white">
      <Header />
      <Landing />
    </main>
  );
}

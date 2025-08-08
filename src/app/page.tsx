import { DashboardHeader } from "./components/HeaderSection/DashboardHeader";
import { Navbar } from "./components/HeaderSection/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Table } from "./components/Table";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="flex min-h-screen gap-10 px-6 lg:px-12">
        <aside className="hidden lg:block lg:w-64">
          <Sidebar />
        </aside>
        <div className="flex-1">
          <DashboardHeader />
        </div>
      </section>
    </>
  );
}

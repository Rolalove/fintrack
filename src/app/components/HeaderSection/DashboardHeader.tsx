import { TabNavigation } from "./TabNavigation";
import { UserAvatar } from "./UserAvatar";

export const DashboardHeader = () => {
  return (
    <section className="w-full mb-6">
      <h3>Wallet Ledger</h3>
      <UserAvatar />
      <TabNavigation />
    </section>
  );
};

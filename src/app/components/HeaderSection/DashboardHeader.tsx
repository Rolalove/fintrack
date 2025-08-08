import { TabNavigation } from "./TabNavigation";
import { UserAvatar } from "./UserAvatar";
import { WalletLedger } from "./WalletLedger";

export const DashboardHeader = () => {
  return (
    <section className="w-full mb-6">
      <WalletLedger />
      <UserAvatar />
      <TabNavigation />
    </section>
  );
};

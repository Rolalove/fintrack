import { dashboardSummary } from "@/data/dashboardSummary";
import { formatAmount } from "@/utils/formatAmount";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const SummaryCard = () => {
  const card = [
    {
      label: "Total Balance",
      value: dashboardSummary.totalBalance,
      change: dashboardSummary.balanceChange,
    },
    {
      label: "Total Credits",
      value: dashboardSummary.totalCredits,
      change: dashboardSummary.creditsChange,
    },
    {
      label: "Total Debits",
      value: dashboardSummary.totalDebits,
      change: dashboardSummary.debitsChange,
    },
    {
      label: "Transactions",
      value: dashboardSummary.transactionCount,
      change: dashboardSummary.transactionChange,
    },
  ];
  return (
    <section className="grid mt-6 mb-6">
      <p className="font-bold text-xl py-3">Summary</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {card.map(({ label, value, change }) => (
          <div
            key={label}
            className="bg-[#34616F17] opactity-5 p-7 rounded-3xl"
          >
            <div className="flex justify-between items-center">
              <p className="text-[#1B2528] font-bold text-base">{label}</p>
              <HiOutlineDotsHorizontal size={24} className="text-[#1B2528]" />
            </div>

            <h3 className="text-[#1B2528] font-bold text-3xl mt-4">
              {label === "Transactions" ? value : formatAmount(value)}
            </h3>
            <p className="text-[#3E7383] font-medium text-sm mt-1">{change}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

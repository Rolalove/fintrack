"use client";
import { transactions } from "@/data/sampleData";
import { formatAmount } from "@/utils/formatAmount";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

export const Table = () => {
  const [direction, setDirection] = useState<"asc" | "des">("des");
  const [sortBy, setSortBy] = useState<
    "date" | "remark" | "amount" | "currency" | "type" | null
  >(null);

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (!sortBy) return 0;

    let valueA: string | number;
    let valueB: string | number;

    switch (sortBy) {
      case "date":
        valueA = new Date(a.date).getTime();
        valueB = new Date(b.date).getTime();
        break;
      case "remark":
        valueA = a.remark.toLowerCase();
        valueB = b.remark.toLowerCase();
        break;
      case "amount":
        valueA = a.amount;
        valueB = b.amount;
        break;
      case "currency":
        valueA = a.currency.toLowerCase();
        valueB = b.currency.toLowerCase();
        break;
      case "type":
        valueA = a.type.toLowerCase();
        valueB = b.type.toLowerCase();
        break;
      default:
        return 0;
    }

    if (direction === "asc") {
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    } else {
      return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
    }
  });

  const handleSort = (
    column: "date" | "remark" | "amount" | "currency" | "type"
  ) => {
    if (sortBy === column) {
      setDirection((prev) => (prev === "asc" ? "des" : "asc"));
    } else {
      setSortBy(column);
    }
  };

  const SortButton = ({
    column,
  }: {
    column: "date" | "remark" | "amount" | "currency" | "type";
  }) => (
    <button className="cursor-pointer ml-1" onClick={() => handleSort(column)}>
      {direction === "asc" ? (
        <IoMdArrowDropup size={20} className="md:w-6 md:h-6" />
      ) : (
        <TiArrowSortedDown size={20} className="md:w-6 md:h-6" />
      )}
    </button>
  );

  return (
    <div>
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[600px] table-fixed border-separate border-spacing-y-3 border-spacing-x-3">
          <thead>
            <tr className="text-left text-[#15272D9E] border-[#49656E33] font-medium text-[15px]">
              <th className="w-[55%] border-b border-[#49656E33]">
                <div className="flex items-center">
                  Date
                  <SortButton column="date" />
                </div>
              </th>
              <th className="w-[15%] border-b border-[#49656E33]">
                <div className="flex items-center">
                  Remark
                  <SortButton column="remark" />
                </div>
              </th>
              <th className="w-[10%] border-b border-[#49656E33]">
                <div className="flex items-center">
                  Amount
                  <SortButton column="amount" />
                </div>
              </th>
              <th className="w-[10%] border-b border-[#49656E33]">
                <div className="flex items-center">
                  Currency
                  <SortButton column="currency" />
                </div>
              </th>
              <th className="w-[10%] border-b border-[#49656E33]">
                <div className="flex items-center">
                  Type
                  <SortButton column="type" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map(
              ({ id, date, remark, amount, currency, type }) => (
                <tr key={id} className="text-[15px] text-[#1B2528] text-left">
                  <td className="border-b-[1.5px] border-[#49656E33] text-base py-3">
                    {date}
                  </td>
                  <td className="border-b-[1.5px] border-[#49656E33] py-3 text-base">
                    {remark}
                  </td>
                  <td className="border-b-[1.5px] border-[#49656E33] py-3 text-base font-medium">
                    {formatAmount(amount)}
                  </td>
                  <td className="border-b-[1.5px] border-[#49656E33] py-3 text-base">
                    {currency}
                  </td>
                  <td className="border-b-[1.5px] border-[#49656E33] py-3">
                    <div className="flex items-center gap-2 bg-[#34616F17] w-fit px-3 py-1 rounded-full text-base">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          type.toLowerCase() === "debit"
                            ? "bg-[#C6381B]"
                            : "bg-[#087A2E]"
                        }`}
                      ></div>
                      <span>{type}</span>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Grid View */}
      <div className="md:hidden">
        {/* Sort Header for Mobile */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#49656E33]">
          <h3 className="text-[#15272D9E] font-medium text-lg">Transactions</h3>
          <button
            className="flex items-center gap-1 text-[#15272D9E] font-medium text-lg"
            onClick={() => handleSort("date")}
          >
            Sort by Date
            {direction === "asc" ? (
              <IoMdArrowDropup size={18} />
            ) : (
              <TiArrowSortedDown size={18} />
            )}
          </button>
        </div>

        {/* Grid Cards */}
        <div className="space-y-4">
          {sortedTransactions.map(
            ({ id, date, remark, amount, currency, type }) => (
              <div
                key={id}
                className="bg-white border border-[#49656E33] rounded-lg p-4 space-y-3"
              >
                {/* Date and Type Row */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[#15272D9E]">
                    {new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2 bg-[#34616F17] px-3 py-1 rounded-full">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        type.toLowerCase() === "debit"
                          ? "bg-[#C6381B]"
                          : "bg-[#087A2E]"
                      }`}
                    ></div>
                    <span className="text-sm">{type}</span>
                  </div>
                </div>

                {/* Remark */}
                <div>
                  <div className="text-[#1B2528] font-medium">{remark}</div>
                </div>

                {/* Amount and Currency */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-[#1B2528]">
                    {formatAmount(amount)}
                  </div>
                  <div className="text-sm text-[#15272D9E] bg-gray-50 px-2 py-1 rounded">
                    {currency}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

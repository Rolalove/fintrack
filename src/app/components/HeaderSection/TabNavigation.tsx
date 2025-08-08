"use client";
import { useState } from "react";
import { SummaryCard } from "../SummaryCard";
import { Table } from "../Table";

export const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions">(
    "overview"
  );

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-8 border-b border-[#49656E33]">
        {/* Overview Tab */}
        <button
          onClick={() => setActiveTab("overview")}
          className={`relative font-medium text-lg lg:text-base px-8 pb-2 transition-colors ${
            activeTab === "overview" ? "text-[#437D8E]" : "text-[#15272D9E]"
          }`}
        >
          Overview
          {activeTab === "overview" && (
            <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#437D8E]"></span>
          )}
        </button>

        {/* Transactions Tab */}
        <button
          onClick={() => setActiveTab("transactions")}
          className={`relative font-medium text-lg lg:text-base pb-2 transition-colors ${
            activeTab === "transactions" ? "text-[#437D8E]" : "text-[#15272D9E]"
          }`}
        >
          Transactions
          {activeTab === "transactions" && (
            <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#437D8E]"></span>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "overview" && (
          <div>
            {/* Overview content */}
            <SummaryCard />
            <Table />
          </div>
        )}

        {activeTab === "transactions" && (
          <div>
            <p>Here are your recent transactions...</p>
          </div>
        )}
      </div>
    </div>
  );
};

import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
export const WalletLedger = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ">
        <div className="flex items-center gap-3">
          <h3 className="text-3xl font-bold text-[#1b2528] ">Wallet Ledger</h3>
          <button className="flex items-center gap-2 font-bold text-[#1b2528] cursor-pointer">
            <TiArrowSortedDown size={15} />
          </button>
          <div className="flex items-center gap-2 bg-[rgba(52,97,111,0.09)] px-2 py-1 rounded-2xl">
            <div className="w-2 h-2 bg-[#087A2E] rounded-full"></div>
            <span className="text-[15px] text-[#1b2528] cursor-pointer">
              Active
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-1 bg-[#4b8b9f] text-[#020303] rounded-2xl  cursor-pointer">
            Share
          </button>
          <button className="p-1 rounded-full cursor-pointer border-[1.5px] border-[rgba(73,101,110,0.2)]">
            <HiOutlineDotsHorizontal size={24} className="text-[#1B2528]" />
          </button>
        </div>
      </div>
    </div>
  );
};

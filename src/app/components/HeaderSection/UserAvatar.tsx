import Image from "next/image";

export const UserAvatar = () => {
  return (
    <div>
      <div className="flex items-center gap-3 py-4">
        <div className="flex -space-x-2">
          <Image
            src="/userprofile.png"
            alt="Ava  profile picture"
            width={32}
            height={32}
            className="rounded-full ring-2 ring-white"
          />
          <Image
            src="/liam.png"
            alt="Liam  profile picture"
            width={32}
            height={32}
            className="rounded-full ring-2 ring-white"
          />
          <Image
            src="/ava.png"
            alt="Noah profile picture"
            width={32}
            height={32}
            className="rounded-full ring-2 ring-white"
          />
          <Image
            src="/naoh.png"
            alt="Emma profile picture"
            width={32}
            height={32}
            className="rounded-full ring-2 ring-white"
          />
        </div>
        <span className="text-[14px] text-[rgba(21,39,45,0.62)]">
          Ava, Liam, Noah +12 others
        </span>
      </div>
    </div>
  );
};

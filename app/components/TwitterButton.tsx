import { TwitterIcon } from "./TwitterIcon";

export const TwitterButton = () => {
  const onClick = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/authorize`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if (result) {
      window.location.href = result.url;
    } else {
      console.log("error");
    }
  };

  return (
    <button
      onClick={onClick}
      className="mt-10 flex gap-4 items-center p-4 rounded-md border border-zinc-300 bg-gradient-to-b from-zinc-50 to-zinc-300 hover:to-zinc-400"
    >
      <TwitterIcon className="w-8" />
      <span className="text-lg font-medium hover:underline cursor-pointer">
        Connect your Twitter Account
      </span>
    </button>
  );
};

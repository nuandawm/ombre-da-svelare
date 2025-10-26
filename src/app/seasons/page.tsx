import Link from "next/link";
import {Separator} from "@/app/ui/separator";

export default function Page() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 p-10 bg-white text-black">
      <div>
        <h1 className="flex justify-center uppercase">Episodi</h1>
        <Separator />
      </div>
      <div className="flex flex-col gap-[16px]">
        <Link href="/seasons/1">Stagione 1</Link>
      </div>
    </div>
  );
}
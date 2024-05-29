import Image from "next/image";
import { Ban } from "lucide-react";
import DekstopSidebar from "@/components/block/DekstopSidebar";
import Banner from "@/components/block/Banner";
import Profile from "@/components/block/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-[20%]">
    <DekstopSidebar />
    </div>
    <div className="flex flex-col flex-1 ">
      <Banner/>
      <div className=" relative border border-b p-4 border-l-0">
      <Profile/>
      </div>
   
    </div>
    </main>
  );
}

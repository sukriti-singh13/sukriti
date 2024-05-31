import Image from "next/image";
import { Ban } from "lucide-react";
import DekstopSidebar from "@/components/block/DekstopSidebar";
import Banner from "@/components/block/Banner";
import Profile from "@/components/block/Profile";
import About from "@/components/block/About";
import Company from "@/components/block/CompanyList";
import Work from "@/components/block/Work";
export default function Home() {
  return (
    <main className="flex h-screen ">
    <div className="w-min max-h-screen">
    <DekstopSidebar />
    </div>
    <div className="flex flex-col flex-1 overflow-y-auto">
      <Banner/>
      <section className="px-6 py-4 flex flex-col gap-6">
      <div className=" relative border border-b border-r-0 border-l-0 border-t-0 pb-4">
      <Profile/> 
      </div>
      <About/>
      <Company/>
      <Work/>
      </section>
  
   
    </div>
    </main>
  );
}

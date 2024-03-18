import { Bell, MessageCircleMore, Plus } from "lucide-react";
import { Avatar } from 'flowbite-react';
import SideNav from "@/components/sideNav";
import Navbar from "@/components/ui/navbar";
import Search from "@/components/ui/search";
import Section from "@/components/ui/section";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="flex h-20 items-end bg-neutral-800 p-2 md:h-22 flex items-center justify-between">
        <div className="">
          <h3>Hello, Ronnie Woodkin</h3>
        </div>
        <div className="flex flex-row place-items-center space-x-6">
          <MessageCircleMore />
          <Bell />
          <Avatar img="/avatar/profile-picture-4.jpg" rounded status="online" statusPosition="bottom-right" className="h-2" />
          <Plus />
        </div>
      </div>
      <div className="flex">
        <div className="w-1.5/12">
          <SideNav />
        </div>
        <div className="flex-1">
          <Navbar />
          <Search />

          <div className="columns-3">
            <Section />
            <Section />
            <Section />
          </div>
        </div>


      </div>


    </main>
  );
}

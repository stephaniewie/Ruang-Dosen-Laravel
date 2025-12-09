// src/screens/Home/sections/FrameSubsect/FrameSubsect.tsx
import React from "react";
import { MainContentSection } from "../MainContentSection/MainContentSection";

export const FrameSubsect = (): JSX.Element => {
  return (
    <div className="flex flex-1 relative">
      {/* MainContentSection akan mengambil seluruh lebar karena sidebar sudah dipindah ke SidebarCloseHoverSubsect */}
      <MainContentSection />
    </div>
  );
};
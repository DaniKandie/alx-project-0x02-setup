// pages/about.tsx

import React from "react";
import Header from "@/components/layout/Header"; // ✅ Import Header
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div>
      <Header /> {/* ✅ Insert Header */}
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>

        <Button size="small" shape="rounded-sm">
          Small Button
        </Button>

        <Button size="medium" shape="rounded-md">
          Medium Button
        </Button>

        <Button size="large" shape="rounded-full">
          Large Button
        </Button>
      </main>
    </div>
  );
};

export default AboutPage;

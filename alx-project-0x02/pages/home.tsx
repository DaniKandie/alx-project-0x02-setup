import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>

      <Card title="Project Autonomy" content="SoloForge helps you master building full projects independently." />
      <Card title="Reusable Components" content="Create reusable components like this card to speed up development." />
      <Card title="Clean Design" content="Keep your UI clean and readable using Tailwind and consistent layouts." />
    </div>
  );
};

export default HomePage;

"use client";
import { Button } from "ui-components/ui/button";
import { NoDataFound } from "ui-components/ui/no-data-found";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-blue-500 font-bold">Admin panel</h1>
      <Button variant="destructive">Button</Button>
      {/* <NoDataFound /> */}
    </div>
  );
}

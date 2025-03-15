import { Startpage } from "@/components/startpage";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="flex justify-center min-h-screen w-full md:px-0 px-6 mt-[10%]">
      <div className="w-full max-w-6xl">
        <Suspense fallback={<div>Loading...</div>}>
          <Startpage />
        </Suspense>
      </div>
    </div>
  );
}

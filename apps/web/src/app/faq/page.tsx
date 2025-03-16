import { Button } from "@/components/ui/button";
import { Faq } from "@/modules/faq/faq";

export default function Home() {
  return (
    <div className="flex mx-auto max-w-4xl min-h-screen w-full md:mt-28 mt-14 px-6 lg:px-0">
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-xl">Preguntas Frecuentes</h2>
            <p className="text-sm text-[#878787] mt-1">
              Encuentra respuestas y las preguntas más frecuentes de la UADE.
            </p>
          </div>
        </div>
        <div className="mt-14">
          <Faq />
        </div>
      </div>
    </div>
  );
}

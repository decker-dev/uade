import { Faq } from "@/modules/faq/faq";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to the most common questions about our products and
            services.
          </p>
        </div>

        <Faq />
      </div>
    </div>
  );
}

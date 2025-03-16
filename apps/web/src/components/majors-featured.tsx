import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Plus } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export type Major = {
  id: string;
  title: string;
  faculty: {
    name: string;
    slug: string;
  };
  place: "Remote" | "On-site" | "Hybrid";
  slug: string;
};

export function MajorsFeatured({
  data,
  hidePagination,
}: {
  data?: Major[] | null;
  hidePagination?: boolean;
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative"
    >
      {!hidePagination && (
        <div className="absolute -top-16 right-0 gap-2 hidden md:flex">
          <Link href="/jobs/new">
            <Button
              variant="outline"
              className="rounded-full h-8 flex items-center gap-2 border-border"
            >
              Add job listing
              <Plus className="size-4" />
            </Button>
          </Link>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      )}
      <CarouselContent>
        {data?.map((job) => (
          <CarouselItem key={job.id} className="md:basis-1/2 lg:basis-1/4">
            <Card className="bg-transparent">
              <CardContent className="flex flex-col gap-4 p-4">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#878787] font-mono line-clamp-1">
                      <Link href={`/c/${job.faculty.slug}`}>
                        <span className="line-clamp-1">{job.faculty.name}</span>
                      </Link>
                      {job.place && (
                        <>
                          <span>•</span>
                          <span className="line-clamp-1">{job.place}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-md line-clamp-1">{job.title}</h3>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-fit dark:bg-[#1c1c1c] dark:text-[#878787] dark:hover:bg-[#2c2c2c] rounded-full font-mono text-xs"
                  asChild
                >
                  <Link
                    href={`/major/${job.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

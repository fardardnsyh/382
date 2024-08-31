"use client";
import Hero from "@/components/Hero";
import { fetchData } from "./action";
import Animecard, { AnimeProps } from "@/components/AnimeCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button, Spinner } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface FetchDataResponse {
  id: number;
  anime: AnimeProps[];
}

export default function Home() {
  const { ref, inView } = useInView();

  const { data, status, isError, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<FetchDataResponse>({
      queryKey: ["anime"],
      queryFn: ({ pageParam = 1 }) => fetchData(pageParam as number),
      getNextPageParam(lastPage, allPages) {
        return allPages.length + 1;
      },
      initialPageParam: 1,
    });

  const animeData = data?.pages?.flatMap((page) => page) ?? [];

  if (isError) return <div>{error?.message}</div>;
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <Hero />
      <main
        id="anime"
        className="flex min-h-screen items-center my-20 flex-col justify-center"
      >
        <h1 className="text-4xl text-center my-10 font-bold">Animes</h1>
        {status === "success" ? (
          <div className="gap-6 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {animeData.map((item, index) => (
              <Animecard key={item.id} anime={item} index={index} />
            ))}
          </div>
        ) : (
          <div>
            <Spinner color="danger" size="lg" />
          </div>
        )}
        {isFetchingNextPage && <Spinner color="current" size="sm" />}
        <span ref={ref} />
      </main>
    </>
  );
}

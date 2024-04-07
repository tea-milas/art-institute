"use client";
import Table from "@/components/Table/Table";
import styles from "./page.module.css";
import ArtworkList from "@/components/ArtworkList/ArtworkList";
import { useData } from "@/hooks/useData";
import { LoadingSpinner } from "@/components/ArtworkInfo/ArtworkInfo.styled";

export default function Home() {
  const { data, error, isLoading } = useData();
  console.log(data);
  if (error !== undefined) return <p>Sorry, there has been an error!</p>;

  return (
    <main className={styles.main}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* <Table data={data} /> */}
          <ArtworkList data={data} />
        </>
      )}
    </main>
  );
}

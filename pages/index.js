import Categories from "@/components/template/Categories";
import SearchBar from "@/components/template/SearchBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <SearchBar />
      <Categories />
    </>
  );
}

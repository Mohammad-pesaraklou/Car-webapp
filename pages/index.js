import Card from "@/components/modules/Card";
import Categories from "@/components/template/Categories";
import SearchBar from "@/components/template/SearchBar";
import carsData from "@/data/carsData";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";

export default function Home() {

  const data = carsData.slice(0,3)

  return (
    <>
      <SearchBar />
      <Categories />
      <Link href={"/"}>
        <button className={styles.allBtn}>See All The Cars</button>
      </Link>
      <div className={styles.cardContainer}>
        {
          data.map(item => (
            <Card key={item.id} {...item} />
          ))
        }
      </div>
    </>
  );
}

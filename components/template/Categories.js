import Link from "next/link";
// styles
import styles from "@/styles/Categories.module.css";
//icons
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/category/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/category/suv">
        <div>
          <p>SUV</p>
          <Suv />
        </div>
      </Link>
      <Link href="/category/hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="/category/sport">
        <div>
          <p>Sport cars</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
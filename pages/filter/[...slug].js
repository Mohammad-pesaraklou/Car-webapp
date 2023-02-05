import { useRouter } from "next/router";
// components
import CarsList from "@/components/modules/CarsList";
// data
import carsData from "@/data/carsData";
// style
import styles from "@/styles/Layout.module.css";

const FilterCard = () => {
  const {
    query: { slug },
  } = useRouter();

  const [min, max] = slug || [];
  
  const filteredData = carsData.filter(
    (car) => car.price > min && car.price < max
  );


  if (!filteredData.length) return <h3 className={styles.notFound}>Ooops...<br />Item NotFound</h3>;

  return <CarsList data={filteredData} />;
};

export default FilterCard;

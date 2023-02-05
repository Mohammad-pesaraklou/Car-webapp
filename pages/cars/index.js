// components
import CarsPage from "@/components/template/CarsPage";
import Categories from "@/components/template/Categories";
import SearchBar from "@/components/template/SearchBar";
// data
import carsData from "@/data/carsData";

const AllCars = () => {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default AllCars;

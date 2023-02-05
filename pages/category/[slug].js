import CarsList from "@/components/modules/CarsList";
import CategoryCard from "@/components/modules/CategoryCard";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = () => {
  const { query } = useRouter();

  const filteredCategory = carsData.filter((car) => car.category == query.slug);


 return <CarsList data={filteredCategory}/>
};

export default CategoryPage;

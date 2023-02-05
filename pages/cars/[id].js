import carsData from "@/data/carsData";
import { useRouter } from "next/router";

import CardsDetails from "@/components/modules/CardsDetails";

const CarsDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const carDetails = carsData[id - 1];
  return <CardsDetails {...carDetails} />;
};

export default CarsDetails;

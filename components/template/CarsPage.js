import React from "react";
// components
import Card from "../modules/Card";
// style
import styles from '../../styles/CarsPage.module.css';
const CarsPage = ({data}) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CarsPage;

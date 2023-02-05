import styles from "@/styles/SearchBar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const router = useRouter();

  const searchHandler = () => {
    if(minPrice & maxPrice){
      router.push(`/filter/${minPrice}/${maxPrice}`)
    }else{
      alert('Please Fill all The Fields')
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input type="text" placeholder="Inter the min price" 
        value={minPrice}
        onChange={e => setMinPrice(e.target.value)}
        />
        <input type="text" placeholder="Inter the max price" 
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default SearchBar;

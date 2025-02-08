import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import Card from './Card.jsx';

const Home = () => {
  const [data, setData] = useState([]);
const[search,setSearch]=useState("");
  useEffect(() => {
    
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': '5eSYW2s0oOysQa5HziHRZsKM9KAJP5mwJ4JxG5goIVE='
  }
};
    fetch("https://openapiv1.coinstats.app/coins",options)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        console.log(data.result);
      });
  }, []);
  const searchHandler=(e)=>{
    setSearch(e.target.value)


 
  }
    
  
  return (
    <>
      <div className={styles.header}>
        <input type="text" placeholder=" Search " onChange={searchHandler} className={styles.search} />
  </div>
      <br />
      <div className={styles.card}>
  {data.length>0 &&
    data.filter((crypto)=>crypto.name.toLowerCase().includes(search.toLowerCase())).map((crypto) => (
      <Card
        name={crypto.id}
        rank={crypto.rank}
        price={crypto.price}
        marketCap={crypto.marketCap}
        icon={crypto.icon}
        key={crypto.rank}
      />
    ))}
</div>

    </>
  );
};

export default Home;

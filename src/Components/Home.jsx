import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import Card from './Card.jsx';

const Home = () => {
  const [data, setData] = useState([]);
const[search,setSearch]=useState("");
  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?slip=0&limit=100")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
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
  {data.coins &&
    data.coins.filter((crypto)=>crypto.name.toLowerCase().includes(search.toLowerCase())).map((crypto) => (
      <Card
        name={crypto.name}
        rank={crypto.rank}
        price={crypto.price}
        marketCap={crypto.marketCap}
        icon={crypto.icon}
        key={crypto.id}
      />
    ))}
</div>

    </>
  );
};

export default Home;

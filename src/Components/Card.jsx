import React from "react";
import styles from './Card.module.css'

const Card = (props) => {
  const { icon, name, rank, price, marketCap } = props;

  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <img className={styles.logo}src={icon} alt="Crypto Icon" />
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p>Rank: {rank}</p>
        <p>Price ($): {price}</p>
        <p>Market Cap: {marketCap}</p>
      </div>
    </div>
    </div>
  );
};

export default Card;

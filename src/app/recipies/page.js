// components/Recipes.js
import React from 'react';
import styles from '@/app/styles/recipes.module.css';
import Image from 'next/image';

const Recipes = () => {
  return (
    <div className={styles.recipesSection}>
      <div className={styles.categories}>
        <h2>Categories</h2>
        <ul>
          <li>
            <h3>Breakfast</h3>
            <p>Start your day right with these healthy and tasty breakfast recipes.</p>
          </li>
          <li>
            <h3>Lunch</h3>
            <p>Find quick and easy lunch ideas for busy days.</p>
          </li>
          <li>
            <h3>Dinner</h3>
            <p>Delicious dinner recipes that the whole family will love.</p>
          </li>
          <li>
            <h3>Snacks</h3>
            <p>Satisfy your cravings with these wholesome snacks.</p>
          </li>
          <li>
            <h3>Desserts</h3>
            <p>Indulge in sweet treats with our selection of desserts.</p>
          </li>
        </ul>
      </div>
      <div className={styles.head}>
      <h1> recipe <span>Preview</span></h1>
      </div>
      


      <div className={styles.recipePreviews}>
        <div className={styles.recipeCard}>
          <Image src="/images/avocado-toast.jpg" alt="Avocado Toast with Poached Eggs " width={400} height={300} />
          <h3>Avocado Toast with Poached Eggs</h3>
          <p>A simple yet satisfying breakfast that’s packed with flavor and nutrients.</p>
        </div>
        <div className={styles.recipeCard}>
          <Image src="/images/grilled-chicken-salad.jpg" alt="Grilled Chicken Salad" width={400} height={300} />
          <h3>Grilled Chicken Salad</h3>
          <p>A light and healthy lunch option that’s perfect for any day of the week.</p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;

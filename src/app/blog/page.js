// components/Articles.js
import styles from '@/app/styles/articles.module.css';

const Articles = () => {
  return (
    <div className={styles.articlesSection}>
      <div className={styles.categories}>
        <h1>Categories</h1>
        <ul>
          <li><h2>Healthy Eating</h2></li>
          <li><h2>Cooking Tips</h2></li>
          <li><h2>Food Trends</h2></li>
          <li><h2>Nutrition Advice</h2></li>
        </ul>
      </div>

      <div className={styles.articlesList}>
        <h2>Articles</h2>
        <div className={styles.articleCard}>
          <h3>Top 10 Superfoods You Should Be Eating</h3>
          <p>Discover the nutrient-packed superfoods that can boost your health and well-being.</p>
        </div>
        <div className={styles.articleCard}>
          <h3>How to Make Healthy Eating a Habit</h3>
          <p>Tips and tricks for incorporating healthier choices into your daily routine.</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;

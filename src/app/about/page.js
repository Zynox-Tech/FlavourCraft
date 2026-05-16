
import styles from '@/app/styles/about.module.css';

const About = () => {
  return (
    <div className={styles.aboutSection}>
      {/* Our Story Section */}
      <div className={styles.ourStory}>
        <h2>Our <span>Story</span></h2>
        <div className={styles.storyContent}>
          <h3>Passion for Food</h3>
          <p>Our love for delicious, healthy food drives us to share recipes and tips that make cooking enjoyable and accessible to everyone.</p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className={styles.meetTheTeam}>
        <h2>Meet the <span>Team</span></h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <h3>Sarah Brown</h3>
            <p>Chef and food blogger with a passion for creating simple, healthy recipes.</p>
          </div>
          <div className={styles.teamMember}>
            <h3>Mark Wilson</h3>
            <p>Nutritionist dedicated to helping people make informed food choices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

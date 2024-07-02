
import Meals from "@/Components/Meals";

import styles from './styles.modules.css';
export const metadata = {
    title: "Next || meal page",
    description: "Meals page",
  };

const MealsPage = () => {
  
    return (
        <div className="p-12">
            <h1 className="text-3xl font-semibold text-cyan-900">Choose Your Meals</h1>
            <p className={styles.text_large}>Choose meals of you choice by searching ......</p>
          <Meals></Meals>
        </div>
    );
};

export default MealsPage;
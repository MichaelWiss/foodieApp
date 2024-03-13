import React from 'react'
import classes from './page.module.css';
import Image from 'next/image';

export default function MealDetailsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image />
        </div>
      </header>
      <main></main>
    </>
    );
}


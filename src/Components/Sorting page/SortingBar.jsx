import React from 'react';
import '../../CSS/Sorting/SortingBar.css';
export default function () {
  return (
    <div class="sort-bar">
      <h3>Sorting</h3>
      <div class="inside-sort-bar">
        <button type="submit" href="/">Home</button>
        <button href="/">Randomize</button>
        <select name="Merge Sort" id="cars">
            <option value="">Quick Sort</option>
            <option value="">Merge Sort</option>
            <option value="">Bubble Sort</option>
            <option value="">Selection Sort</option>
        </select>
      </div>
      <button class="sort-button">Sort</button>
    </div>
  )
}

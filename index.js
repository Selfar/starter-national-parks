

const main = () => {
    const nameSorter = document.querySelector("#name-sorter");
    const ratingSorter = document.querySelector("#rating-sorter");
    
    nameSorter.addEventListener("click", nameSorterClickHandler);
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

window.addEventListener("DOMContentLoaded", main);

const allBtns = document.querySelectorAll(".rate-button");

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;

   if (parkAName < parkBName) {
     return -1;
   } else if (parkAName > parkBName) {
     return 1;
   } else {
     return 0;
   }
};

const sortByRating = (rateA, rateB) => {
  const ratingA = rateA.querySelector(".rating-display .value").innerText;
  const ratingB = rateB.querySelector(".rating-display .value").innerText;
  console.log(ratingA, ratingB)

  if(ratingA > ratingB) {
    return -1;
  } else if(ratingA < ratingB) {
    return 1
  } else {
    return 0;
  }
};

const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByRating);

  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};



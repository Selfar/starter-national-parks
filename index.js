const validateNumber = (value) => {
  return !isNaN(value);
};

const validateRange = (value, min, max) => {
  return value >= min && value <= max;
};

const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const errors = validateForm(formData);
  const errorElements = document.querySelectorAll(".error");

  for (let element of errorElements) {
    element.style.display = "none";
  }

  Object.keys(errors).forEach((key) => {
    const errorElement = document.querySelector(`#${key}-form .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });
};

const validateForm = (formData) => {
  const errors = {};
  const ratingData = formData.get("rating");

  !validateExists(formData.get("name"))
    ? (errors.name = "Please enter a name")
    : null;
  !validateExists(formData.get("description"))
    ? (errors.description = "Please enter a short description")
    : null;
  !validateExists(formData.get("established"))
    ? (errors.established = "Please enter a date")
    : null;
  !validateExists(formData.get("area"))
    ? (errors.area = "Please enter the area of the park")
    : null;
  !validateExists(formData.get("location"))
    ? (errors.location = "Please enter the location of the park")
    : null;

  if (!validateExists(ratingData)) {
    errors.rating = "Please enter a rating";
  } else {
    // Check if the rating is a number
    if (!validateNumber(ratingData)) {
      errors.rating = "Rating must be a number";
    } else {
      // Because it is a number, convert it
      const rating = Number.parseFloat(ratingData);
      // Check that the rating is between 1 and 5, inclusive
      if (!validateRange(rating, 1, 5)) {
        errors.rating = "Rating must be between 1 and 5 inclusive";
      }
    }
  }

  return errors;
};

const validateExists = (value) => {
  return value && value.trim();
};

const main = () => {
  const form = document.querySelector("#park-form");

  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);

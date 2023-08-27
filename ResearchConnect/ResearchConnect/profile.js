const selectedOptions = {};

function updateSelectedOptions(select) {
  for (const option of select.options) {
    if (selectedOptions[select.id]?.includes(option.value)) {
      option.style.backgroundColor = "#007BFF";
      option.style.color = "white";
    } else {
      option.style.backgroundColor = "";
      option.style.color = "";
    }
  }
}

// Apply the function to the interests and hobbies selects
const interestsSelect = document.getElementById("interests");
const hobbiesSelect = document.getElementById("hobbies");

interestsSelect.addEventListener("change", function() {
  selectedOptions[this.id] = Array.from(this.selectedOptions, option => option.value);
  updateSelectedOptions(this);
});

hobbiesSelect.addEventListener("change", function() {
  selectedOptions[this.id] = Array.from(this.selectedOptions, option => option.value);
  updateSelectedOptions(this);
});

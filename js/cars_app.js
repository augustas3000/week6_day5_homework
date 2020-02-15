document.addEventListener('DOMContentLoaded', () => {
  // button functions for dropdown form opening and closing:
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  // on event of click the new car button, show the form
  const newCarBtn = document.getElementById("btn-form-open");
  newCarBtn.addEventListener('click', openForm);
  // on event of click the close button, close the the form
  const closeBtnNewCarForm = document.getElementById("btn-form-close");
  closeBtnNewCarForm.addEventListener('click', closeForm);


// ---------------------------------------------------------------
// ---------------------------------------------------------------
  // submitting the form, updating DOM.
  // function for handling submitted form:
  function handleNewItemFormSubmit(event) {
    event.preventDefault();

    const newCarElement = createNewCarElement(event);

    const carsContainer = document.querySelector('.main__cars-container');
    carsContainer.appendChild(newCarElement);
    event.target.reset();
  }

  // event listener for form submission:
  const form = document.getElementById('add-car-form');
  form.addEventListener('submit', handleNewItemFormSubmit);


  // delete all:
  // delete function:
  function deleteAllItems() {
    const carItemsContainer = document.querySelector('.main__cars-container');
    carItemsContainer.innerHTML = '';
  }
  // select an element in DOM: and attach eventlistener to it
  // on, click, delete all car items
  const deleteButton = document.getElementById('btn-form-delete-all');
  deleteButton.addEventListener('click', deleteAllItems);




  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // Helper functions:
      // create new car element from submitted form
      function createNewCarElement(event) {
        const newCarItem = document.createElement('div');
        newCarItem.className = "main__cars-container-item";
        newCarItem.innerHTML = `
          <div class="model-info">
            <h2>Make: ${event.target.make.value}</h2>
            <h2>Model: ${event.target.model.value}</h2>
            <h2>Year: ${event.target.year.value}</h2>
          </div>

          <div class="img-wrapper">
            <img class ="car-image" src="${event.target.photoURL.value}" alt="car-image">
          </div>
        `;
        return newCarItem;
      }
});

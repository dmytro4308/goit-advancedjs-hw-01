let formData = {
  email: "",
  message: ""
};

const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';

const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    try {
      formData = JSON.parse(savedData);
      refs.feedbackForm.elements.email.value = formData.email || "";
      refs.feedbackForm.elements.message.value = formData.message || "";
    } catch (error) {
      console.error("Error parsing saved data from localStorage:", error);
    }
  }
};

populateForm();

refs.feedbackForm.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

refs.feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  refs.feedbackForm.reset();
  
  formData = {
    email: "",
    message: ""
  };
});
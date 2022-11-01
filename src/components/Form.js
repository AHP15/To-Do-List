import Enter from '../media/enter.png';

const Form = () => {
  const input = document.createElement('input');
  input.placeholder = 'Add to your list...';

  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.classList.add('add-btn');
  const image = document.createElement('img');
  image.src = Enter;
  button.appendChild(image);

  const form = document.createElement('form');
  form.appendChild(input);
  form.appendChild(button);
  return form;
};

export default Form;
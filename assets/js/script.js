const aboutMeLink = document.querySelector('#about-me-link');
const myWorkLink = document.querySelector('#my-work-link');
const aboutMeEl = document.querySelector('#about-me');
const myWorkEl = document.querySelector('#my-work');

aboutMeLink.addEventListener('click', function() {
  console.log('about me');
  aboutMeEl.classList.remove('hidden');
  myWorkEl.classList.add('hidden');
  aboutMeLink.classList.add('underline');
  myWorkLink.classList.remove('underline');
})

myWorkLink.addEventListener('click', function() {
  console.log('my work');
  aboutMeEl.classList.add('hidden');
  myWorkEl.classList.remove('hidden');
  aboutMeLink.classList.remove('underline');
  myWorkLink.classList.add('underline');
})
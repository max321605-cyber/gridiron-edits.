// Minimal interactivity: form faux-submit + nav toggle
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
navToggle && navToggle.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const data = {
      name: fd.get('name'),
      email: fd.get('email'),
      message: fd.get('message')
    };
    // Replace with your email handler / Zapier / Formspree / Netlify forms
    // For now show a friendly message and instruct next step.
    msg.hidden = false;
    msg.textContent = "Thanks — your request was recorded locally. To finish setup, replace this form handler with your email service (Formspree, Zapier, or Netlify Forms).";
    msg.style.padding = '12px';
    msg.style.background = '#071827';
    msg.style.borderRadius = '10px';
    form.reset();
  });
}

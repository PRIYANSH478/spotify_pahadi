
  document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
    const loginModal = document.getElementById('loginModal');
    const closeLogin = document.getElementById('closeLogin');

    loginBtn.addEventListener('click', () => {
      loginModal.style.display = 'flex';
      document.body.classList.add('blurred');
    });

    closeLogin.addEventListener('click', () => {
      loginModal.style.display = 'none';
      document.body.classList.remove('blurred');
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const signinBtn = document.querySelector('.signin-btn');
    const signinModal = document.getElementById('signinModal');
    const closeSignin = document.getElementById('closeSignin');

    signinBtn.addEventListener('click', () => {
      signinModal.style.display = 'flex';
      document.body.classList.add('blurred');
    });

    closeSignin.addEventListener('click', () => {
      signinModal.style.display = 'none';
      document.body.classList.remove('blurred');
    });
  });

  document.getElementById('installBtn').addEventListener('click', function () {
  window.open('https://www.spotify.com/in-en/download/', '_blank');
});


  


 

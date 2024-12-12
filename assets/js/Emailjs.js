  // Initialize EmailJS
  emailjs.init('2UgDSYljk-m1DB8nh'); // Replace with your EmailJS public key

  document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const feedback = document.getElementById('feedback');

    // EmailJS Parameters
    const templateParams = {
      from_fname: fname,
      from_lname: lname,
      from_phone: phone,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send('service_c1uxddw', 'template_1lm0735', templateParams)
      .then(function (response) {
        feedback.innerHTML = '<div class="success">Message sent successfully!</div>';
        document.getElementById('contactForm').reset();
      }, function (error) {
        feedback.innerHTML = '<div class="error">Failed to send message. Please try again.</div>';
        console.error('EmailJS error:', error);
      });
  });
// inbox.js

// Sample email data
const emails = [
    {
      subject: "Privacy Concerns",
      from: "John Doe <############>",
      date: "August 27, 2023",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more email objects here
  ];
  
  // Populate email listings
  const emailsSection = document.querySelector('.emails-section ul');
  
  function populateEmails(emailsData) {
    emailsSection.innerHTML = '';
  
    emailsData.forEach(email => {
      const emailElement = document.createElement('li');
      emailElement.classList.add('email');
      emailElement.innerHTML = `
        <div class="email-icon">
          <img src="email-icon.png" alt="Email Icon">
        </div>
        <div class="email-details">
          <h2>${email.subject}</h2>
          <p>From: ${email.from}</p>
          <p>Date: ${email.date}</p>
          <p>Message: ${email.message}</p>
        </div>
      `;
  
      const replyButton = document.createElement('button');
      replyButton.innerText = 'Reply';
      replyButton.classList.add('reply-button');
      emailElement.appendChild(replyButton);
  
      emailsSection.appendChild(emailElement);
    });
  }
  
  // Initial email population
  populateEmails(emails);
  
  // Add hover effect on emails
  const emailList = document.querySelectorAll('.email');
  
  emailList.forEach(email => {
    email.addEventListener('mouseover', () => {
      email.classList.add('hovered');
    });
  
    email.addEventListener('mouseout', () => {
      email.classList.remove('hovered');
    });
  });
  
  // Sample function to add a new email dynamically
  function addNewEmail(subject, from, date, message) {
    const newEmail = {
      subject: subject,
      from: from,
      date: date,
      message: message,
    };
  
    emails.push(newEmail);
    populateEmails(emails);
  }
  
  // ... (remaining code)
  
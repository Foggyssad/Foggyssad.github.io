document.getElementById('submitButton').addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    // Validation
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (isNaN(phone) || phone.length < 10) {
      alert('Please enter a valid phone number.');
      return;
    }

    const data = { firstName, lastName, email, phone, address, numbers: [num1, num2, num3] };

    console.log(data);

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>First Name: ${data.firstName}</p>
      <p>Last Name: ${data.lastName}</p>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
      <p>Address: ${data.address}</p>
      <p>Numbers: ${data.numbers.join(', ')}</p>
    `;

    // Calculate average
    const average = data.numbers.reduce((a, b) => a + b, 0) / data.numbers.length;
    const averageDiv = document.getElementById('averageResult');
    averageDiv.textContent = `Average: ${average.toFixed(2)}`;

    // Apply color based on average
    averageDiv.className = 'average';
    if (average < 50) {
      averageDiv.classList.add('red');
    } else if (average < 75) {
      averageDiv.classList.add('orange');
    } else {
      averageDiv.classList.add('green');
    }
  });
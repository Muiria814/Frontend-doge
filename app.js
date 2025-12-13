
const API = 'https://backend-doge-1.onrender.com/api';
// se estiver no mesmo projeto Vercel, pode ser apenas: const API = '/api';

async function login() {
  const res = await fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem('token', data.token);
    document.getElementById('auth').style.display = 'none';
    document.getElementById('app').style.display = 'block';
  } else {
    alert(data.message || 'Erro no login');
  }
}

async function register() {
  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: rname.value,
      email: remail.value,
      password: rpassword.value
    })
  });

  const data = await res.json();
  alert(data.message);
}

async function loadSteps() {
  const res = await fetch(`${API}/steps`, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  });

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}

async function withdraw() {
  const res = await fetch(`${API}/withdraw`, {
    method: 'POST',
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  });

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
  }

const API_URL = 'http://localhost:5000/api/auth'; // Update in production

// Register User
async function register() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;

    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    try {
        const res = await fetch($ { API_URL }
            /register, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");

    alert("Registration successful! Redirecting to login.");
    window.location.href = "login.html";
} catch (err) {
    alert("Error: " + err.message);
}
}

// Login User
async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const res = await fetch($ { API_URL }
            /login, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    // Store token + user info
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("points", data.user.points);

    alert("Login successful! Redirecting...");
    window.location.href = "dashboard.html";
} catch (err) {
    alert("Login failed: " + err.message);
}
}

// Logout Function
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
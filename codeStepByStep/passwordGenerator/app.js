document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').innerText = password;
}

function copyPassword() {
    const password = document.getElementById('password').innerText;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    } else {
        alert("No password to copy!");
    }
}
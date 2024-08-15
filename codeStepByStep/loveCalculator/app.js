document.getElementById('calculate').addEventListener('click', function() {
    const yourName = document.getElementById('yourName').value.trim().toLowerCase();
    const partnerName = document.getElementById('partnerName').value.trim().toLowerCase();

    if (yourName === '' || partnerName === '') {
        alert('Please enter both names!');
        return;
    }

    const combinedNames = yourName + partnerName;
    const lovePercentage = calculateLovePercentage(combinedNames);

    document.getElementById('result').textContent = yourName + ' ❤️ ' + partnerName + ' = ' + lovePercentage + '%';
});

function calculateLovePercentage(names) {
    let hash = 0;
    for (let i = 0; i < names.length; i++) {
        hash = names.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; // Convert to 32bit integer
    }
    const percentage = Math.abs(hash) % 100 + 1;
    return percentage;
}
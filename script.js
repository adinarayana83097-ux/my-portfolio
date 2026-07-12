
function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    const selected = document.getElementById(id);
    if (id === 'myself') {
        selected.style.display = 'flex';
    } else {
        selected.style.display = 'block';
    }
}

window.onload = function () {
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
};

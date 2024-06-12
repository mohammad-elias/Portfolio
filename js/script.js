function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const crossIcon = document.getElementById('crossIcon');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdown.classList.toggle('open');
    hamburgerIcon.classList.toggle('hidden');
    crossIcon.classList.toggle('hidden');
}


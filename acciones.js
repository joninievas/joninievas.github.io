
//acción para botón mas info en informacion personal
document.getElementById('info_per').style.display = 'none';
document.getElementById('menos_info_per').style.display = 'none';

document.getElementById('mas_info_per').addEventListener('click', function() {
    document.getElementById('info_per').style.display = 'block';
    document.getElementById('menos_info_per').style.display = 'block';
    document.getElementById('mas_info_per').style.display = 'none';
});

document.getElementById('menos_info_per').addEventListener('click', function() {
    document.getElementById('info_per').style.display = 'none';
    document.getElementById('mas_info_per').style.display = 'block';
    document.getElementById('menos_info_per').style.display = 'none';
});

//acción para botón mas info en experiencia laboral
document.getElementById('info_exp').style.display = 'none';
document.getElementById('menos_info_exp').style.display = 'none';

document.getElementById('mas_info_exp').addEventListener('click', function() {
    document.getElementById('info_exp').style.display = 'block';
    document.getElementById('menos_info_exp').style.display = 'block';
    document.getElementById('mas_info_exp').style.display = 'none';
});

document.getElementById('menos_info_exp').addEventListener('click', function() {
    document.getElementById('info_exp').style.display = 'none';
    document.getElementById('mas_info_exp').style.display = 'block';
    document.getElementById('menos_info_exp').style.display = 'none';
});


//acción para botón mas info en formación académica
document.getElementById('info_for').style.display = 'none';
document.getElementById('menos_info_for').style.display = 'none';

document.getElementById('mas_info_for').addEventListener('click', function() {
    document.getElementById('info_for').style.display = 'block';
    document.getElementById('menos_info_for').style.display = 'block';
    document.getElementById('mas_info_for').style.display = 'none';
});

document.getElementById('menos_info_for').addEventListener('click', function() {
    document.getElementById('info_for').style.display = 'none';
    document.getElementById('mas_info_for').style.display = 'block';
    document.getElementById('menos_info_for').style.display = 'none';
});


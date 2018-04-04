

// using DOM API

// Query DOM
let box = document.querySelector('.alert');
let textBtn = document.querySelector('.btn-success');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');

// Listen for events & update DOM
textBtn.addEventListener('click', function (e) {
    //box.innerHTML = `<h1> hello sapinet </h1>`
    // using XHR/Fetch API
    let url = `http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true`
    let promise = fetch(url);
    promise
        .then(resp => resp.json())
        .then(people => {
            box.innerText=JSON.stringify(people)
        });
});
showBtn.addEventListener('click', function (e) {
    box.style.display = ''
});
hideBtn.addEventListener('click', function (e) {
    box.style.display = 'none'
});
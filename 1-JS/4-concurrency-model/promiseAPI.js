
// swiggy-module
//-----------------------------------------------

let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //console.log('swiggy resolve/reject promise..');
                //reject('boys r bust at moment');
                //return;
                setTimeout(() => {
                    console.log('swiggy resolve/reject promise..');
                    resolve('BIRYANI');
                }, 4000);
            }, 3000);
        });
        return promise;
    }
};

// Bar module
//-----------------------------------------------


let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('resolving/rejecting bar promise');
                resolve('BEER');
                //reject('No Beer');
            }, 2000);
        });
        return promise;
    }
};

//-----------------------------------------------



// Person module
//------------------------------------------------

let person = {
    doWork: function () {
        console.log('person working....feels hungry');
        console.log('requesting food on swiggy');
        let promise1 = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise, defer my actions to future');
        Promise.race([promise1, promise2]).then((result) => {
            console.log('yummy ' + result);
        }, (error) => {
            console.log('oops ' + error);
        });
        console.log('person cont.. further work.... end');
    }
};

//------------------------------------------------

person.doWork();
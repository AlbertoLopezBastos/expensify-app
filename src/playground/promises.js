const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('nice');
        //reject('error');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise');
            //reject('error');
        }, 3000);
    });
    ;
}).then((data) => {
    console.log('this runs too', data);
}).catch(error => console.log(error));

console.log('after');
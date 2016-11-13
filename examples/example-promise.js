const getTempCallback = (location, callback) => {
  callback(undefined, 25);
  callback('City not found');
};

getTempCallback('Kiev', (err, temp) => {
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

const getTempPromise = (location) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(26);
      reject('City not found');
    }, 1500);
  });
};

getTempPromise('Kiev').then((temp) => {
  console.log('promise success', temp);
}, (err) => {
  console.log('promise error', err);
});

const addPromise = (numOne, numTwo) => {
  return new Promise((resolve, reject) => {
    if(typeof numOne === 'number' && typeof numTwo === 'number') {
      const sum = numOne + numTwo;
      resolve(sum);
    }
    reject('numOne and numTwo have to be numbers!');
  });
};

addPromise(2, 3).then(sum => {console.log('sum is', sum);
}, err => {console.log('error:', err);
});

addPromise('2', 3).then(sum => {console.log('sum is', sum);
}, err => {console.log('error:', err);
});

addPromise('2', '3').then(sum => {console.log('sum is', sum);
}, err => {console.log('error:', err);
});

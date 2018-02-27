var test = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

const re = (acc, curr) => acc + curr;
        var r = test.reduce(re);
        console.log(r);

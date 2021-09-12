// const arrmutzarim = ["egg", "milk", "cheeze"];
  // const arrmechirim = [3, 7, 5];
  // const arrbuy = ["milk", "milk", "cheeze", "egg", "egg"];
  // const arrbuymechirim = [7, 7, 10, 3, 4];
  // const objBuy = {};
  // const wongPay = {};

  // const wongPayCalculate = (
  //   arrmutzarim,
  //   arrmechirim,
  //   arrbuy,
  //   arrbuymechirim
  // ) => {
  //   for (let i = 0; i < arrbuy.length; i++) {
  //     if (objBuy[arrbuy[i]] === undefined)
  //       objBuy[arrbuy[i]] = { paid: arrbuymechirim[i], count: 1 };
  //     else {
  //       objBuy[arrbuy[i]].paid += arrbuymechirim[i];
  //       objBuy[arrbuy[i]].count++;
  //     }
  //   }
  //   for (let j = 0; j < arrmutzarim.length; j++) {
  //     const truePaid = objBuy[arrmutzarim[j]].count * arrmechirim[j];
  //     if (objBuy[arrmutzarim[j]].paid !== truePaid)
  //       wongPay[arrmutzarim[j]] = objBuy[arrmutzarim[j]].paid - truePaid;
  //   }
  //   return wongPay;
  // };

  // const ggg = () => {
  //   var options = {
  //     host: 'jsonmock.hackerrank.com',
  //     path: '/api/articles?author=epaga&page=epaga',
  //     method: 'GET'
  //   };
  //   fetch('https://jsonmock.hackerrank.com/api/articles?author=epaga&page=epaga')
  //   .then(response => response.json())
  //     .then(data => {
  //       debugger;
  //       console.log(data)
  //     });
  //   debugger;
  //  http.request(options,callback);

  // };
  // wongPayCalculate(arrmutzarim, arrmechirim, arrbuy, arrbuymechirim);
  // ggg();
  // https://jsonmock.hackerrank.com/api/articles?author=epaga&page=epaga
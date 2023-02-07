const nayok = {
  name : 'Shakib khan',
  id : 121, 
  address: 'movie cinema',
  isSingle : true,
  friends : ['Opu', 'Bubli', 'Puja', 'Raj'],
  movies : [{name: 'No. 1', year: 2015}, {name: 'King Khan', year: 2018}],
  act: function(){
    console.log('Object er vitore function o thakte pare!!!')
  },
  car : {
    brand: 'tesla',
    price: 5000000,
    made: 2024, 
    manufacturer: {
      name: 'tesla',
      Ceo: 'Elon Musk',
      country: 'USA'
    }
  }
}

// console.log(student.car);
// console.log(nayok.act);
nayok.act();
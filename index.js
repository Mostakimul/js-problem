const persons = [
  {
    name: 'Mr Rashed',
    birthYear: 1999,
    currentYear: 2022,
    district: 'Dhaka',
    postNo: 1200,
    priority: 2,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Rajshahi',
    postNo: 1211,
    priority: 1,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Laximipur',
    postNo: 1211,
    priority: 2,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Moheshkhali',
    postNo: 1211,
    priority: 1,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Rangpur',
    postNo: 1211,
    priority: 1,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Natore',
    postNo: 1211,
    priority: 2,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Cumilla',
    postNo: 1211,
    priority: 1,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Shylet',
    postNo: 1211,
    priority: 2,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Khulna',
    postNo: 1211,
    priority: 1,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Chitagong',
    postNo: 1211,
    priority: 1,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Noakhali',
    postNo: 1211,
    priority: 2,
  },
];

const singleCard = (item, index) => {
  const firstTwoDistrict = item.district.slice(0, 2).toUpperCase();
  const lastTwoCurrentYear = item.currentYear.toString().slice(-2);
  const firstTwoPostCode = item.postNo.toString().slice(0, 2);
  const birthDate = item.birthYear.toString();

  const serialNuber = (index + 1).toString().padStart(6, 0);

  const cardNumber =
    firstTwoDistrict +
    lastTwoCurrentYear +
    firstTwoPostCode +
    birthDate +
    serialNuber;

  return {
    cardNumber: cardNumber,
    gift: parseInt(cardNumber.slice(-2)) % 2 === 0 ? 'R' : 'W',
    priority: item.priority,
  };
};

const cardDistribution = (persons) => {
  const cards = persons
    .map((person, index) => {
      return singleCard(person, index);
    })
    .sort((a, b) => {
      let aFirstChar = a.cardNumber.slice(0, 1);
      let bFirstChar = b.cardNumber.slice(0, 1);

      if (aFirstChar > bFirstChar) {
        if (a.priority >= b.priority) {
          return 1;
        } else {
          return -1;
        }
      }

      if (aFirstChar < bFirstChar) {
        if (a.priority <= b.priority) {
          return -1;
        } else {
          return 1;
        }
      }

      return 0;
    });

  return cards;
};

const output = cardDistribution(persons);
console.log(output);

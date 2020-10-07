let family = {
  son1:"John ",
  son2 : "Jack ",
  son3  : "David <br/>",
  //1st family
  John: {
    parent: "Alex ",
    son1: "Chris <br/>",
    Chris: {
      parent : "Chris",
      son1: " Ali ",
      son2: "Karim <br/>",
    },
    son2: "Alex <br/>",
    Alex: {
      son1: "John <br/>",
      John: {
        son1: "Ali <br/>",
        Ali: {
          son1: "Suleiman <br/>",
          Suleiman: {
            son1: "Kareem ",
            son2: "Raheem <br/>",
            Raheem: {
              son1: "Nadeem ",
              son2: "Kaleem <br/>",
              Kaleem: {
                son1: "Amir ",
                son2: "Liaqat <br/>",
              },
            },
          },
          son2: "Usman <br/>",
          son3: "Salman <br/>",
          son4: "Javed <br/>",
        },
        son2: "Jack <br/>",
      },
      son2: "Alex <br/>",
      son3: "Garret <br/>",
      son4: "Wood <br/>",
      Wood: {
        son1: "Chris <br/>",
        son2: "Roy <br/>",
        son3: "Max <br/>",
        Max: {
          son1: "Usman <br/>",
          son2: "Salman <br/>",
          son3: "Javed <br/>",
          son4: "Mark <br/>",
          son5: "Alex <br/>",
        },
        son4: "Nova <br/>",
        son5: "Root <br/>",
        son6: "Mark <br/>",
        Mark: {
          son1: "Morgan <br/>",
          son2: "Watson <br/>",
        },
      },
      son5: "Hales <br/>",
    },
  },
  // family number 2
  Jack: {
    son1: "Kevin <br/>",
    son2: "DerekWood <br/>",
  },
  // family number 3
  David: {
    son1: "Kegan <br/>",
    Kegan: {
      son1: "Alex <br/>",
      Alex: {
        son1: "Jackma <br/>",
        Jackma: {
          son1: "Kevin <br/>",
          son2: "Derek <br/>",
          son3: "Trump <br/>",
          son4: "Obama <br/>",
          son5: "Bush <br/>",
        },
        son2: "Bill <br/>",
        Bill: {
          son1: "Robert <br/>",
          son2: "John <br/>",
        },
      },
    },
  }
};

console.log(family);


//1st task
family.Jack.son2 = "DerekKhan";
//2nd task
family.David.Kegan.Alex.Jackma.son3 = "Donald Trump";
//3rd task
delete family.David.Kegan.Alex.Jackma.son1;
delete family.David.Kegan.Alex.Jackma.son2;
//4thth task
document.write(`${family.John.Alex.John.Ali.Suleiman.son1}<br/>`);
document.write(`${family.John.Alex.John.Ali.Suleiman.son2}<br/>`);
//5th task
// for family number 1
function printValues(obj) {
  for (var key in obj) {
    if (typeof obj[key] != "object") {
      document.write(obj[key]);

    } else {
      printValues(obj[key]);
    }
  }
}
printValues(family)


  // Task 1 - Convert Above family structure to Javascript Object
  //     Notes: Extend each family with members.
  //     Notes: Write name of each son in its object.
  // Task 2 - Change name of DerekWood to DerekKhan.
  // Task 3 - Change name Trump to Donald Trump
  // Task 4 - Remove two sons from Jackma.
  // Task 5 - Print names of Suleiman sons.
  // Task 6 - Print all of family into Document using document.write.

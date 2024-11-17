var tablica = [
    {
      Nr: 1,
      Marka: "Renault",
      Model: "Megane"
    },
    {
      Nr: 2,
      Marka: "Renault",
      Model: "Captur"
    },
    {
      Nr: 3,
      Marka: "Peugeot",
      Model: "307"
    },
    {
      Nr: 4,
      Marka: "Peugeot",
      Model: "408"
    }
  ];
  
  console.log(tablica);
    
function wyswietlDane() {
    tablica.forEach(samochod => {
      for (let n in samochod) {
        console.log(n, "-",samochod[n]);
      }
    });
  }
  
  window.wyswietlDane = wyswietlDane;
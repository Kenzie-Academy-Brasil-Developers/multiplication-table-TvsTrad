function multiTable(n) {
    let x = [];
    let y = []
    for (let i = 0; i <= n; i++) {
      x[i] = [];
        for (let j = 0 ; j<= n ; j++){
            y[j]= j*i
            x[i].push(y[j])
        }
        
    }
    console.table(x);
    
  }

  function multiTable2(n, m) {
    let x = [];
    let y = []
    for (let i = 0; i <= n; i++) {
      x[i] = [];
        for (let j = 0 ; j<= m ; j++){
            y[j]= j*i
            x[i].push(y[j])
        }
        
    }
    console.table(x);
    
  }

  
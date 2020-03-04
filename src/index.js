module.exports = function toReadable (number) {
    let arr = number.toString().split('');
    let unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine'],
        doubleUnit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        dozen = ['','','twenty','thirty','forty', 'fifty', 'sixty','seventy','eighty','ninety'];
    let res = '';
    if (arr.length == 1) {
        for (let i in unit) {
        if(parseInt(arr[0]) == i) return unit[i];
        }
      }
      
      if (arr.length == 2) {
          if (arr[0] == 1 && arr[1] == 0) return 'ten';
        if (arr[1] == 0) {
            for (let k in dozen) {
            if(parseInt(arr[0]) == k) return dozen[k]; }
          } 
          if (arr[0] == 1 && arr[1] !== 0)  {
            for (let j in doubleUnit) {
            if(parseInt(arr[1]) == j) return doubleUnit[j]; }
          } 
          
        else { 
          for (let k in dozen) {
            if (parseInt(arr[0]) == k) res += dozen[k];
          }
          for (let i in unit) {
            if (parseInt(arr[1]) == i) res = res + ' ' + unit[i];
          }
          return res;
        }
      }
      
      if (arr.length == 3) {
          
        if (arr[1] == 1 && arr[2] == 0) {
          for (let i in unit) {
          if(parseInt(arr[0]) == i) return unit[i] + ' '+ 'hundred ten';
        }
      }
        if (arr[1] == 0 && arr[2] == 0&& arr[1] !== 1  ) {
        for (let i in unit) {
          if(parseInt(arr[0]) == i) return unit[i] + ' '+ 'hundred';
        }
        }
        
        if (arr[1] == 0 && arr[2] !== 0) {
          for (let i in unit) {
          if(parseInt(arr[0]) == i) res = unit[i] + ' '+ 'hundred';
              }
              for (let i in unit) {
          if(parseInt(arr[2]) == i) res = res + ' ' + unit[i];
              }
              return res;
            }
        
            if (arr[1] !== 0, 1 && arr[2] == 0 ) {
              for (let i in unit) {
            if(parseInt(arr[0]) == i) res = unit[i] + ' '+ 'hundred'   }
            for (let k in dozen)  {
              if(parseInt(arr[1]) == k) res = res + ' ' + dozen [k]; }
              return res;
            }
           
            if (arr[1] == 1) {
                 
                 for (let i in unit) {
            if(parseInt(arr[0]) == i) res = unit[i] + ' '+ 'hundred'   }
            for (let j in doubleUnit)  {
              if(parseInt(arr[2]) == j) res = res + ' ' + doubleUnit [j]; }
              return res;
            }
          
      
            
            
        else {
          for (let i in unit) {
            if(parseInt(arr[0]) == i) res = unit[i] + ' '+ 'hundred' ;  }
            for (let k in dozen) {
            if(parseInt(arr[1]) == k) res = res + ' ' + dozen[k]; }
            for (let i in unit) {
            if(parseInt(arr[2]) == i) res = res + ' ' + unit[i];  }
            return res;
        }
            }
      
      
      
      
      else return 'Enter number less then 999';
      }
      
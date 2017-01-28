function to_roman_old(n) {
  var yy = n.toString().length;
  var arr2 = n.toString().split("");
  var result = [];



  if(yy == 2 || yy == 1)
  {
    var stringI = "I";
    var res1 = "";
    var res2 = "";
    var z = 0;

    var toString = n.toString();
  if (toString.length == 1) {
    if (n < 5) {
      for (var j = 0; j < n; j++) {
        res1 += stringI;
      }
      return res1;
    }
    else {
      z = n - 5;
      for (var k = 0; k < z; k++) {
        res1 += stringI;
      }
      res2 = "V" + res1;
      return res2;
    }
  }

  if (toString.length == 2) {
    if (toString[0] == "1") {
      z = n - 10;
    }
    if (toString[0] == "2") {
      z = n - 20;
    }
    if (toString[0] == "3") {
      z = n - 30;
    }
    if (toString[0] == "4") {
      z = n - 40;
    }
    if (toString[0] == "5") {
      z = n - 50;
    }
    if (toString[0] == "6") {
      z = n - 60;
    }
    if (toString[0] == "7") {
      z = n - 70;
    }
    if (toString[0] == "8") {
      z = n - 80;
    }
    if (toString[0] == "9") {
      z = n - 90;
    }
    if (z < 5) {
      for (var l = 0; l < z; l++) {
        res1 += stringI;
      }
      if (toString[0] == "1") {
        res2 = "X" + res1;
        return res2;
      }
      if (toString[0] == "2") {
        res2 = "XX" + res1;
        return res2;
      }
      if (toString[0] == "3") {
        res2 = "XXX" + res1;
        return res2;
      }
      if (toString[0] == "4") {
        res2 = "XXXX" + res1;
        return res2;
      }
      if (toString[0] == "5") {
        res2 = "L" + res1;
        return res2;
      }
      if (toString[0] == "6") {
        res2 = "LX" + res1;
        return res2;
      }
      if (toString[0] == "7") {
        res2 = "LXX" + res1;
        return res2;
      }
      if (toString[0] == "8") {
        res2 = "LXXX" + res1;
        return res2;
      }
      if (toString[0] == "9") {
        res2 = "LXXXX" + res1;
        return res2;
      }
    }
    else {
      if (toString[0] == "1") {
      z = n - 15;
      }
      if (toString[0] == "2") {
      z = n - 25;
      }
      if (toString[0] == "3") {
      z = n - 35;
      }
      if (toString[0] == "4") {
      z = n - 45;
      }
      if (toString[0] == "5") {
      z = n - 55;
      }
      if (toString[0] == "6") {
      z = n - 65;
      }
      if (toString[0] == "7") {
      z = n - 75;
      }
      if (toString[0] == "8") {
      z = n - 85;
      }
      if (toString[0] == "9") {
      z = n - 95;
      }
      for (var m = 0; m < z; m++) {
        res1 += stringI;
      }
      if (toString[0] == "1") {
        res2 = "XV" + res1;
        return res2;
      }
      if (toString[0] == "2") {
        res2 = "XXV" + res1;
        return res2;
      }
      if (toString[0] == "3") {
        res2 = "XXXV" + res1;
        return res2;
      }
      if (toString[0] == "4") {
        res2 = "XXXXV" + res1;
        return res2;
      }
      if (toString[0] == "5") {
        res2 = "LV" + res1;
        return res2;
      }
      if (toString[0] == "6") {
        res2 = "LXV" + res1;
        return res2;
      }
      if (toString[0] == "7") {
        res2 = "LXXV" + res1;
        return res2;
      }
      if (toString[0] == "8") {
        res2 = "LXXXV" + res1;
        return res2;
      }
      if (toString[0] == "9") {
        res2 = "LXXXXV" + res1;
        return res2;
      }
    }
  }


  }//end of length == 2

  if(yy == 4)
    {
      for(var q = 0;q < arr2[0];q++)
        {
              result.push("M");
        }

       if(arr2[1] === 5)
                 {
                   result.push("D");
                 }else{

                   if(arr2[1] < 5)
                   {
                     if(arr2[1] === "0")
                       {
                         result.push("");
                       }else{

                         if(arr2[1] === "4")
                           {
                             result.push("CD");
                           }else{

                                  for(var m = 0;m < arr2[1];m++)
                                   {
                                      result.push("C");
                                   }

                               }
                       }

                   }else{
                     if(arr2[1] === "9")
                       {
                         result.push("CM");
                       }else{
                           result.push("D");
                       var hasilkurang2 = arr2[1] - 5;
                       for(var z = 0;z < hasilkurang2 ;z++)
                     {
                      result.push("C");
                       }

                       }

                     }
                 }

       if(arr2[2] === 5)
                  {
                   result.push("L");
                 }else{

                   if(arr2[2] < 5)
                   {

                     if(arr2[2] === "0")
                       {
                         result.push("");
                       }else{

                           if(arr2[2] === "4")
                             {
                               result.push("XL")
                             }else{

                                for(var c = 0;c < arr2[2];c++)
                                 {
                                    result.push("X");
                                 }

                             }
                       }

                   }else{
                       if(arr2[2]=== "9")
                         {
                           result.push("XC");
                         }else{
                           result.push("L");
                       var hasilkurang4 = arr2[2] - 5;
                       for(var d = 0;d < hasilkurang4 ;d++)
                     {
                      result.push("X");
                       }
                         }

                     }

       if(arr2[3] === "5")
         {
           result.push("V");
         }
          else if(arr2[3] > 5)
               {
                 if(arr2[3] === "9")
                   {
                     result.push("IX");
                   }else{

                 result.push("V");
                 var t = arr2[3] - 5;

                   for(var u = 0; u < t;u++)
                     {
                       result.push("I");
                     }
                   }


               }else{
                       if(arr2[3] === "0")
                         {
                           result.push("");

                         }else{

                             if(arr2[3] === "4")
                               {
                                 result.push("IV");
                               }else{
                                  for(var a = 0;a < arr2[3];a++)
                                   {
                                      result.push("I");
                                   }
                               }
                         }
               }
       }


    }
    return result.join("");

}


function to_roman(n){

    var y = n.toString().length;
    var arr = n.toString().split("");
    var result = [];

    if(y == 2 || y == 1)
    {
      var stringI = "I";
var res1 = "";
var res2 = "";
var z = 0;


var toString = n.toString();
if (toString.length == 1) {
  if (n < 4) {
    for (var j = 0; j < n; j++) {
      res1 += stringI;
    }
    return res1;
  }
  if (n == 4) {
    res1 = "IV";
    return res1;
  }
  if (n == 9) {
    res1 = "IX";
    return res1;
  }
  else {
    z = n - 5;
    if (z < 4) {
    for (var p = 0; p < z; p++) {
      res1 += stringI;
    }
    return res1;
    }
    if (z == 4) {
      res1 = "IV";
      return res1;
    }
    if (z == 9) {
      res1 = "IX";
      return res1;
    }


    res2 = "V" + res1;
    return res2;
  }
}

if (toString.length == 2) {
  if (toString[0] == "1") {
    z = n - 10;
  }
  if (toString[0] == "2") {
    z = n - 20;
  }
  if (toString[0] == "3") {
    z = n - 30;
  }
  if (toString[0] == "4") {
    z = n - 40;
  }
  if (toString[0] == "5") {
    z = n - 50;
  }
  if (toString[0] == "6") {
    z = n - 60;
  }
  if (toString[0] == "7") {
    z = n - 70;
  }
  if (toString[0] == "8") {
    z = n - 80;
  }
  if (toString[0] == "9") {
    z = n - 90;
  }

  if (z < 4) {
    for (var t = 0; t < z; t++) {
      res1 += stringI;
    }
  }
  if (z == 4) {
    res1 = "IV";
  }
  if (z == 9) {
    res1 = "IX";
  }


    if (toString[0] == "1") {
      res2 = "X" + res1;
      return res2;
    }
    if (toString[0] == "2") {
      res2 = "XX" + res1;
      return res2;
    }
    if (toString[0] == "3") {
      res2 = "XXX" + res1;
      return res2;
    }
    if (toString[0] == "4") {
      res2 = "XXXX" + res1;
      return res2;
    }
    if (toString[0] == "5") {
      res2 = "L" + res1;
      return res2;
    }
    if (toString[0] == "6") {
      res2 = "LX" + res1;
      return res2;
    }
    if (toString[0] == "7") {
      res2 = "LXX" + res1;
      return res2;
    }
    if (toString[0] == "8") {
      res2 = "LXXX" + res1;
      return res2;
    }
    if (toString[0] == "9") {
      res2 = "LXXXX" + res1;
      return res2;
    }

  else {
    if (toString[0] == "1") {
    z = n - 15;
    }
    if (toString[0] == "2") {
    z = n - 25;
    }
    if (toString[0] == "3") {
    z = n - 35;
    }
    if (toString[0] == "4") {
    z = n - 45;
    }
    if (toString[0] == "5") {
    z = n - 55;
    }
    if (toString[0] == "6") {
    z = n - 65;
    }
    if (toString[0] == "7") {
    z = n - 75;
    }
    if (toString[0] == "8") {
    z = n - 85;
    }
    if (toString[0] == "9") {
    z = n - 95;
    }

    for (var m = 0; m < z; m++) {
      res1 += stringI;
    }

//       if (z < 4) {
//         for (var tt = 0; tt < z; tt++) {
//           res1 += stringI;
//         }
//       }
//       if (z == 4) {
//         res1 = "IV";
//       }
//       if (z == 9) {
//         res1 = "IX";
//       }

    if (toString[0] == "1") {
      res2 = "XV" + res1;
      return res2;
    }
    if (toString[0] == "2") {
      res2 = "XXV" + res1;
      return res2;
    }
    if (toString[0] == "3") {
      res2 = "XXXV" + res1;
      return res2;
    }
    if (toString[0] == "4") {
      res2 = "XXXXV" + res1;
      return res2;
    }
    if (toString[0] == "5") {
      res2 = "LV" + res1;
      return res2;
    }
    if (toString[0] == "6") {
      res2 = "LXV" + res1;
      return res2;
    }
    if (toString[0] == "7") {
      res2 = "LXXV" + res1;
      return res2;
    }
    if (toString[0] == "8") {
      res2 = "LXXXV" + res1;
      return res2;
    }
    if (toString[0] == "9") {
      res2 = "LXXXXV" + res1;
      return res2;
    }
  }
}


    }//end of length == 2

    if(y == 4)
      {
       for(var q = 0;q < arr[0];q++)
         {
               result.push("M");
         }

        if(arr[1] === 5)
                  {
                    result.push("D");
                  }else{

                    if(arr[1] < 5)
                    {
                      if(arr[1] === "0")
                        {
                          result.push("");
                        }else{

                          if(arr[1] === "4")
                            {
                              result.push("CD");
                            }else{

                                   for(var m = 0;m < arr[1];m++)
                                    {
                                       result.push("C");
                                    }

                                }
                        }

                    }else{
                      if(arr[1] === "9")
                        {
                          result.push("CM");
                        }else{
                            result.push("D");
                        var hasilkurang2 = arr[1] - 5;
                        for(var z = 0;z < hasilkurang2 ;z++)
                      {
                       result.push("C");
                        }

                        }

                      }
                  }

        if(arr[2] === 5)
                   {
                    result.push("L");
                  }else{

                    if(arr[2] < 5)
                    {

                      if(arr[2] === "0")
                        {
                          result.push("");
                        }else{

                            if(arr[2] === "4")
                              {
                                result.push("XL")
                              }else{

                                 for(var c = 0;c < arr[2];c++)
                                  {
                                     result.push("X");
                                  }

                              }
                        }

                    }else{
                        if(arr[2]=== "9")
                          {
                            result.push("XC");
                          }else{
                            result.push("L");
                        var hasilkurang4 = arr[2] - 5;
                        for(var d = 0;d < hasilkurang4 ;d++)
                      {
                       result.push("X");
                        }
                          }

                      }

        if(arr[3] === "5")
          {
            result.push("V");
          }
           else if(arr[3] > 5)
                {
                  if(arr[3] === "9")
                    {
                      result.push("IX");
                    }else{

                  result.push("V");
                  var t = arr[3] - 5;

                    for(var u = 0; u < t;u++)
                      {
                        result.push("I");
                      }
                    }


                }else{
                        if(arr[3] === "0")
                          {
                            result.push("");

                          }else{

                              if(arr[3] === "4")
                                {
                                  result.push("IV");
                                }else{
                                   for(var a = 0;a < arr[3];a++)
                                    {
                                       result.push("I");
                                    }
                                }
                          }
                }
        }


      }
      return result.join("");
}


console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));

console.log("My totally sweet testing script for OLD roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCDLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

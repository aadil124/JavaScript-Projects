// var rows= prompt("please enter number");
// pattern();
// function pattern(){
//     for (let i = 1; i <= rows; i++) {
//          for (let j= 1; j<=i; j++) {
//             document.write("*");
//          }
//          document.write("<br>");
//     }
//     for (let i = rows; i>=1; i--) {
//         for (let j= 1; j<=i; j++) {
//            document.write("*");
//         }
//         document.write("<br>");
//    }


// }

// var rows= prompt("please enter number");
// pattern();
// function pattern(){
//     for (let i = 1; i <= rows; i++) {
//          for (let j= 1; j<=i; j++) {
//             document.write(i);
//          }
//          document.write("<br>");
//     }
//     for (let i = rows-1; i>=1; i--) {
//         for (let j= 1; j<=i; j++) {
//            document.write(i);
//         }
//         document.write("<br>");
//    }


// }

// var rows= prompt("please enter number");
// pattern();
// function pattern(){
//     for (let i = 1; i <= rows; i++) {
//          for (let j= 1; j<=i; j++) {
//             document.write(" "+ i*i +" ");
//          }
//          document.write("<br>");
//     }
//     for (let i = rows-1; i>=1; i--) {
//         for (let j= 1; j<=i; j++) {
//            document.write(" "+ i*i +" ");
//         }
//         document.write("<br>");
//    }


// }

var rows= prompt("please enter number");
pattern();
function pattern(){
    for (let i = 1; i <= rows; i++) {
         for (let j= 1; j<=i; j++) {
            document.write(j);
         }
         document.write("<br>");
    }
    for (let i = rows-1; i>=1; i--) {
        for (let j= 1; j<=i; j++) {
           document.write(j*2);
        }
        document.write("<br>");
   }

}
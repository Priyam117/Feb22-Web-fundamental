function printFibo(n){
            var a = 0;
            var b = 1;
            console.log(a);
            console.log(b);
             var count = 2
             for ( var i = 1; true; i++){
               var  c = a+b
               console.log (c)
               count = count + 1;
                a=b
                b=c
                if ( count <=n)
                 continue 
                 else if( count > n){
                     break
                 } 
            }
    }
    printFibo(5)
var buttons= document.getElementsByClassName('buttons');
var display= document.getElementsByClassName('console')[0];
    var op1=0;
var op2=null;
var operator=null;

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click', function()
    {
         var value=this.getAttribute('data-value');

         if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')
         {
             operator=value;
             op1=Number(display.innerText);
             display.innerText+=value;

           

            // operator=value;
            // op1=Number(display.innerText);
            // display.innerText+=value;   //this will display the operator
            // display.innerText="";

         }
         else if(value=='AC')
         {
             display.innerText="";
         }
         else if(value=='=')

         {
             op2=Number(display.innerText);
             display.innerText=eval(display.innerText); //easy 


            //  if(operator=="+"){
            //      const v1 = display.innerText.split("+")[0];
            //      const v2 = display.innerText.split("+")[1];
            //      display.innerText=Number(v1)+Number(v2);   
            //  }
            

            //  else if(operator=="*")
            // {
            //     const v1 = display.innerText.split("*")[0];
            //     const v2 = display.innerText.split("*")[1];
            //     display.innerText=Number(v1)*Number(v2);   
            // }

            //  else if(operator=="-")
            //  display.innerText=op1-op2;

            //  else if(operator=="/")
            //  display.innerText=op1/op2; 




         }
         else{
             //numeric
             
             display.innerText+=value;

            
         }

    }
    
    
    );

}
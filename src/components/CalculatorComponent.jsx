import React from 'react'

function CalculatorComponent() {
    function one(){
        document.getElementById("textboxid").value+="1";
    }
    function two(){
        document.getElementById("textboxid").value+="2";
    }
    function three(){
        document.getElementById("textboxid").value+="3";
    }
    function four(){
        document.getElementById("textboxid").value+="4";
    }
    function five(){
        document.getElementById("textboxid").value+="5";
    }
    function six(){
        document.getElementById("textboxid").value+="6";
    }
    function seven(){
        document.getElementById("textboxid").value+="7";
    }
    function eight(){
        document.getElementById("textboxid").value+="8";
    }
    function nine(){
        document.getElementById("textboxid").value+="9";
    }
    function zero(){
        document.getElementById("textboxid").value+="0";
    }
    function dot(){
        document.getElementById("textboxid").value+=".";
    }
    function add(){
        
        document.getElementById("textboxid").value+="+";
    }
    function sub(){
        
        document.getElementById("textboxid").value+="-";
    }   
    function prod(){
        
        document.getElementById("textboxid").value+="*";
    }
    function div(){
        
        document.getElementById("textboxid").value+="/";
    }
    function equal(){
        var a = document.getElementById("textboxid").value;
        var b = eval(a);
        document.getElementById("textboxid").value=b;
    }
  return (
    <React.Fragment>
    <form>
        <input type="text" placeholder='Enter the value' className="textbox" id="textboxid"/><br/>
        <div class="butt">
        <input type="button" value="1 " onClick={one}/>
        <input type="button" value="2" onClick={two}/>
        <input type="button" value="3" onClick={three}/>
        <input type="button" value="+" onClick={add}/><br/>
        <input type="button" value="4 " onClick={four}/>
        <input type="button" value="5" onClick={five}/>
        <input type="button" value="6" onClick={six}/>
        <input type="button" value="-" onClick={sub}/><br/>
        <input type="button" value="7 " onClick={seven}/>
        <input type="button" value="8" onClick={eight}/>
        <input type="button" value="9" onClick={nine}/>
        <input type="button" value="*" onClick={prod}/><br/>
        <input type="button" value="/ " onClick={div}/>
        <input type="button" value="0 " onClick={zero}/>
        <input type="button" value=". " onClick={dot}/>
        <input type="button" value="=" onClick={equal}/><br/>
        <input type="reset" className='clear' value="C"/>
        </div>
    </form>
    </React.Fragment>
  )
}

export default CalculatorComponent
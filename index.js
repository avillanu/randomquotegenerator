function randomColor(){
  var red = Math.floor(Math.random() *256);
  var green = Math.floor(Math.random() *256);
  var blue = Math.floor(Math.random() *256);
  var rColor =  "rgb(" + red + ", " + green + ", " + blue + ")";
  return rColor;
}


$("#quote-box").css("background-color","white");
 $( function() {
$( "#new-quote" ).on( "click", function() {
    var newRandomColor = randomColor();
    $("body").animate({backgroundColor: newRandomColor},500);
    $("#new-quote").animate({backgroundColor: newRandomColor},500);
    $("#twitter-button").animate({backgroundColor: newRandomColor},500);
  
})
 } );




class QuoteGen extends React.Component {
  constructor(props){
   super(props);
    this.state={
      quotes:[['Our greatest glory is not in never falling, but in rising every time we fall.','Confucius'],
              ['All our dreams can come true, if we have the courage to pursue them','Walt Disney'],
              ['It does not matter how slowly you go as long as you do not stop.','Confucius'],
              ['Everything you’ve ever wanted is on the other side of fear.','George Addair'],
              ['Success is not final, failure is not fatal: it is the courage to continue that counts.','Winston Churchill'],
              ['Hardships often prepare ordinary people for an extraordinary destiny.','C.S. Lewis'],
              ['Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.','Roy T. Bennett'],
              ['I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.','Nelson Mandela']],
      index: 0   
    }
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange (event) {
      this.setState({index: Math.floor(Math.random() * 8) }) ;
  //    $("#new-quote").css("background-color","#515151");
 
        
    //  $("#quote-box").css("background-color","orange");
    }
render() {
    return ( <div>
     
    <div id="text">   <i class="fas fa-quote-left"></i>
        {this.state.quotes[this.state.index][0]}
        </div>
        <span> < br/></span>
        
        <div id="author">{this.state.quotes[this.state.index][1]} </div>
        
        <span> < br/></span><span> < br/></span><span> < br/></span>
        <span> < br/></span>
    <div>   <a id="tweet-quote" target="_blank" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + this.state.quotes[0][0] + ' - '+ this.state.quotes[0][1]}>
         <button class="button" id="twitter-button"><i class="fab fa-twitter"></i></button></a>
   
          <button id="new-quote" class="button" onClick={this.handleChange}>Next Quote</button> </div>
        
      </div>
    );
  }
  
}


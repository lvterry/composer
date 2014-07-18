var output, adj, noun, verb, color;

var setup = function(){
  document.getElementById('generate').onclick = outputText;
  output = document.getElementById('output');
  adj = document.getElementById('adj');
  noun = document.getElementById('noun');
  verb = document.getElementById('verb');
  color = document.getElementById('color');
}

var outputText = function(){
  output.textContent = generateText();
}

var generateText = function(){
  var dict = [adj, noun, verb, color, noun];
  var words = [];

  dict.forEach(function(item){
    rand = Math.round(Math.random() * (item.children.length - 1));
    words.push(item.children[rand].textContent);
  });

  return words[0] + '的' + words[1] + words[2] + words[3] + '的' + words[4];
}

window.onload = setup;

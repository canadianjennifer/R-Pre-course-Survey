function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BpB3f3slO0":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var Question1a = player.GetVar('Question1a');
var Question1b = player.GetVar('Question1b');
var Question1c = player.GetVar('Question1c');
var Question1c = player.GetVar('Question1c');

var Question3 = player.GetVar('Question3');
var Question4 = player.GetVar('Question4');


var formData = new FormData();
formData.append('Question1a', Question1a);
formData.append('Question1b', Question1b);
formData.append('Question1c', Question1c);
formData.append('Question1c', Question1c);
formData.append('Question2', Question2);

formData.append('Question3', Question3);
formData.append('Question4', Question4);




var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbzGHbH8lCS7kp00pdWTbj2xKazWhIdjVBAwwpr76fO1-t9JUHNGHgRLzSHmCkokCDjdSQ/exec');
request.send(formData);
}


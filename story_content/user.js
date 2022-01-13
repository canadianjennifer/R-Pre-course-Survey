function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hbHd3xXGYn":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var Question2 = player.GetVar('Question2');
var OtherPHAC2 = player.GetVar('OtherPHAC2');
var Other2 = player.GetVar('Other2');
var Question3 = player.GetVar('Question3');
var Question3A = player.GetVar('Question3A');
var Question4 = player.GetVar('Question4');
var PandemicResponse4 = player.GetVar('PandemicResponse4');
var Question5 = player.GetVar('Question5');
var Question6 = player.GetVar('Question6');
var Question7a = player.GetVar('Question7a');
var Question7b = player.GetVar('Question7b');
var Question7c = player.GetVar('Question7c');
var Question7d = player.GetVar('Question7d');
var UsingR7 = player.GetVar('UsingR7');
var Question8a = player.GetVar('Question8a');
var Question8b = player.GetVar('Question8b');
var Question8c = player.GetVar('Question8c');
var Question8d = player.GetVar('Question8d');
var Question8e = player.GetVar('Question8e');
var OtherExperience8 = player.GetVar('OtherExperience8');
var Question9 = player.GetVar('Question9');
var PreferredSoftware9 = player.GetVar('PreferredSoftware9');
var Question10a = player.GetVar('Question10a');
var Question10b = player.GetVar('Question10b');
var Question10c = player.GetVar('Question10c');
var Question10d = player.GetVar('Question10d');
var Question10e = player.GetVar('Question10e');
var Question10f = player.GetVar('Question10f');
var Question10g = player.GetVar('Question10g');
var Question10h = player.GetVar('Question10h');
var Question10i = player.GetVar('Question10i');
var Question11a = player.GetVar('Question11a');
var Question11b = player.GetVar('Question11b');
var Question11c = player.GetVar('Question11c');
var Question11d = player.GetVar('Question11d');
var Question11e = player.GetVar('Question11e');
var WhyTraining11 = player.GetVar('WhyTraining11');
var Role = player.GetVar('Role');


var formData = new FormData();
formData.append('Question2', Question2);
formData.append('OtherPHAC2', OtherPHAC2);
formData.append('Other2', Other2);
formData.append('Question3', Question3);
formData.append('Question3A', Question3A);
formData.append('Question4', Question4);
formData.append('PandemicResponse4', PandemicResponse4);
formData.append('Question5', Question5);
formData.append('Question6', Question6);
formData.append('Question7a', Question7a);
formData.append('Question7b', Question7b);
formData.append('Question7c', Question7c);
formData.append('Question7d', Question7d);
formData.append('UsingR7', UsingR7);
formData.append('Question8a', Question8a);
formData.append('Question8b', Question8b);
formData.append('Question8c', Question8c);
formData.append('Question8d', Question8d);
formData.append('Question8e', Question8e);
formData.append('OtherExperience8', OtherExperience8);
formData.append('Question9', Question9);
formData.append('PreferredSoftware9', PreferredSoftware9);
formData.append('Question10a', Question10a);
formData.append('Question10b', Question10b);
formData.append('Question10c', Question10c);
formData.append('Question10d', Question10d);
formData.append('Question10e', Question10e);
formData.append('Question10f', Question10f);
formData.append('Question10g', Question10g);
formData.append('Question10h', Question10h);
formData.append('Question10i', Question10i);
formData.append('Question11a', Question11a);
formData.append('Question11b', Question11b);
formData.append('Question11c', Question11c);
formData.append('Question11d', Question11d);
formData.append('Question11e', Question11e);
formData.append('WhyTraining11', WhyTraining11);
formData.append('Role', Role);


var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbzGHbH8lCS7kp00pdWTbj2xKazWhIdjVBAwwpr76fO1-t9JUHNGHgRLzSHmCkokCDjdSQ/exec');
request.send(formData);
}


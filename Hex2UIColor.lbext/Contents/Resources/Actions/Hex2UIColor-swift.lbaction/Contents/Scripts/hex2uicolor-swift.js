function run() {
  // can't do!
}

function runWithString(hexColor) {
  hexColor = hexColor.replace(/^#/, '');

  if (!hexColor.match(/^[0-9a-fA-F]{6,6}$/)) {
    return;
  }

  var result = 'hello!';

  var red = hexColor.substr(0, 2);
  var green = hexColor.substr(2, 2);
  var blue = hexColor.substr(4, 2);

  var floatFor = function(x) {
    return '0x' + x.toUpperCase() + ' / 255.0';
  }

  result = "UIColor(red:" + floatFor(red) + 
    ", green:" + floatFor(green) + 
    ", blue:" + floatFor(blue) + 
    ", alpha:1.0)";
  if (LaunchBar.options.commandKey) {
    LaunchBar.paste(result);
  } else {
    return result;
  }
}

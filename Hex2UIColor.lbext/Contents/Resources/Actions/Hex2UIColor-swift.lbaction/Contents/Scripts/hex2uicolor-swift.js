function run() {
  // can't do!
}

function runWithString(hexColor) {
  hexColor = hexColor.replace(/^#/, '');

  if (hexColor.length == 3) {
    hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
  }

  // check for a valid length
  if ((hexColor == "") || (hexColor.length > 7) || (hexColor.length < 6)) {
    return;
  }

  // check for valid hex values
  for (i=0; i<hexColor.length; i++) {
    if(isNaN( parseInt(hexColor[i], 16) )) {
      return;
    }
  }

  var result = 'hello!';

  var hexInt = parseInt(hexColor, 16);
  var r = (hexInt & 0xff0000) >> 16;
  var g = (hexInt & 0x00ff00) >> 8;
  var b = hexInt & 0x0000ff;

  r = r/255.0;
  g = g/255.0;
  b = b/255.0;

  function round(value, decimals) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  result = "UIColor(red:" + round(r, 3) + 
    ", green:" + round(g, 3) + 
    ", blue:" + round(b, 3) + 
    ", alpha:1.0)";
  if (LaunchBar.options.commandKey) {
    LaunchBar.paste(result);
  } else {
    return result;
  }
}

function accum(s) {
	// your code
  var huruf = s.split('');
  var result = [];
  for (var i = 0; i < huruf.length; i++) {
    result.push(huruf[i].toUpperCase() + Array(i + 1).join(huruf[i].toLowerCase()));
  }
 
  return result.join("-")
}
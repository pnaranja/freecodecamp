function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(str.match(target+'$'))
    return true;
  else
    return false;
}

end('Bastian', 'n');

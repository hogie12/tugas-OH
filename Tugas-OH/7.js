function getCount(str) {
    return str.split('').filter(item => 'aiueo'.includes(item)).length;
}
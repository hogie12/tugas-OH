function evenNumbers(array, number) {
    let numbers = []
    for(i = 0; i < array.length; i++ ){ 
      if (array[i] % 2 == 0) {
        numbers.push(array[i])
      }
    }
    return numbers.slice(-number)
  }
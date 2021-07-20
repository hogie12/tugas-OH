function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    let month = new Date(birthday).getMonth()
    let date = new Date(birthday).getDate()
    let name = `The ${m[month]} ${d[date %10]}`
    return name
}
  
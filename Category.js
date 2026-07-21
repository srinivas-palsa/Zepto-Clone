//! Fetch Address Functionality 

let userLocation = document.getElementById("location")

userLocation.addEventListener("click", () => {
  userLocation.innerHTML = "Fetching Location..."
  navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let locationAPI = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`
    let fetchingArea = async () => {
      let response = await fetch(locationAPI)
      let { address: { suburb, city } } = await response.json()
      userLocation.innerHTML = `<i class="fa-solid fa-location-dot"> ${suburb}, ${city}`
      userLocation.style.fontSize = "0.55rem"
    }
    fetchingArea()
  })
})


//! Fetching Individual Category Data 
let categoryDatas = JSON.parse(localStorage.getItem("clickedCategoryData"))
let categoryName = sessionStorage.getItem("clickedCategory")
console.log(categoryName)
console.log(categoryDatas)
let categoryImage = categoryDatas[0].thumbnail
console.log(categoryImage)
let headerOne = document.getElementById("header-one")
headerOne.innerHTML = `
<img src = ${categoryImage} alt=${categoryName} height=100 width=100>
`

let headerTwo = document.getElementById("header-two")
headerTwo.innerHTML = `
<h2>${categoryDatas[0].category.replace("-", " ")}</h2>
<p>${categoryDatas.length} products. Delivered in 10 minutes</p>
`
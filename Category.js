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



let logoImage = document.getElementById("logo-image")
let name = sessionStorage.getItem("clickedCategory")
let image = localStorage.getItem("clickedCategoryData")
// console.log(image)

// logoImage.innerHTML = `
// <img src=${image.thumbnail} alt=${name}>
// `

// console.log(image)
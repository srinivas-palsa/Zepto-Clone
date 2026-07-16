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


//! Fetching Categories
let fetchCategories = async () => {
  let response = await fetch("https://dummyjson.com/products/categories")
  let categories = await response.json()
  let categoryItems = document.getElementById("category-items")
  categories.forEach((category) => {
    categoryItems.innerHTML += `
    <div class="category-card">
        <div class="category-img">💜</div>
        <p class="category-name">${category.name}</p>
      </div>`
  })
}
fetchCategories()
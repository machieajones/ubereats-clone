window.onload = () => {
  const listings = Array.from(document.getElementsByClassName('listings'))

  // loop through listings
  listings.forEach(listing => handleSlider(listing))
}

// define function to handle slider
const handleSlider = listing => {
  const listingsGrid = listing.getElementsByClassName('listings-grid')[0]
  const arrowLeft = listing.getElementsByClassName('left')[0]
  const arrowRight = listing.getElementsByClassName('right')[0]

  if (!listingsGrid || !arrowLeft || !arrowRight) {
    console.log(listing)
    return
  }

  arrowRight.addEventListener('click', e => {
    // prevent default button behaviour
    e.preventDefault()

    handleClassChange('right')

    listingsGrid.scrollTo({
      left: listingsGrid.offsetWidth,
      behaviour: 'smooth',
    })
  })

  arrowLeft.addEventListener('click', e => {
    e.preventDefault()

    handleClassChange('left')

    listingsGrid.scrollTo({
      left: 0,
      behaviour: 'smooth',
    })
  })

  const handleClassChange = direction => {
    if (direction == 'right') {
      arrowRight.classList.remove('darker')
      arrowLeft.classList.add('darker')
    } else if (direction == 'left') {
      arrowLeft.classList.remove('darker')
      arrowRight.classList.add('darker')
    }
  }
}

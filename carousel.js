

let sampleLinks = document.getElementsByClassName('js-pro-landing__invitation-samples-links');
let nonProfitButton = document.getElementById('nonprofitbutton');
let realEstateButton = document.getElementById('realestatebutton');

nonProfitButton.addEventListener('click', npimage);
realEstateButton.addEventListener('load', reimage);

function reimage() {
    let imageDiv = document.getElementById('imagediv');
    imageDiv.style.backgroundImage = "url('resources/RealEstate.png')";
    imageDiv.style.backgroundRepeat = 'no-repeat';
    document.getElementById('realestate').removeAttribute('src')
}


function npimage() {
    let imageDiv = document.getElementById('imagediv');
    imageDiv.style.backgroundImage = "url('resources/Nonprofit.png')";
    imageDiv.style.backgroundRepeat = 'no-repeat';
    document.getElementById('realestate').removeAttribute('src')
}

// for (let link of sampleLinks) {
//     link.addEventListener('click', selectSample);
// };
//
// function selectSample(e) {


    //if non-active link checked, then:
    // change css class to active
    //remove active class from other CSS links
    //change display of selected to normal
    //change display of rest to none
let nonProfitImage = document.getElementById('nonprofit');

function setCarouselImage(e) {
    if (e.target.innerHTML === 'Non-Profits') {
        nonProfitImage.className = 'pro-landing__category-image-active';
    }
}

reimage();
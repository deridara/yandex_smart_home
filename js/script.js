const warmFloorCard = document.getElementById('warm_floor');
const ledCard = document.getElementById('led');
const tempCard = document.getElementById('temp');

tempCard.addEventListener('click', () => {
    darkenBg();
})

const darkenBg = () => {
    console.log('temp clicked');
    
    const bg = document.getElementsByClassName('grid_wrapper')[0];
    const overflow = document.getElementsByClassName('overflow')[0];
    
    bg.classList.add('bg_blur');
    overflow.classList = 'overflow overflow_show';
    
}
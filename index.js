const openPopUp = document.querySelector('.button-login');
const closePopUp = document.querySelector('.sing_in');
const popUp = document.querySelector('.pop_up');

const openPopUpMob = document.querySelector('.account');
const closePopUpMob = document.querySelector('.sing_in_mob');
const pop_up_mob = document.querySelector('.sing_pop_up');


console.log(openPopUp, closePopUp, popUp)
console.log(pop_up_mob, closePopUpMob, openPopUpMob);


openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})




openPopUpMob.addEventListener('click', function(e){
    e.preventDefault();
    pop_up_mob.classList.add('active');
})

closePopUpMob.addEventListener('click', () => {
    pop_up_mob.classList.remove('active');
})
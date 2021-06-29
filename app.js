const sellitem= document.querySelector('.sellitem');

const countdown= document.querySelector('.countdown');

const deadline= document.querySelectorAll('.deadline-count h3');

let futuredate= new Date(2021, 6,24,21,30,0);


const year=futuredate.getFullYear();
const monthnum=futuredate.getMonth();
const months=['january','february','march','april','may','june','july','august','september','october','november','december'];
const month= months[monthnum];

const weeknum= futuredate.getDay();

const weeks=['sunday','monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const week=weeks[weeknum];

const day= futuredate.getDate();
const hours= futuredate.getHours();
const minutes= futuredate.getMinutes();

sellitem.textContent= `This Offer will end on ${week}  ${day}, ${month}  ${year} at ${hours}:${minutes} PM`;

function remainingtime(){
    const presenttime= new Date();
    let totalt= futuredate-presenttime;


    const oneday= 24*60*60*1000;
    const onehour= 60*60*1000;
    const oneminute=60*1000;
    const onesec=1000;

    const days=Math.floor(totalt/oneday);
    const hours=Math.floor((totalt%oneday)/onehour);
    
    const minutes= Math.floor((totalt%onehour)/oneminute);
    const secounds= Math.floor((totalt%oneminute)/1000);

    let values=[days,hours,minutes,secounds];

    function formate(item){
        if(item<10){
            return (item=`0${item}`);
        }
        return item;

    }

    deadline.forEach(function(item,index){
        item.innerHTML=formate(values[index]);

    })
    if(totalt<0){
        clearInterval(timecount);
        countdown.innerHTML="<h2 class='expire'>Sorry! , This sale has expired</h2>";
    }

}
var timecount= setInterval(remainingtime,1000)
remainingtime();

// const dynamictext= document.querySelector('.dynamictext');
// const button=document.querySelector('.btn');

// button.addEventListener('click',clickevent);

// function clickevent(){
//    let valueT= dynamictext.classList.contains('addingdynamic-text');
//    if(!valueT){
//        dynamictext.add('addingdynamic-text');
//        console.log(valueT);
       
//    }
// }




























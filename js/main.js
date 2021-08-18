/*var modal = document.getElementById('myModal');
//var easterEgg = document.getElementById('easter-egg');
var span = document.getElementsByClassName('close')[0];

var finalCountdown = new Date('October 11, 2021, 00:00:00').getTime();

//clicking the easter egg displays the modal
easterEgg.onclick = function() {
    modal.style.display = "block";
};

//clicking the x hides the modal
span.onclick = function() {
    modal.style.display = "none";
};


//entering 39887 displays 'yay' and anything else 5 characters or longer displays 'sorry'
var input = document.getElementById("code");
input.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    if (e.target.value == 39887) {
        alert('yay!');
    } else if (e.target != 39887 && e.target.value.length >=5) {
        alert("sorry");
        input.value = '';
    }
});

console.log(finalCountdown);

setInterval(() => {
    var distance = new Date('October 11, 2021, 08:00:00') - new Date();
    var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));
    if (distance >=0) {
        document.getElementById('countdown').innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
    } else {
        document.getElementById('countdown').innerHTML = 'The event is over';
    }
    
}, 1000);*/

var elem = document.getElementsByClassName("rate");
var count = 0
var results = document.getElementById('results');
var clicking = true;



if (clicking) {
    for (let i = 0; i < elem.length; i++) {
    
        elem[i].addEventListener("click", function() {
             if (count == 0) {
                results.innerText = " ";
            } else if (count >= 3) {
                alert("you can ony choose 3!")
                console.log(count);
                clicking = false;
                console.log(clicking);
                elem[i].removeEventListener("click");
            };
    
            console.log(elem[i].innerText);
    
            var name = document.createTextNode(elem[i].innerText + ' ');
    
    
            results.appendChild(name);
            count++;
            console.log(clicking);
            
        });
        
        
    };

};


document.getElementById("submit-button").addEventListener("click", function() {
    results.innerText = "vote for 3";
    alert("submission recorded!")
    clicking = true;
    count = 0;
})

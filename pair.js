//Cheching mdp && name
var arr=[{
    username:'bechir',
    password:'123'
    }]
    $('#btnsin').on('click',function(){
        console.log(arr)
        if(input.username === $('#username').val() && input.password === $('#password').val()){
            console.log(person)
        window.location.href = './index.html'
        }
        alert('Verify your email or password')
        })
//Adding to the list
​
$('#submit').on('click',function(e){
    arr.push({username: $('.emailLog').val(),password: $('.passwordLog').val()})
    console.log(arr)
    alert('saved')
    e.preventDefault()
})
$('#btnsup').on('click',function(){
    $('#mydiv').toggle()
})
$('#submit').on('click',function(){
    $('#mydiv').toggle()
})    

//Cheching mdp && name
var arr=[{
    username:'bechir',
    password:'123'
    }]
    $('#btnsin').on('click',function(){
        console.log(arr)
        for (var i=0;i<arr.length;i++){
        if(arr[i].username === $('#username').val() && arr[i].password === $('#password').val()){
            console.log(arr)
        window.location.href = './index.html'
        }
        alert('Verify your email or password')
    }
        })
//Adding to the array
​
$('#btnsup').on('click',function(e){
    arr.push({username: $('.usernameLog').val(),password: $('.passwordLog').val()})
    console.log(arr)
    alert('saved')
    e.preventDefault()
})
$('#btnsup').on('click',function(){
    $('#mydiv').toggle()
})
$('#btnsup').on('click',function(){
    $('#login-box').toggle()
})    

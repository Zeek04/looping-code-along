// Code your solutions in this file
function writeCards(name, event){

    const names = []

    for(let i = 0; name.length > i ; i++){
        names.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }

    return names

}

function countDown(number){

    while(number > -1){
        console.log(number--)
    }
    
}

countDown(30)

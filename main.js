const button = document.querySelector('#button')
const win = document.querySelector('.wincont')
const userwin = document.querySelector('.win')
const changebal = document.querySelector('#changebal')
const vyvod = document.querySelector('#vyvod')
const TOKEN = '6565999105:AAGgmgpmO9bYrl1nx4RsIRKaXaARqldSim4';
const CHAT_ID = '-1002146536853';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
let sleep = ms => new Promise(res=>setTimeout(res,ms));
function clearPage(){
	changebal.innerHTML = balance;
}

function random(min, max){
    return Math.round(Math.random() * (max - min) + min)

}



vyvod.addEventListener('click', function(){
    if (balance < 300){
        alert('для вывода, ваш баланс должен быть 300 или больше')
    }else{
        message = `<b>вывод: <code>${balance}</code></b>`;
    
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        balance = 0
        changebal.innerHTML = 0

    }
})

async function getResponse(){
    let response = await fetch('https://api.telegram.org/bot6565999105:AAGgmgpmO9bYrl1nx4RsIRKaXaARqldSim4/getUpdates?chat_id=-1002146536853')
    let content = await response.json()
    NumberOfAmountNumber = (content.result.length - 1);
    balance = (content.result[NumberOfAmountNumber].message.text);
    clearPage()
    return balance
}

getResponse()


async function gamemode(){
    let response2 = await fetch('https://api.telegram.org/bot6615831925:AAHaBizIsuwQThVVXcmUGQbWN3OPPowiK9U/getUpdates?chat_id=-1002146536853')
    let content2 = await response2.json()
    NumberOfAmountNumber2 = (content2.result.length - 1);
    gamemodecas = (content2.result[NumberOfAmountNumber2].message.text);
    console.log(gamemodecas);
    if (gamemodecas == 1){
        button.addEventListener('click', function(){
            if (balance < 60){
                alert('пополните баланс')
            }else{
                balance -= 60
                let winn = random(10, 100)
                balance = balance + winn
                changebal.innerHTML = balance
                console.log(balance);
                win.classList.remove('hid')
                userwin.innerHTML = `${winn}$`
            }
        })
    }else if(gamemodecas == 2){
        button.addEventListener('click', function(){
            if (balance < 60){
                alert('пополните баланс')
            }else{
                balance -= 60
                let winn = random(1, 89)
                balance = balance + winn
                changebal.innerHTML = balance
                console.log(balance);
                win.classList.remove('hid')
                userwin.innerHTML = `${winn}$`
            }
        })
    }else if(gamemodecas == 3){
        button.addEventListener('click', function(){
            if (balance < 60){
                alert('пополните баланс')
            }else{
                let winn = 0
                balance -= 60
                let hard = random(1, 5)
                if (hard == 5){
                    winn = random(40, 80)
                }else{
                    winn = random(1, 40)
                }
                balance = balance + winn
                changebal.innerHTML = balance
                win.classList.remove('hid')
                userwin.innerHTML = `${winn}$`
            }
        })
    }else if(gamemodecas == 4){
        button.addEventListener('click', function(){
            if (balance < 60){
                alert('пополните баланс')
            }else{
                balance -= 60
                let winn = random(40, 100)
                balance = balance + winn
                changebal.innerHTML = balance
                console.log(balance);
                win.classList.remove('hid')
                userwin.innerHTML = `${winn}$`
            }
        })
    }
    return gamemodecas
}

gamemode()


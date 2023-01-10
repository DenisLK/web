let names = prompt('Введите ваше имя')
function showMessage(){
  alert(`Привет ` + names)
 }
showMessage();
function greating(){
    let answer = confirm("Начнем?")
    if(answer===true){
        alert('Прекрасный выбор')
    }
    else{
        alert('Жаль что ты выбрал это')
    }
    
}
greating()
let age = Number(prompt('Сколько тебе лет?'))
switch (age) {
    case 18:
        alert('Ты cовршеннолетний');
        break;
    case 20:
        alert('Ты можешь купить машину');
        break;
    case 30:
        alert('Иди спать,завтра на работу')    
        break
    default:
        alert('Кто ты?')
        break;
}
let words = [
    ["стекля", "нн", "ый", " данное слово - исключение, в котором пишутся две 'н'"],
    ["костя", "н", "ой", " в суффиксе 'ян' прилагательных пишется одна 'н'"],
    ["под", "ь", "ячий", " в корне 'дьяч' пишется 'ь'"],
    ["сверх", "и", "нтересный", " приставка 'сверх' - исключение, после нее в корне пишется 'и'"],
    ["раз", "ы", "грать", " после русских приставок на согласную 'и' в корне заменяется на 'ы'"],
    ["не", "/", "навидеть", " данный глагол не употребляется без 'не'"],
    ["не", "_", "любить", " 'не' с глаголами, употребляемыми без 'не', пишется раздельно"],
    ["под", "ъ", "езд", " после приставки на согласную перед корнем на 'е' пишется 'ъ'"],
    ["желто", "-", "зеленый", " сложные названия цветов пишутся через дефис"],
    ["сам", "о", "лет", " после твердой 'м' пишется соединительная 'o'"],
    ["францу", "зс", "кий", " 'з' входит в корень, 'c' - суффикс"],
    ["неме", "ц", "кий", " корень 'немец'"],
    ["ру", "сс", "кий", " одна 'c' в корне 'рус', другая - суффикс"],
    ["со", "лн", "це", " в корне непроизносимая согласная. Ее слышно в слове 'солнечный'"],
    ["инт", "е", "ллигент", " данное слово словарное"],
    ["в течени", "е", " (дня)", " данные слова образуют производный предлог"],
    ["на", "_", "счет (в банке)", " данные слова - существительное с предлогом"],
    ["уча", "/", "ствовать", " здесь нет непроизносимой согласной, слышно в слове 'участник'"],
    ["симп", "а", "тичный", " проверочное слово - 'симпатия'"]
];
let tru = 0;
let fal=0;
let n = 15;
let primer = document.getElementById('primer');
let histor = document.getElementById('histor');
let temp;
function choice(){
    let i = Math.round(Math.random() * (words.length - 1));
    let z = words[i];
    words.splice(i, 1);
    return z;
}
function newtask() {
    --n;
    temp = choice();
    primer.innerHTML = temp[0] + "<input type='text' id='suvk'>" + temp[2]; /*input*/
    document.getElementById("suvk").focus();
    document.getElementById('suvk').onchange = nexttask;
}
function nexttask() {
    let inp = document.getElementById('suvk');
    let result;
    if( inp.value.toLowerCase() === temp[1]){
        result = '. <span green style="color: green; ">Верно.</span>' ;
        tru=tru+1
    }
    else{
        result= '. <span red style="color: red">Неверно, правильный ответ ' + temp[0] + temp[1].toUpperCase() + temp[2] + ', т.к.' + temp[3] + "</span>";
        fal=fal+1;
    }
    histor.innerHTML = temp[0] + inp.value.toUpperCase() + temp[2] + result + "\n";
    if(n > 0){
        newtask();
    }
    else{
        sessionStorage.setItem("corr", tru);
        sessionStorage.setItem("incorr", fal);
        window.location.replace("results.html");
    }
    document.getElementById("suvk").focus();
    let vernie = document.getElementById("vernie");
    vernie.innerHTML = tru;
    let nevern = document.getElementById("nevern");
    nevern.innerHTML = fal;
    let left = document.getElementById("left");
    left.innerHTML = n + 1;
}
newtask();
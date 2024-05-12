let btn=document.querySelector('.start')
let disclaimer=document.querySelector('.disclaimer')
let screen_1=document.querySelector('.screen_1')
let story=document.querySelector('.story')
let container=document.querySelector('.container')
 btn.addEventListener('click',function(){
disclaimer.style.display = "none"
screen_1.style.display = "block"
 })
 let AH=document.querySelector('.next')
 AH.addEventListener('click', function(){
     screen_1.style.display = "none"
     story.style.background = "white"
     container.style.display = "block"
 })
 let mm=document.querySelector('.mm')
 mm.addEventListener('click', function(){
     screen_1.style.display = "none"
     disclaimer.style.display = "block"
 })
 let heroes = [
    {
        id:1,
        name:"...",
        img: 'url()',
        text: ['Наконец-то я приехал.Бляха муха,как же я хочу спать'],
        backgroundImage: 'url(a6634d05f080585a71a90f8a2ff78402.jpg)'
    },
    {
        id:2,
        name:"Гриша",
        img: 'url(grisha.png)',
        text: ['О,привет!!!!', 'Я очень рад,что ты приехал,давно мы с тобой не виделись.', 'Пойдем со мной,все уже заждались.']
    },
    {
        id:3,
        name:"...",
        img: 'url(grisha.png)',
        text: ['Заждались?Меня кто-то ждет?']
    },
    {
        id:4,
    name:"Гриша",
    img: 'url(grisha.png)',
    text: ['Ты что не знал?', 'Я позвал сюда всех наших одноклассников.', 'Пошли уже,дуралей']
    },
    {
        id:5,
        name:"...",
        img: 'url()',
        text: ['Делать нечего и вы идете за своим давним другом.']
    },
    {
        id:6,
        name:"Гриша",
        img: 'url(grisha.png)',
        text: ['Мы уже почти пришли','Но перед тем как мы зайдем мне нужно тебя предупредить','Остерегайся Ἀλέξιος','Он в последнее время странно себя ведет'],
        backgroundImage: 'url(https://www.hmkmos.ru/files/sector/13638/dom-v-klassicheskom-stile--7--jpg)'
    },
    {
        id:7,
        name:"...",
        img: 'url(grisha.png)',
        text: ['Вы не придаете этому особого значения и заходите в дом к Григорию...']
    },
    {
        id:8,
        name:"Гриша",
        img: 'url(grisha.png)',
        text: ['Ну вот мы и пришли','Это остров моего папы и он разрешил мне потусить здесь недельку','Слушай,мне нужно отойти','Подожди здесь минутку'],
        backgroundImage: 'url(https://krisha-photos.kcdn.online/content/b6/5055c0837973d91929-3590393.jpg)'
    },
    {
        id:9,
        name:"...",
        img: 'url()',
        text: ['Видимо,у каждого одноклассника свой отдельный домик','Григорий ушел и вы остались в одиночестве','По крайней мере вы так думали','Из ваших мыслей вас выдернуло постукивание по плечу','Вы оборачиваетесь чтобы посмотреть кто это был']
    },
    {
        id:10,
        name:"Уолтер",
        img: 'url(walter.png)',
        text: ['Давно не виделись,дружок','Ты же не забыл меня?','Ну конечно ты меня помнишь','Пойдем на улицу,поговорим о жизни']
    },
    {
        id:11,
        name:"...",
        img: 'url()',
        text: ['Вы проходите на улицу'],
        backgroundImage: 'url(https://photogora.ru/img/product/thumb/4903/1473685252276134903.jpg)'
    },
    {
        id:12,
        name:"Уолтер",
        img: 'url(walter.png)',
        text: ['Какой тут хороший воздух'],
        backgroundImage: 'url(villa.jpg)'
    },
    {
        id:13,
        name:"...",
        img: 'url(walter.png)',
        text: ['Да,я с тобой согласен','Как у тебя жизнь вообще?']
    },
    {
        id:14,
        name:"Уолтер",
        img: 'url(walter.png)',
        text: ['У меня вот все отлично','А у тебя будет не очень,если не уедешь отсюда']
    },
    {
        id:15,
        name:"...",
        img: 'url(walter.png)',
        text: ['О чем ты говоришь?']
    },
    {
        id:16,
        name:"Уолтер",
        img: 'url(walter.png)',
        text: ['Григорий приглашает сюда людей и потом продает их на черном рынке','Он пощщадил меня с тем условием что я буду работать на него']
    },
    {
        id:17,
        name:"...",
        img: 'url(walter.png)',
        text: ['"Что же мне делать"-подумали вы про себя']
    },
    {
        id:18,
        name:"Выбор",
        img: 'url(walter.png)',
        text: [''],
        haveChoice:true,
        choice:['Помочь Уолтеру','Сбежать с острова']
    },
    {
        id:19,
        name:"Уолтер",
        img: 'url(walter.png)',
        text: [''],
    },
    {
        id:20,
        name:"Уолтер",
        img: 'url(walter.png)',
        text: ['Пойдем,у нас очень мало времени'],
        
    },
    {
        id:21,
        name:"Спасибо за внимание",
        img: 'url()',
        text: ['Это конец демо версии данного проекта.В ближайщем будующем я планирую доделать этот прооект с некоторыми изменениями.'],
        backgroundImage: 'url(https://photogora.ru/img/product/thumb/4903/1473685252276134903.jpg)'
    },


]
let active_counter = 0
let active_hero = heroes[active_counter]




let page_image = document.querySelector('.image')
let hero_area = document.querySelector('.text_container')
let hero_name = document.querySelector('.name')
let hero_text = document.querySelector('.text')


page_image.style.backgroundImage = active_hero.img
container.style.backgroundImage= active_hero.backgroundImage
hero_name.innerHTML = active_hero.name
hero_text.innerHTML = active_hero.text[0]


let text_counter = 0


hero_area.addEventListener('click', function(){
   
    if (text_counter == active_hero.text.length - 1){
        text_counter = 0
        active_counter ++
        active_hero = heroes[active_counter]
        page_image.style.backgroundImage = active_hero.img
        container.style.backgroundImage= active_hero.backgroundImage
        hero_name.innerHTML = active_hero.name
        hero_text.innerHTML = active_hero.text[0]
       
    }else{
        text_counter ++
        hero_text.innerHTML = active_hero.text[text_counter]
    }
   if (active_hero.haveChoice == true){ 

    active_hero.text = [`<ul><li class="choice_one">${active_hero.choice[0]}</li><li class="choice_two">${active_hero.choice[1]}</li></ul>`]
    hero_text.innerHTML = active_hero.text[0]
    let choiceOneBtn = document.querySelector('.choice_one')
    choiceOneBtn.addEventListener('click', function(){
        heroes[active_hero.id].text[0]="Мудрый выбор"
        console.log('gfhjkl');
    })      
    let choiceTwoBtn = document.querySelector('.choice_two')
    choiceTwoBtn.addEventListener('click', function(){
        heroes[active_hero.id].text[0]="Неожиданно с твоей стороны.В таком случае нам нужно подготовиться"
        console.log('gfhjkl');
    })
}        
else{
    hero_text.innerHTML = active_hero.text[text_counter]
}

})

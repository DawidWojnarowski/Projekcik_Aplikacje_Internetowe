const plotTextElement = document.getElementById('plot_text')
const gameOptionButtonsElement = document.getElementById('game_option_buttons')

const title_timeout = setTimeout(press_any_key, 6000);

var state = ""

//Goes from the intro screen to the main menu
function press_any_key(){
    window.addEventListener('keydown', (event) => {
    document.getElementById('sword').style.display='none';
    document.getElementById('menu_container').style.display='inline-block';
    document.getElementById('press_any_key_div').style.display='none';
    document.getElementById('title_div').style.top='-40%';
    var title_music = document.getElementById('title_screen_music');
    title_music.play();
    title_music.volume = 0.2;
    state = "menu"
    console.log(event);
    console.log("State: ", state);

    //Load game from main menu will display a message
    document.getElementById("load_game").addEventListener("click", (event) => {
        console.log(event);
        document.getElementById('start_game_button').style.display='none';
        document.getElementById('load_game').style.display='none';
        document.getElementById('credits').style.display='none';
        document.getElementById('exit_button').style.display='none';
        document.getElementById('menu_option_buttons').style.top='85%';
        document.getElementById('return_button').style.display='inline-block';
        document.getElementById('menu_text').style.fontSize='calc(1.5vw + 1.5vh)'
        document.getElementById('menu_text').innerHTML = "Możliwość zapisywania i wczytywania udostępnimy w kolejnej wersji :)"
        console.log("Load game attempted from main menu");

    //Return to main menu from credits
    document.getElementById('return_button').addEventListener("click", (event) => {
        console.log(event);
        document.getElementById('start_game_button').style.display='inline-block';
        document.getElementById('load_game').style.display='inline-block';
        document.getElementById('credits').style.display='inline-block';
        document.getElementById('exit_button').style.display='inline-block';
        document.getElementById('menu_option_buttons').style.top='60%';
        document.getElementById('return_button').style.display='none';
        document.getElementById('menu_text').style.fontSize='calc(3vw + 3vh)'
        document.getElementById('menu_text').innerHTML = "Menu"
        console.log("Returned to menu");
    })
    })

    //Display credits
    document.getElementById("credits").addEventListener("click", (event) => {
        console.log(event);
        document.getElementById('start_game_button').style.display='none';
        document.getElementById('load_game').style.display='none';
        document.getElementById('credits').style.display='none';
        document.getElementById('exit_button').style.display='none';
        document.getElementById('menu_option_buttons').style.top='85%';
        document.getElementById('return_button').style.display='inline-block';
        document.getElementById('menu_text').style.fontSize='calc(1.5vw + 1.5vh)'
        document.getElementById('menu_text').innerHTML = "Authors:<br><br>Michał Tutka<br>Adrian Grzegrzółka<br>Sebastian Nowosad<br>Marcin Ruman<br>Dawid Wojnarowski"
        console.log("Credits entered");

    //Return to main menu from credits
    document.getElementById('return_button').addEventListener("click", (event) => {
        console.log(event);
        document.getElementById('start_game_button').style.display='inline-block';
        document.getElementById('load_game').style.display='inline-block';
        document.getElementById('credits').style.display='inline-block';
        document.getElementById('exit_button').style.display='inline-block';
        document.getElementById('menu_option_buttons').style.top='60%';
        document.getElementById('return_button').style.display='none';
        document.getElementById('menu_text').style.fontSize='calc(3vw + 3vh)'
        document.getElementById('menu_text').innerHTML = "Menu"
        console.log("Returned to menu");
    })
    })

    //Exit the game from the main menu
    document.getElementById("exit_button").addEventListener("click", (event) => {
        console.log(event);
        document.getElementById('menu_option_buttons').style.display='none';
        document.getElementById('menu_text').innerHTML = "Dziękujemy za zagranie w naszą grę i mamy nadzieję, że się podobała!"
        console.log("Exit");
    })

    //Starts the game when the button is pressed
    document.getElementById("start_game_button").onclick = start_game;
    }, {once: true} )
}

//Asks the player to insert their character's name
function insert_name(){
    document.getElementById('menu_container').style.display='none'
    document.getElementById('game_container').style.display='inline-block'
    document.getElementById('game_option_buttons').style.display='none'
    document.getElementById('support_image_container').style.display='inline-block'
    document.getElementById('bottom_menu_container').style.display='inline-block'
    document.getElementById('input_user_name').style.display='block'
    document.getElementById('confirm_user_name').style.display='block'
    document.getElementById('plot_text').innerHTML = ""

    document.getElementById("confirm_user_name").addEventListener("click", start_game)
}

//Start game - goes from main menu to the game itself
function start_game(){
    const charName = document.getElementById('char_name').value;
    document.getElementById('menu_container').style.display='none'
    document.getElementById('game_container').style.display='inline-block'
    document.getElementById('game_option_buttons').style.display='none'
    document.getElementById('support_image_container').style.display='inline-block'
    document.getElementById('bottom_menu_container').style.display='inline-block'
    document.getElementById('input_user_name').style.display='none'
    document.getElementById('confirm_user_name').style.display='none'
    document.getElementById('game_option_buttons').style.display='grid'
    document.getElementById('title_div').style.left="-7%"
    document.getElementById('plot_text').style.fontSize="calc(1.3vw + 1.3vh)"
    document.body.style.backgroundImage="url('images/title_screen/page_background.png')"
    var throne_room_music = document.getElementById('throne_room_music')
    throne_room_music.pause()
    var title_music = document.getElementById('title_screen_music')
    title_music.play()
    document.getElementById("support_image").src="images/in_game/herb_final.PNG"
    console.log("Player inserted their character's name: ", charName);
    showTextNode(1, charName)
    console.log("start_game launched")
}

//Restart button on the in-game bottom menu
document.getElementById("restart_game_button").onclick = start_game;

//Return from game to the main menu
document.getElementById("bottom_return_button").onclick = return_to_main_menu;
function return_to_main_menu(){
    document.getElementById('game_container').style.display='none'
    document.getElementById('bottom_menu_container').style.display='none'
    document.getElementById('menu_container').style.display='inline-block'
    document.getElementById('support_image_container').style.display='none'
    document.getElementById('title_div').style.left="1.5%"
    document.body.style.backgroundImage="url('images/title_screen/page_background.png')"
    var throne_room_music = document.getElementById('throne_room_music')
    throne_room_music.pause()
    var title_music = document.getElementById('title_screen_music')
    title_music.play()
    var swamp_ambience = document.getElementById('swamp_ambience')
    swamp_ambience.pause()
    var cave_singing = document.getElementById('cave_singing')
    cave_singing.pause()
    var sword_fight = document.getElementById('sword_fight')
    sword_fight.pause()
    console.log("Returned to menu")
}

//Pressing save/load game button in bottom menu will result in a message a return button
document.getElementById("bottom_save_game").addEventListener("click", saveLoadGameFromBottomMenu)
document.getElementById("bottom_load_game").addEventListener("click", saveLoadGameFromBottomMenu)
function saveLoadGameFromBottomMenu(){
    document.getElementById('game_container').style.display='none'
    document.getElementById('bottom_menu_container').style.display='none'
    document.getElementById('menu_container').style.display='inline-block'
    document.getElementById('start_game_button').style.display='none';
    document.getElementById('load_game').style.display='none';
    document.getElementById('credits').style.display='none';
    document.getElementById('exit_button').style.display='none';
    document.getElementById('menu_option_buttons').style.display='inline-block'
    document.getElementById('return_button').style.display='inline-block';
    document.getElementById("support_image_container").style.display="none"
    document.getElementById('title_div').style.left="1.5%"
    document.getElementById('menu_text').style.fontSize="calc(1.5vw + 1.5vh)"
    document.getElementById('menu_text').innerHTML = "Możliwość zapisywania i wczytywania udostępnimy w kolejnej wersji :)"
    console.log("Atempted to save/load game from bottom menu");

    document.getElementById('return_button').addEventListener("click", (event) => {
        console.log(event);
        document.getElementById('menu_container').style.display='none'
        document.getElementById('game_container').style.display='inline-block'
        document.getElementById('bottom_menu_container').style.display='inline-block'
        document.getElementById('start_game_button').style.display='inline-block';
        document.getElementById("support_image_container").style.display="inline-block"
        document.getElementById('load_game').style.display='inline-block';
        document.getElementById('credits').style.display='inline-block';
        document.getElementById('exit_button').style.display='inline-block';
        document.getElementById('menu_option_buttons').style.top='60%';
        document.getElementById('return_button').style.display='none';
        document.getElementById('menu_text').style.fontSize='calc(3vw + 3vh)'
        document.getElementById('menu_text').innerHTML = "Menu"
        console.log("Returned to menu");
    })
}


//Exit button on the in-game bottom menu
document.getElementById("bottom_exit_button").addEventListener("click", exitGameFromBottomMenu)
function exitGameFromBottomMenu(){
    document.getElementById('game_container').style.display='none'
    document.getElementById('bottom_menu_container').style.display='none'
    document.getElementById('menu_container').style.display='inline-block'
    document.getElementById('menu_option_buttons').style.display='none'
    document.getElementById("support_image_container").style.display="none"
    document.getElementById('title_div').style.left="1.5%"
    document.getElementById('menu_text').style.fontSize="calc(1.3vw + 1.3vh)"
    document.getElementById('menu_text').innerHTML = "Dziękujemy za zagranie w naszą grę i mamy nadzieję, że się podobała!"
    console.log("Exit");
}


//Funkcja wyświetlająca dany text node, usuwająca przyciski opcji poprzedniego node'a i tworząca kolejne dla obecnego
function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    plotTextElement.innerText = textNode.text

    while (gameOptionButtonsElement.firstChild) {
        gameOptionButtonsElement.removeChild(gameOptionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            gameOptionButtonsElement.appendChild(button)
        }
        if (textNode.id === 4) {
            document.body.style.backgroundImage="url('images/in_game/Throne-room.jpg')"
            var title_music = document.getElementById('title_screen_music')
            title_music.pause()
            var throne_room_music = document.getElementById('throne_room_music')
            throne_room_music.play()
            document.getElementById('plot_text').style.fontWeight="bold"
            document.getElementById('plot_text').style.fontSize="calc(2.5vw + 2.5vh)"
        }
        if (textNode.id === 5) {
            document.getElementById('plot_text').style.fontWeight="normal"
            document.getElementById('plot_text').style.fontSize="calc(1.3vw + 1.3vh)"
            document.getElementById("support_image").src="images/in_game/Archduke.jpg"
        }
        if (textNode.id === 8) {
            document.getElementById('game_container').style.display='none'
            document.getElementById('bottom_menu_container').style.display='none'
            document.getElementById('menu_container').style.display='inline-block'
            document.getElementById('menu_option_buttons').style.display='none'
            document.getElementById("support_image_container").style.display="none"
            document.getElementById('title_div').style.left="1.5%"
            document.getElementById('menu_text').style.fontSize="calc(1.3vw + 1.3vh)"
            document.getElementById('menu_text').innerHTML = "No cóż, odwieszasz miecz na kołek, wkładasz ciepłe kapcie i zbierasz siły na kolejną przygodę :)"
            console.log("Exit");
        }
        if (textNode.id === 9) {
            document.body.style.backgroundImage="url('images/in_game/Library.jpg')"
            document.getElementById("support_image").src="images/in_game/krysztal.png"
        }
        if (textNode.id === 11) {
            document.getElementById("support_image").src="images/in_game/MAge.jpg"
        }
        if (textNode.id === 15) {
            document.body.style.backgroundImage="url('images/in_game/Marshland.jpg')"
            document.getElementById("support_image").src="images/in_game/amulet.png"
            var throne_room_music = document.getElementById('throne_room_music')
            throne_room_music.pause()
            var swamp_ambience = document.getElementById('swamp_ambience')
            swamp_ambience.play()
        }
        if (textNode.id === 16) {
            document.body.style.backgroundImage="url('images/in_game/Marshland.jpg')"
            document.getElementById("support_image").src="images/in_game/cloak.png"
            var throne_room_music = document.getElementById('throne_room_music')
            throne_room_music.pause()
            var swamp_ambience = document.getElementById('swamp_ambience')
            swamp_ambience.play()
        }
        if (textNode.id === 18) {
            document.body.style.backgroundImage="url('images/in_game/cave.jpg')"
            var swamp_ambience = document.getElementById('swamp_ambience')
            swamp_ambience.pause()
            var cave_singing = document.getElementById('cave_singing')
            cave_singing.play()
            cave_singing.volume = 0.2;
        }
        if (textNode.id === 21) {
            var cave_singing = document.getElementById('cave_singing')
            cave_singing.pause()
            var sword_fight = document.getElementById('sword_fight')
            sword_fight.play()
            document.getElementById("support_image").src="images/in_game/BBEG2.jpg"
        }
        if (textNode.id === 22) {
            document.body.style.backgroundImage="url('images/in_game/Marshland.jpg')"
            var sword_fight = document.getElementById('sword_fight')
            sword_fight.pause()
            var swamp_ambience = document.getElementById('swamp_ambience')
            swamp_ambience.play()
        }
        if (textNode.id === 24) {
            document.getElementById('game_container').style.display='none'
            document.getElementById('bottom_menu_container').style.display='none'
            document.getElementById('menu_container').style.display='inline-block'
            document.getElementById('menu_option_buttons').style.display='none'
            document.getElementById("support_image_container").style.display="none"
            document.getElementById('title_div').style.left="1.5%"
            document.getElementById('menu_text').style.fontSize="calc(1.3vw + 1.3vh)"
            document.getElementById('menu_text').innerHTML = "Dziękujemy za ukończenie Aktu I !\nDo zobaczenia w Akcie II !"
            console.log("Exit");
        }
    })
}

function showOption(option) {
    return true
}

//Funkcja dokonania wyboru, która nadpisuje stan oraz wyświetla następny tekst i opcje
function selectOption(option){
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}
//Zbiór fragmentów narracji wraz z możliwymi wyborami i definicją następstwa oraz z ustawieniem statusu
const textNodes = [
    {
        id: 1,
        text: 'Mamy rok 1420, Niepodległe Księstwo Bardvalii niegdyś uważane za najwspanialsze państwo na kontynencie. Dziś niestety blady cień dawnej chwały. Z Nienacka Efemeryczne Kryształy, które przez wieki dawały mieszkańcom Bardvalii poczucie bezpieczeństwa zaczęły się podejrzanie zachowywać. Świadkowie donoszą, iż kiedyś piękne, purpurowe kryształy połyskujące delikatnym białym światłem stały się poczerniały a ich dawny blask zanikł.',
        options: [
            {
                text: 'Kontynuuj',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Od tamtego momentu liczba potworów się zwiększyła a i bogu ducha winni ludzie zaczęli znikać bez śladu. W związku z kryzysową sytuacją Arcyksiążę Jacques Mercioux wezwał na swój dwór wszystkich najemników, awanturników, łowców nagród i poszukiwaczy przygód aby ci odkryli co stoi za tajemniczą sytuacją związaną z Kryształami.',
        options: [
            {
                text: 'Kontynuuj',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Słysząc te nowiny głoszone przez heroldów, wkracza nasz bohater o imieniu Alhen, chcący zyskać przychylność Arcyksięcia oraz znacząco powiększyć swoją „pokaźną” fortunę. Zebrawszy swój rynsztunek, odprawiwszy ostatnie modły, nasz najemnik wyruszył na spotkanie z przeznaczeniem, groźną przygodą i zrządzeniem losu i udał się na spotkanie z władcą.',
        options: [
            {
                text: 'Kontynuuj',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'AKT    I \n \n Lokalizacja: Pałac Arcyksięcia',
        options: [
            {
                text: 'Kontynuuj',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "Arcyksiążę:\n\nSzanowni awanturnicy, najemnicy i poszukiwacze przygód, serdecznie witam was w moim pałacu. Jak dobrze wiecie Efemeryczne Kryształy, które broniły naszego kraju zaczęły się podejrzanie zachowywać co sprawiło, że wzrosła ilość potworów i porwań ludności cywilnej.",
        options: [
            {
                text: 'Kontynuuj',
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: "W związku z zaistniałą sytuacją wezwałem was – najsilniejszych wojowników, najcelniejszych łuczników i najzręczniejszych łotrzyków pod słońcem, byście rozwikłali zagadkę Kryształów. Zapewne wielu z was zginie, lecz jest to poświęcenie na które jestem gotów. Ten śmiałek, któremu się powiedzie i wykona misję dostanie każdą nagrodę jaką sobie zażyczy i zostanie ochrzczony jako Wielki Bohater. A teraz ruszajcie, los naszego kraju spoczywa w waszych rękach.",
        options: [
            {
                text: 'Kontynuuj',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "Czy podejmiesz się tego wyzwania:",
        options: [
            {
                text: 'Nie',
                nextText: 8,
            },
            {
                text: 'Tak',
                nextText: 9
            }
        ]
    },
    {
        id: 8,
        text: "Czy podejmiesz się tego wyzwania:",
        options: [
            {
                text: '',
            }
        ]
    },
    {
        id: 9,
        text: 'Po odprawie monarchy udajesz się do wielkiej biblioteki by przestudiować stare manuskrypty i almanachy by dowiedzieć się czegoś więcej na temat mistycznych Efemerycznych Kryształów.',
        options:[
        {
            text: 'Kontynuuj',
            nextText: 10,
        }
    ]  
    },
    {
        id: 10,
        text: 'Mija kolejna godzina a ty dalej siedzisz z nosem w księgach gdy nagle napotykasz zdanie w dziwnym niezrozumiałym dla ciebie języku, postanawiasz:',
        options:[
        {
            text: 'Zapytać o ten język Naczelnego Maga',
            nextText: 11,
        },
        {
            text: 'Odnaleźć księgę z tym językiem żeby odszyfrować to zdanie',
            nextText: 12,
        }
    ]
    },
    {
    id: 11,
    text: 'Po odbyciu rozmowy z Magiem dowiadujesz się, że język ten należał do starożytnych alchemików, którzy przed wiekami zamieszkiwali rejony na których znajduje się teraz Morowe Bagno.',
    options:[
        {
        text: 'Kontynuuj',
        nextText: 13,
        },
        ]
    },
    {
        id: 12,
        text: 'Zajmuje ci to chwilę jednak udaje ci się znaleźć księgę w tym języku która dodatkowo została przetłumaczona na język wspólny. Po kolejnej chwili udaje ci się przetłumaczyć zdanie a brzmi ono: „W kolebce Kryształów uwięziony został on …….”. Niestety ostatniego słowa nie jesteś wstanie rozszyfrować, jednak udaje ci się znaleźć wskazówki i kierunek, który kieruje cię na obszar Morowego Bagna.',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 13,
            },
            ]
    },
    {
        id: 13,
        text: 'Po przemyśleniu dalszych kroków postanawiasz udać się na zabójcze Morowe Bagno. Jednak zanim wyruszysz potrzebujesz zdobyć coś co ochroni cię przez przerażającym powietrzem moczarów. W tym celu udajesz się do kwatermistrza. ',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 14,
            },
            ]
    },
    {
        id: 14,
        text: 'Przedstawia ci dwa przedmioty, które powinny sprostać zadaniu. Który wybierzesz?',
        options:[
            {
            text: 'Amulet',
            nextText: 15,
            },
            {
            text: 'Pelerynę',
            nextText: 16,
            },
            ]
    },
    {
        id: 15,
        text: 'Zabrawszy odpowiedni przedmiot, wyruszasz na bagna. Po tygodniu docierasz na skraj mokradeł. Ostrożnie badając grunt stawiasz niepewne kroki. Odczuwasz ulgę bo wybrany przez ciebie artefakt od kwatermistrza sprawia że niebezpieczne morowe powietrze nie robi na tobie żadnego efektu.',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 17,
            },
            ]
    },
    {
        id: 16,
        text: 'Zabrawszy odpowiedni przedmiot, wyruszasz na bagna. Po tygodniu docierasz na skraj mokradeł. Ostrożnie badając grunt stawiasz niepewne kroki. Odczuwasz ulgę bo wybrany przez ciebie artefakt od kwatermistrza sprawia że niebezpieczne morowe powietrze nie robi na tobie żadnego efektu.',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 17,
            },
            ]
    },
    {
        id: 17,
        text: 'Podróżując po bagnie natknąłeś się na jaskinie z której dobiegają dziwne odgłosy, podchodząc bliżej słychać coraz wyraźniej głosy. Skradając się bliżej zrozumiałeś, że głosy recytują jakieś zaklęcie i do tego w dziwnym języku które spotkałeś podczas lektury w bibliotece.',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 18,
            },
            ]
    },
    {
        id: 18,
        text: 'Podchodząc bliżej widać 7 postaci w czarno-fioletowych zakapturzonych szatach stojących malunku na podłodze przypominającym 7-ramienną gwiazdę namalowaną czymś czerwonym. Postanawiasz:',
        options:[
            {
            text: 'Poczekać w ukryciu na rozwój wydarzeń',
            nextText: 19,
            },
            {
            text: 'Wyskoczyć z ukrycia i przerwać ten rytuał',
            nextText: 20,
            },
            ]
    },
    {
        id: 19,
        text: 'Po chwili zakapturzone postacie padają na twarz w bezruchu, gwiazda zaczyna świecić i płonąć. W ułamku sekundy płomienie opadają a w ich miejscu pojawiła się wielka, rogata sylwetka. Odwraca wzrok w twoim kierunku i oznajmia niskim, donośnym głosem:\nWiem, że tam jesteś. Nie chowaj się.',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 21,
            },
            ]
    },
    {
        id: 20,
        text: 'Zanim zdążysz dobiec do pierwszej osoby i zadać cios, wszystkie postacie padają na ziemie, gwiazda zaczyna świecić i płonąć. W ułamku sekundy płomienie opadają a w ich miejscu pojawiła się wielka, rogata sylwetka.',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 21,
            },
            ]
    },
    {
        id: 20,
        text: 'Zanim zdążysz dobiec do pierwszej osoby i zadać cios, wszystkie postacie padają na ziemie, gwiazda zaczyna świecić i płonąć. W ułamku sekundy płomienie opadają a w ich miejscu pojawiła się wielka, rogata sylwetka.',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 21,
            },
            ]
    },
    {
        id: 21,
        text: 'W momencie, w którym istota napotyka twoje spojrzenie swoim wzrokiem, bez chwili zastanowienia rzuca się na ciebie z ogromnym mieczem 2-ręcznym. Wymieniacie cios za ciosem lecz żaden nie jest w stanie trafić celu.',
        options:[
            {
            text: 'Kontynuuj',
            nextText: 22,
            },
            ]
    },
    {   
    id: 22,
    text: 'Niespodziewanie atak pięścią istoty dosięga twojego brzucha a ty przelatujesz przez ściany jaskini jak przez kartki papieru i lądujesz na moczarach. Czujesz jak świat wokół ciebie wiruje, a ból powoli rozmywa się w nicość...',
    options:[
        {
        text: 'Kontynuuj',
        nextText: 23,
        },
        ]
    },
    {   
        id: 23,
        text: 'Ciąg dalszy nastąpi w Akcie II...',
        options:[
            {
            text: 'Zakończ Grę',
            nextText: 24,
            },
            ]
    },
    {   
        id: 24,
        text: '',
        options:[
            {
            text: '',
            },
            ]
    },
]


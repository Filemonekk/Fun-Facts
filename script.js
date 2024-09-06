const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
	'Restauracji w Nowym Jorku jest tak wiele, że wystarczy, by każdego wieczoru przez 54 lata jeść kolację w innej.',
	'LEGO jest największym producentem opon na świecie. Corocznie produkuje ich 306 mln (do samochodów z klocków).'
]


const day = new Date()
currentDay.textContent = day.toLocaleString("pl", { weekday: "long" });

const showRandomFact = () => {
    const number = Math.floor(Math.random() * facts.length-1)
    console.log(number);

    funFact.textContent = facts[number]
} 

showRandomFact()



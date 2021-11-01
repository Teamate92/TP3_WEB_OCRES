// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === ""){
      city = "paris";
    }
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchDayForecast(){
    return axios
    // on a rajouté cnt=4 dans la requête GET, comme décrit dans la documentation de l'api cela nous
    // permet de récupérer la météo pour 4 jours, les trois prochains  plus aujourd'hui.
    // On sépare par & les différentes variables car c'est la norme pour les discerner les uns des autres
    // ainsi il existe plusieurs variables que on envoie à l'API comme la ville, l'unité (ici les mètres)
    // le nombre de jours (cnt) et la clef qui permet de vérifier notre identité
    //
    // En gros dans l'url le "?" permet de dire que la query string commence et le "&" permet de séparer les variables
    // en gros y'a des url qui mènent à des scritps qui sont sur le serveur. Ces scripts peuvent avoir besoin d'infos
    // en mode ce que t'as rentré comme info avant de cliquer sur le lien, ces variables sont définies après le ?
    // exemple je recherche ECE sur google, je rentre ECE dans la barre de recherche google et quand je clic ça m'amène sur
    // l'url suivante :
    // https://www.google.com/search?q=ECE&rlz=1C2CBBF_frFR822FR812&oq=ECE&aqs=chrome ...
    // j'ai coupé la fin mais t'as capté y'a une première variable : q qui a comme valeur "ECE" une autre variable rlz qui a
    // comme valeur "1C2CBBF_frFR822FR812" etc
    // donc ici l'API faut lui passer des infos et c'est le meme principe
    // pour savoir ce qu'il faut lui passer on va sur : "https://openweathermap.org/forecast16"
    // y'a les infos
    .get(`${API_URL}?q=${this.city}&units=metric&cnt=4&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}
// https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=balls
//document.querySelector(".btn").addEventListener("click", x => {


document.querySelector(".btn").addEventListener("click", x => {
    let searchText = document.querySelector("input[name='text']").value;
    let urlJSON = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search="+searchText;
fetch(urlJSON).then(response => {

    return response.json();   
}).then( j => {


    for (x in j[1]) {
        let openSearch = j[1][x];
        let openInfo = j[2][x];
        let openLink = j[3][x];
        let entry = "<section><h2>"+openSearch+"</h2><p>"+openInfo+"</p><a>"+openLink+"</a></section>";

        document.querySelector(".result").insertAdjacentHTML('beforeend', entry);
    }
}).catch(err => {
    console.log(err);
})
});
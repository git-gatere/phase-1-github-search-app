document.addEventListener("DOMContentLoaded", ()=> {    
    
    const gitForm = document.querySelector('#github-form');
    gitForm.addEventListener('submit', event=> {
        
        event.preventDefault();
        console.log(event.target.search.value) 
        let name = document.querySelector('#search').value
        
        fetch('https://api.github.com/search/users?q=' + name, {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })
        .then((resp) => resp.json())
        .then((json) => console.log(json));
    })
    })
const URL = 'https://pixabay.com/api';
const MY_KEY = '21944568-357b711266e3368e889ab4e4f';

export default class ApiService {

    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchGallery() {
        return fetch(`${URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`)
            .then(response => response.json())
            .then(({hits})=> {            
                this.incrementPage();
                return hits;
            })
            .catch(error => {
                console.log(error);
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
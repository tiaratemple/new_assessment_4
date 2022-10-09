const books = [
    { author: "Glennon Doyle", title: "Untamed", id: 1},
    { author: "S.E. Hinton", title: "The Outsiders", id: 2},
    { author: "Daniel Black", title: "Don't Cry For Me", id: 3},
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },



    getFortune: (req, res) => {
        const fortunes = ["You are going to ace your test this time.", "You will land your dream job.", "You will master JavaScript.", "You will always be surrounded by true friends.", "You will be healthy and prosperous."];
      
       
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getBooks: (req, res) => {
        res.status(200).send(books)
    },


    addBooks: (req, res) => {
        const new_id =  books.length + 1;
        const book_to_add = {
            author: req.body.author,
            title: req.body.title,
            id: new_id
        }
        books.push(book_to_add);
        res.status(200).send(books)
    },

    deleteBooks: (req, res) => {
        console.log('delete', req.params)
        const book_to_delete = books.find((book_obj) => book_obj.id === req.params.id);
        books.splice(book_to_delete -1, 1);
        res.status(200).send(books)
    }
}   
  

         


    

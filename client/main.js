const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune)

const getBooks = () => {
    axios.get("http://localhost:4000/api/books")
        .then(res => {
            console.log('response', response.data)
            const data = res.data;
            alert(data);

        });
};

document.getElementById("submit").addEventListener("submit", (event) => {
    event.preventDefault();
    let newAuthor = document.getElementById('book-author').value;
    let newTitle = document.getElementById('book-title').value;
    const newBook = {
        author: newAuthor,
        title: newTitle
    }
    axios.post("http://localhost:4000/api/books", {
        author: newAuthor,
        title: newTitle
    })
    .then((response) => {
        console.log('response', response)
    })
    .catch((error) => {
        console.log(error)
    })
})

const deleteBooks = (id) => {
    axios.delete(`/api/books/:${id}`)
    .then((response) => {
        console.log('response', response)
    })
    .catch((error) => {
        console.log(error)
    })
}


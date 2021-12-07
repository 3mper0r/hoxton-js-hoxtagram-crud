const state = {
    images: [],
};

const imageContainer = document.querySelector('.image-container')

function getImages() {
    return fetch("http://localhost:3000/images").then((response) =>
        response.json()
    );
}
getImages().then(function (imagesFromServer) {
    state.images = imagesFromServer

    renderImageCard();
});

// {/* <article class="image-card">
//         <h2 class="title">Title of image goes here</h2>
//         <img src="./assets/image-placeholder.jpg" class="image" />
//         <div class="likes-section">
//           <span class="likes">0 likes</span>
//           <button class="like-button">♥</button>
//         </div>
//         <ul class="comments">
//           <li>Get rid of these comments</li>
//           <li>And replace them with the real ones</li>
//           <li>From the server</li>
//         </ul> */}


function renderImageCard() {

    for (const image of state.images) {

        const imageCard = document.createElement('article')
        imageCard.setAttribute('class', 'image-card')

        const header = document.createElement('h2')
        header.setAttribute('class', 'title')
        header.textContent = image.title

        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', image.image)
        imageEl.setAttribute('class', 'image')

        const likesDiv = document.createElement('div')
        likesDiv.setAttribute('class', 'likes-section')

        const likesSpan = document.createElement('span')
        likesSpan.setAttribute('class', 'likes')
        likesSpan.textContent = '0 likes'

        const likesButton = document.createElement('button')
        likesButton.setAttribute('class', 'like-button')
        likesButton.textContent = '♥'

        // <form class="comment-form">
        //   <input
        //     class="comment-input"
        //     type="text"
        //     name="comment"
        //     placeholder="Add a comment..."
        //   />
        //   
        // </form>


        // likesButton.addEventListener('click', function {

        // })

        const ulComments = document.createElement('ul')
        ulComments.setAttribute('class', 'comments')

        for (const coment of image.comments) {
            const commentLi = document.createElement('li')

            ulComments.append(commentLi)
            commentLi.textContent = coment.content

            const postComment = document.querySelector('.comment-form')
            const formEl = document.createElement('form')
            formEl.setAttribute('class', 'comment-form')
            const inputEl = document.createElement('input')
            inputEl.setAttribute('class', 'comment-input')
            inputEl.setAttribute('type', 'text')
            inputEl.setAttribute('name', 'comment')
            inputEl.setAttribute('placeholder', 'Add a comment...')
            const commentButton = document.createElement('buton')
            commentButton.setAttribute('class', 'comment-button')
            commentButton.setAttribute('type', 'submit')
            commentButton.textContent = 'Post'

            imageCard.append(header, imageEl, likesDiv, ulComments)

            likesDiv.append(likesSpan, likesButton)
            imageContainer.append(imageCard)



            const dltButon = document.createElement('button')
            dltButon.textContent = 'X'
            dltButon.addEventListener('click', function () {
                dltButon.onclick == coment.remove
                renderImageCard()

                coment.append(dltButon)
            })
        }



    }

}


// function getLikes() {
//     return fetch("http://localhost:3000/images")

// }
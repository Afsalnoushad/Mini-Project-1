    (function(){
        var detailsForm = document.querySelector('#destination_details_form');
        detailsForm.addEventListener('submit', handleFormSubmit);
        function handleFormSubmit(event){
            event.preventDefault();
    
            var destName = event.target.elements['name'].value;
            var destLocation = event.target.elements['location'].value;
            var destPhoto = event.target.elements['photo'].value;
            var destDescription = event.target.elements['description'].value;
    
            for(var i=0 ; i<detailsForm.length ; i++){
                detailsForm.elements[i].value = "";
            }
    
            //create card here. . .
            var destCard = createDestinationCard(destName,destLocation,destPhoto,destDescription);
    
            var wishListContainer = document.getElementById('destinations_container');
            if(wishListContainer.children.length === 0){
                document.getElementById('title').innerHTML= "My Wishlist";
            }
            // add the card here
            document.querySelector('#destinations_container').appendChild(destCard);
    
    }
    
    function createDestinationCard(name,location,photoUrl,description){
            var card = document.createElement('div');
            card.className= "card";
            
            var img = document.createElement('img');
            img.setAttribute('alt', name);
    
            var constantPhotoUrl = "images/signpost.jpg";
    
            if(photoUrl.length === 0){
                img.setAttribute('src',constantPhotoUrl);
            }
            else{
                img.setAttribute('src',photoUrl);
            }
    
            card.appendChild(img);
    
            var cardBody = document.createElement('div');
            cardBody.className = "card-body";
    
            var cardTtile = document.createElement('h3');
            cardTtile.innerText= name;
            cardBody.appendChild(cardTtile);
    
            var cardSubTitle = document.createElement('h4');
            cardSubTitle.innerHTML= location;
            cardBody.appendChild(cardSubTitle);
    
            if(description.length !=0 ){
                var cardText = document.createElement('p');
                cardText.className = "card-text";
                cardText.innerText = description;
                cardBody.appendChild(cardText); 
            }
    
            var cardDeleteButton = document.createElement('button');
            cardDeleteButton.innerText = "Remove";
    
            cardDeleteButton.addEventListener('click', removeDestination);
            cardBody.appendChild(cardDeleteButton);
    
            card.appendChild(cardBody);
    
            return card;
        }
    function removeDestination(event){
            var card = event.target.parentElement.parentElement;
            card.remove();
    }
    
    }());
   




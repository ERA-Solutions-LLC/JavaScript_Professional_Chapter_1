  const card = document.getElementById('users-list');
  const list = document.createDocumentFragment();
  const api_url = 'https://jsonplaceholder.typicode.com/users';

  
  async function getApi(url) {
   await fetch(url)
    .then((response) => {
      if(response) {
        hideLoader();
        return response.json();
      }
      
      
    })
    .then((data) => {
      let users = data;

      users.forEach(function(user) {
        let userCard = document.createElement('section');
        let name = document.createElement('h2');
        let email = document.createElement('p');
        let company = document.createElement('p');
        let catchPhrase = document.createElement('p');
        let password = document.createElement('p');

        name.textContent = `Name: ${user.name}`;
        email.textContent = `Email: ${user.email}`;
        company.textContent = `Company: ${user.company.name}`;
        catchPhrase.textContent = `Catch phrase: ${user.company.catchPhrase}`
        password.textContent = `Password: ${user.password}`;

        userCard.id = 'users';
        userCard.classList.add('card')
        

        userCard.appendChild(name);
        name.classList.add('card-title');
        userCard.appendChild(email);
        email.classList.add('card-text');
        userCard.appendChild(company);
        email.classList.add('card-text');
        userCard.appendChild(catchPhrase);
        email.classList.add('card-text');
        userCard.appendChild(password);
        password.classList.add('card-text');
        
        list.appendChild(userCard);
        
        userCard.style.width = '50vw'
        userCard.style.margin = 'auto'
        userCard.style.marginTop = '15%'
        userCard.style.padding = '2%'
        
        
      });
      console.log(card)
      card.appendChild(list);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  getApi(api_url)
  
    let hideLoader = () => { 
      document.getElementById('loading').style.display = 'none';
  }



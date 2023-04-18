fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))

const countriesDiv = document.getElementById('countries');

const displayCountries = countries => {
    
    countries.map(function(data){

        const countryDiv = document.createElement('div');

        
         const countryInfo = `
        
        <h3>${data.name.common}</h3>
        `
        countryDiv.innerHTML = countryInfo;
        countryDiv.className = 'countryDiv';

        countriesDiv.appendChild(countryDiv); 



        
        document.getElementById('searchBtn').addEventListener('click', function(){
            
            const searchField = document.getElementById('searchInput').value;
            const searchDiv = document.getElementById('search');
            
            const identityDiv = document.createElement('div');

            const newElementBtn = document.createElement('button');
           
           if(searchField.toLowerCase() === data.name.common.toLowerCase())
           {
               

                const identity = `
        
                <h3>${data.name.common}</h3>
                <p> ${data.capital}</p>
                <img src="${data.flags.png}">
                <p>Region: ${data.region}</p>
                <p>Continent: ${data.continents}</p
                <p>Population: ${data.population}</p>
                `
                identityDiv.innerHTML = identity;
                identityDiv.className = 'identityDiv';

                searchDiv.appendChild(identityDiv);

                newElementBtn.innerText = "Search new Value"
                newElementBtn.className = 'newBtn';

                searchDiv.appendChild(newElementBtn);

                newElementBtn.addEventListener('click', function(){
                    identityDiv.style.display = 'none';
                    newElementBtn.style.display= 'none';
                })
                
                document.getElementById('searchInput').value = '';
                
            }
            
        })
        

       /*  const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const img = document.createElement('img');

        h4.innerText = data.name.common;
        countryDiv.appendChild(h4);

        p.innerText = data.capital;
        countryDiv.appendChild(p);

        img.innerText = data.flags.png;
        countryDiv.appendChild(img); */

        //console.log(data);
    }) 

}


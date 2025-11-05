let userInfoDiv = document.querySelector("#userInfo");
let loadButton = document.getElementById('loadButton');
loadButton.addEventListener("click", function () {
loadButton.disabled = true;
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.text').textContent = 'Loading...';

    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            return response.json()
        })
        .then(data => {

            // document.querySelector('.loader').style.display = 'none';
            document.querySelector('.text').textContent = 'Load Quote';
                   let totalQuotes = data.quotes.length;
                   let index = Math.floor(Math.random() * totalQuotes);
            let qoutdata = data.quotes[index];
            userInfoDiv.innerHTML = `<p><strong>Quote:</strong> ${qoutdata.quote}</p>
            <p><strong>Author:</strong> ${qoutdata.author}</p>`;
        })
       .catch(error => {
            // --- 4. AGAR KOI ERROR AAYE ---
            
            // Loader hide karo aur button ko chalu karo
            document.querySelector('.loader').style.display = 'none';
            loadButton.disabled = false;
            document.querySelector('.text').textContent = 'Error!';
            
            userInfoDiv.innerHTML = `<p style="color: red;">Data load nahi ho paya.</p>`;
            console.error(error);
        }
    )
})




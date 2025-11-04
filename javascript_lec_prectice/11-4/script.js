let userInfoDiv = document.getElementById('userInfo');
let loadButton = document.getElementById('loadButton');
loadButton.addEventListener('click',function(){
    userInfoDiv.innerHTML = '<h4>Loading... (Data aa raha hai)</h4>';

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://dummyjson.com/quotes/1', true)
xhr.onload = function(){
    if(this.status === 200){
        let qoutdata = JSON.parse(this.responseText)
        userInfoDiv.innerHTML = `
               <p><strong>SUCCESS! Data received via XHR:</strong> </p>
               <p><strong>Quote:</strong> ${qoutdata.quote}</p>
        <p><strong>Author:</strong> ${qoutdata.author}</p>`;

    } else {
            
            userInfoDiv.innerHTML = `
                <h2 style="color: red;">Error Loading Data</h2>
                <p>Request Status: ${xhr.status}. Data nahi mil paya.</p>`;
        }
    }
    xhr.onerror = function() {
      userInfoDiv.innerHTML = '<p style="color: red;">Network Error: Internet connection check karo.</p>';
  }
  xhr.send()
})
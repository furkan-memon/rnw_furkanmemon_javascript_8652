const countryInput = document.getElementById("countryInput")
const getData = document.getElementById("getData")
const result = document.getElementById("result")
const error = document.getElementById("error")


getData.addEventListener('click', CoronaData)

async function CoronaData() {
    const country = countryInput.value.trim()

    result.innerHTML = ""
    error.textContent = ""

    if (!country) {
        error.textContent = "Please Enter Country Name"
        return 
    }


    result.innerHTML = '<div class="loading-indicator text-center p-4 text-gray-500 font-semibold">Fetching data...</div>';

    const url = `https://disease.sh/v3/covid-19/countries/${country}`

    try {
        const response = await fetch(url)
     
        if (!response.ok) {
      
            throw new Error(`Country Not Found (${response.status})`)
        }

        const data = await response.json()
        

        if (data.message && data.message.includes("not found")) {
            throw new Error("Country Not Found")
        }

        result.innerHTML = `
            <div class="text-center bg-gray-50 p-4 rounded-xl shadow data-card">

                <h3 class="text-xl font-semibold mb-2">COVID-19 Report</h3>

                <img class="w-24 h-16 mx-auto border rounded flag-img" src="${data.countryInfo.flag}" alt="${data.country} Flag">
                <h2 class="text-2xl font-bold mt-2">${data.country}</h2>

                <div class="mt-4 grid grid-cols-2 gap-3 stats-grid">

                    <div class="p-3 bg-blue-100 rounded-lg stat-item">
                        <strong class="text-blue-700 stat-label">Cases</strong>
                        <p class="text-xl font-bold stat-value">${data.cases}</p>
                    </div>

                    <div class="p-3 bg-red-100 rounded-lg stat-item">
                        <strong class="text-red-700 stat-label">Deaths</strong>
                        <p class="text-xl font-bold stat-value">${data.deaths}</p>
                    </div>

                    <div class="p-3 bg-green-100 rounded-lg stat-item">
                        <strong class="text-green-700 stat-label">Recovered</strong>
                        <p class="text-xl font-bold stat-value">${data.recovered}</p>
                    </div>

                    <div class="p-3 bg-yellow-100 rounded-lg stat-item">
                        <strong class="text-yellow-700 stat-label">Active</strong>
                        <p class="text-xl font-bold stat-value">${data.active}</p>
                    </div>

                </div>
            </div>
        `
    }
    catch (err) {

        console.error(err);
  
        result.innerHTML = "";
        error.textContent = "Country Not Found. Check spelling and try again!";
    }
}
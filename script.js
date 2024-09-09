document.addEventListener('DOMContentLoaded', function() {

    var url = 'https://restcountries.com/v3.1/all';

    function loadCountries() {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 300) {

                var data = JSON.parse(request.responseText);
                var dropdown = document.getElementById('countryDropdown');

                dropdown.innerHTML = '<option value="">Select a country</option>';

                data.forEach(function(country) {
                    var option = document.createElement('option');
                    option.value = country.cca2;
                    option.textContent = country.name.common;
                    dropdown.appendChild(option);
                });
            } else {
                console.error('Failed to fetch country data. Status:', request.status);
            }
        };

        request.onerror = function() {
            console.error('Network error while fetching country data.');
        };

        request.send();
    }

    loadCountries();
});

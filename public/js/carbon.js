function calc() {
    let numPeople = parseFloat($('#familymember').find("option:selected").text());
    let income = parseFloat($('#income').find("option:selected").text());
    let electricity = parseFloat($('#electricity').val());
    let gas = parseFloat($('#gas').val());
    let oil = parseFloat($('#oil').val());
    let space = parseFloat($('#space').val());
    let result = calcemission(numPeople, electricity, income, gas, oil, space);
    document.getElementById("display").style.display = "block";
    document.getElementById("people").innerText = numPeople;
    document.getElementById("display-text").innerText = result;
}

function calcemission(numPeople, electricity, income, gas, oil, space) {
    const sal_emissions_factor = 0.032;
    const electricity_emissions_factor = 1.37;
    const gas_emissions_factor = 120.61;
    const oil_emissions_factor = 22.37;
    const space_emissions_factor = 0.37;
    if(numPeople < 0){
        throw Error('The number of people should be greater than 0');
    }
    if (typeof numPeople !== 'number' || typeof electricity !== 'number' ||
        typeof gas !== 'number' || typeof oil !== 'number' || typeof space !== 'number') {
        throw Error('The given argument is not a number');
    }
    let result = electricity * electricity_emissions_factor + gas * gas_emissions_factor + oil * oil_emissions_factor
        + space * space_emissions_factor + income * sal_emissions_factor;
    return Math.round(result * numPeople);
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
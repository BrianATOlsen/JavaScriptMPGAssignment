let errors = [];

const isValidNumberic = function(value) 
{
    value = parseFloat(value);
    return !isNaN(value);
}

const txtMiles = document.getElementById('txtMiles');
const txtGallons = document.getElementById('txtGallons');
const calculateButton = document.getElementById('btnCalculate');
const elmTarget = document.getElementById('result');

calculateButton.addEventListener('click', calculateButtonHandler);

function calculateButtonHandler() 
{
    const milesTravelled = txtMiles.value;
    const gallonsUsed = txtGallons.value;
    const result = calculateMPG(milesTravelled, gallonsUsed);
    let resultOutput = ``;

    if (errors.length == 0)
    {
        resultOutput = `<p>Miles travelled: ${milesTravelled} Gallons Used: ${gallonsUsed} MPG: ${result}</p>`;    
    }         
    if (errors.length != 0)
    {
        resultOutput = `<ul style='color:red;'>`;

        errors.forEach(err=>
        {
            resultOutput += `<li>${err}</li>`;
        });

        resultOutput += `</ul>`;
    }
    elmTarget.innerHTML = resultOutput;
}

function calculateMPG(milesTravelled, gallonsUsed) 
{
    errors = [];

    if (!isValidNumberic(milesTravelled) || milesTravelled <= 0)
    {
        errors.push('Miles travelled is not valid');
    }
    if (!isValidNumberic(gallonsUsed) || gallonsUsed <= 0)
    {
        errors.push('Gallons used is not valid');
    }

    let mpg = milesTravelled/gallonsUsed;
    mpg = parseInt(mpg); //Round to whole number
    return mpg;
}
// Mapping מספר → בינארי עבור מים בחישובים
//bin[7-8]-סוכר bin[5-6]-חוזק bin[3-4]-חלב bin[1-2]-מים

const numberToBinary = {
    1: "01",
    2: "10",
    3: "11"
};

// המרה בינארי → דצימלי
function binaryToDecimal(binaryStr) {
    return parseInt(binaryStr, 2);
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// ------------------- קפוצ'ינו -------------------

function orderCappuccino() {

    firebase.database().ref("/toAltera").set(0).then(function() {

        // דיליי של 2000ms אחרי שה-0 נכתב
        setTimeout(function() {

            sugarBin = document.querySelector('input[name="cap_sugar"]:checked').dataset.bin;
            coffeeBin = document.querySelector('input[name="cap_coffee"]:checked').dataset.bin;

            milkInput = document.querySelector('input[name="cap_milk"]:checked');
            milkVal = parseInt(milkInput.dataset.val);
            milkBin = milkInput.dataset.bin;

            waterVal = 4 - milkVal;
            waterBin = numberToBinary[waterVal];

            binary = milkBin + waterBin + sugarBin + coffeeBin;
            decimalValue = parseInt(binary, 2);
            console.log("☕ קפוצ'ינו → בינארי:", binary, "דצימלי:", decimalValue);
            firebase.database().ref("/toAltera").set(decimalValue);
            window.location.href = '/discheck.html';
        }, 2000); // 2000 מילישניות

    });

}




// ------------------- אמריקנו -------------------
function orderAmericano() {
    firebase.database().ref("/toAltera").set(0).then(function() {
        // דיליי של 2000ms אחרי שה-0 נכתב
        setTimeout(function() {
            // סוכר
            sugarBin = document.querySelector('input[name="ame_sugar"]:checked').dataset.bin;

            // חוזק
            coffeeBin = document.querySelector('input[name="ame_coffee"]:checked').dataset.bin;

            // חלב תמיד 00
            milkBin = "00";

            // מים תמיד 11
            waterBin = "11";

            binary = milkBin + waterBin + sugarBin + coffeeBin;

            // המרה לדצימלי
            decimalValue = parseInt(binary, 2);

            console.log("☕ אמריקנו → בינארי:", binary, "דצימלי:", decimalValue);
            firebase.database().ref("/toAltera").set(decimalValue);  
            window.location.href = '/discheck.html';
        }, 2000); // 2000 מילישניות

    });
}



// ------------------- מקיאטו -------------------
function orderMacchiato() {
    firebase.database().ref("/toAltera").set(0).then(function() {
        // דיליי של 2000ms אחרי שה-0 נכתב
        setTimeout(function() {
            
            // קודם סוכר + חוזק
            sugarBin = document.querySelector('input[name="mac_sugar"]:checked').dataset.bin;
            coffeeBin = document.querySelector('input[name="mac_coffee"]:checked').dataset.bin;

            // חלב ומים קבועים 01
            milkBin = "01";
            waterBin = "01";

            binary = milkBin + waterBin + sugarBin + coffeeBin;
            
            // המרה לדצימלי
            decimalValue = parseInt(binary, 2);
            console.log("☕ מקיאטו → בינארי:", binary, "דצימלי:", decimalValue);
            firebase.database().ref("/toAltera").set(decimalValue);  
            window.location.href = '/discheck.html';
        }, 2000); // 2000 מילישניות

    });
}


// ------------------- אספרסו -------------------
function orderEspresso() {
    firebase.database().ref("/toAltera").set(0).then(function() {
        // דיליי של 2000ms אחרי שה-0 נכתב
        setTimeout(function() {
    
            // סוכר
            sugarBin = document.querySelector('input[name="esp_sugar"]:checked').dataset.bin;

            // חוזק
            coffeeBin = document.querySelector('input[name="esp_coffee"]:checked').dataset.bin;

            // חלב תמיד 00
            milkBin = "00";

            // מים – רק 00 או 01
            waterInput = document.querySelector('input[name="esp_water"]:checked');
            waterBin = waterInput ? waterInput.dataset.bin : "00";

            binary = milkBin + waterBin + sugarBin + coffeeBin;

            // המרה לדצימלי
            decimalValue = parseInt(binary, 2);

            console.log("☕ אספרסו → בינארי:", binary, "דצימלי:", decimalValue);
            firebase.database().ref("/toAltera").set(decimalValue);  
            window.location.href = '/discheck.html';
        }, 2000); // 2000 מילישניות

    });

}




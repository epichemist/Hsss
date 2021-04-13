function generateHsss (hisName, herName, metAt, heWore, sheWore, heSaid, sheSaid, atcw) {
    return {
        hisName: hisName,
        herName: herName,
        metAt: metAt,
        heWore: heWore,
        sheWore: sheWore,
        heSaid: heSaid,
        sheSaid: sheSaid,
        atcw: atcw
    };
}

function combineHsss () {
    let n = arguments.length;
    let finalResult = [];
    for (let i=0; i<n; i++) {
        finalResult.push({
            hisName: arguments[i].hisName,
            herName: arguments[(i+1)%n].herName,
            metAt: arguments[(i+3)%n].metAt,
            heWore: arguments[(i+4)%n].heWore,
            sheWore: arguments[(i+5)%n].sheWore,
            heSaid: arguments[(i+6)%n].heSaid,
            sheSaid: arguments[(i+7)%n].sheSaid,
            atcw: arguments[(i+8)%n].atcw,
        });     
    };
    return finalResult;
}

function narrateHsss (array) {
    let n = array.length;
    let finalResult = [];
    for (let i=0; i<n; i++) {
            finalResult.push(
            `${array[i].hisName} met ${array[i].herName} at ${array[i].metAt}. He wore ${array[i].heWore}, and she wore ${array[i].sheWore}. He said, "${array[i].heSaid}" She said, "${array[i].sheSaid}" And the consequences were: ${array[i].atcw}`
        );
    };
    return finalResult;
}



let player1 = generateHsss('Max', 'Smacks', "Shaq's", 'Slacks', 'Khaks', 'Hacks!', 'Facts!', 'They played jacks.');
let player2 = generateHsss('Tim', 'Kim', "Slim's", 'Rims', 'Skims', 'Got any stims?', 'I love my limbs!', 'They went to their own separate gyms.');
let player3 = generateHsss('Zammy', 'Kammie', "Lambie's", 'Jammies', 'Flammies', 'Do you like Scrammies?', 'I ate all the hammies.', 'They lost their mammies.');
let player4 = generateHsss('Carl', 'Marl', "Charles' Collars", 'Wallers', 'Callers', 'Do you like stallers?', 'I only date ballers.', 'They played Star Wars at the mallers.');
let player5 = generateHsss('Will', 'Jill', "Kip's Kennel Swill", 'Dust from the mill', '100 one-dollar bills', 'I like to drill.', 'I once knew a boy name Phil.', "They'd only eat their pickles with dill.");

console.log(narrateHsss(combineHsss(player1, player2, player3, player4, player5)));






// function combineHsss (hsss1, hsss2) {
//     return [
//             { 
//             hisName: hsss1.hisName,
//             herName: hsss2.herName,
//             metAt: hsss1.metAt,
//             heWore: hsss2.heWore,
//             sheWore: hsss1.sheWore,
//             heSaid: hsss2.heSaid,
//             sheSaid: hsss1.sheSaid,
//             atcw: hsss2.atcw,
//             },
//             {
                
//             }
//     ];
// }




// function combineHsss () {
//     let n = arguments.length;
//     let finalResult = [];
//     for (let i=0; i<n; i++) {
//         finalResult.push({});
//         finalResult[i].hisName = arguments[i].hisName;
//         finalResult[i].herName = arguments[(i+1)%n].herName;
//         finalResult[i].metAt = arguments[(i+3)%n].metAt;
//         finalResult[i].heWore = arguments[(i+4)%n].heWore;
//         finalResult[i].sheWore = arguments[(i+5)%n].sheWore;
//         finalResult[i].heSaid = arguments[(i+6)%n].heSaid;
//         finalResult[i].sheSaid = arguments[(i+7)%n].sheSaid;
//         finalResult[i].atcw = arguments[(i+8)%n].atcw;
//     }
//     return finalResult;
// }
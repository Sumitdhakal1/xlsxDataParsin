const xlsx = require('xlsx');
const prompt = require('prompt-sync')();
const fs = require('fs');

const read = xlsx.readFile('Presidents.xlsx');
const ws = read.Sheets['sharingModal2'];
const data = xlsx.utils.sheet_to_json(ws);

const language = prompt("Enter which language do you want your file to be : English Spanish Chinese = ");

let mainData = {};


switch (language) {
    case 'English':
        const enData = data.map(data => data.en);
        data.forEach(dataItem => {
            let mainkey = dataItem.key.split('.');
            mainkey.reduce((obj, key, index) => {
                if (index === mainkey.length - 1) {
                    obj[key] = enData[data.indexOf(dataItem)];
                } else {
                    return obj[key] = obj[key] || {};
                }
            }, mainData);
        });

        // console.log(mainData);
        // console.log(mainData);
        fs.appendFileSync('english.json', JSON.stringify(mainData));
        break;

    case 'Spanish':
        const spanData = data.map(data => data.esp);
        data.forEach(dataItem => {
            let mainkey = dataItem.key.split('.');
            mainkey.reduce((obj, key, index) => {
                if (index === mainkey.length - 1) {
                    obj[key] = spanData[data.indexOf(dataItem)];
                } else {
                    return obj[key] = obj[key] || {};
                }
            }, mainData);
        });

        console.log(mainData);

        // console.log(mainData);
        // console.log(mainData);
        fs.appendFileSync('spanish.json', JSON.stringify(mainData));
        break;

    case 'Chinese':
        const chiData = data.map(data => data.chi);
        data.forEach(dataItem => {
            let mainkey = dataItem.key.split('.');
            mainkey.reduce((obj, key, index) => {
                if (index === mainkey.length - 1) {
                    obj[key] = chiData[data.indexOf(dataItem)];
                } else {
                    return obj[key] = obj[key] || {};
                }
            }, mainData);
        });

        console.log(mainData);

        // console.log(mainData);
        // console.log(mainData);
        fs.appendFileSync('chinese.json', JSON.stringify(mainData));
        break;
}

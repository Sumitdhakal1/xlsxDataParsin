const xlsx = require('xlsx');
const prompt = require('prompt-sync')();
const fs = require('fs');

const read = xlsx.readFile('Presidents.xlsx');
const ws = read.Sheets['sharingModal2'];
const data = xlsx.utils.sheet_to_json(ws);


// const enData = data.map(data => data.en);

// const mainData = {};
// data.forEach(dataItem => {
//     let mainkey = dataItem.key.split('.');
//     let tempObj = mainData;
//     mainkey.forEach((key, index) => {
//         if (index === mainkey.length - 1) {
//             // tempObj[key] = enData[index];
//             tempObj[key] = enData[mainkey.indexOf(key)];

//         } else {
//             tempObj[key] = tempObj[key] || {};
//             tempObj = tempObj[key];
//             console.log(tempObj)
//         }
//     });
// });


// const enData = data.map(data => data.en);

// const mainData = {};
// data.forEach(dataItem => {
//     let mainkey = dataItem.key.split('.');
//     let tempObj = mainData;
//     mainkey.forEach((key, index) => {
//         if (index === mainkey.length - 1) {
//             tempObj[key] = enData[mainkey.indexOf(key)];
//         } else {
//             tempObj[key] = tempObj[key] || {};
//             tempObj = tempObj[key];
//         }
//     });
// });

const language = ("Enter which language do you want your file to be : English Spanish Chinese = ");

switch (language) {
    case 'English':
        const enData = data.map(data => data.en);

        const mainData = {};
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
        fs.writeFileSync('5.json', JSON.stringify(mainData));

    case 'Spanish':
        switch (language) {
            case 'English':
                const spanData = data.map(data => data.esp);

                const mainData = {};
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

                console.log(mainData);

                // console.log(mainData);
                // console.log(mainData);
                fs.writeFileSync('5.json', JSON.stringify(mainData));
        }
       
        case 'Spanish':
        switch (language) {
            case 'Chiness':
                const spanData = data.map(data => data.chi);

                const mainData = {};
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

                console.log(mainData);

                // console.log(mainData);
                // console.log(mainData);
                fs.writeFileSync('5.json', JSON.stringify(mainData));
        }

 }
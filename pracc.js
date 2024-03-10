// const excelToJson = require('convert-excel-to-json');
// const prompt = require('prompt-sync')();
// const fs = require('fs');
// const Data =excelToJson({sourceFile:'Presidents.xlsx'})
// console.log(Data)
const xlsx = require('xlsx');
const prompt = require('prompt-sync')();
const fs = require('fs');

const read = xlsx.readFile('Presidents.xlsx');
const ws = read.Sheets['sharingModal2'];
const data = xlsx.utils.sheet_to_json(ws);


const enData = data.map((data)=>{
    let english = data.en
    return english
})


 const mainData= data.map((data)=>{
     let mainkey = data.key
     mainkey= mainkey.split('.')
      return (mainkey).reduceRight((acc, curr) => ({ [curr]: acc }),{});
    

})



  
function extractData(data, type) {
    const extractedData = {};
  
    data.forEach(obj => {
      if (type in obj) {
        for (const [key, value] of Object.entries(obj[type])) {
          if (!extractedData[key]) {
            extractedData[key] = {};
          }
          Object.assign(extractedData[key], value);
        }
      }
    });
  
    return extractedData;
  }
  
  const tableData = extractData(mainData, "TABLE");
  const assetData = extractData(mainData, "ASSET");
  const sharingModelData = extractData(mainData, "SHARING_MODAL");
  
 
  const allData = {
    TABLE: tableData,
    ASSET: assetData,
    SHARING_MODAL: sharingModelData

  };
  

  fs.writeFileSync('1.json', JSON.stringify(allData));
 
  





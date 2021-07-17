export class FileSave {

    saveFile(content: string, fileName: string, fileType: string) {
        //const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        let fileTypeString = 'text/' + fileType + ';charset=utf-8;'
        //const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const blob = new Blob([content], { type: fileType });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, fileName);
        } else {
            const link = document.createElement('a');
            if (link.download !== undefined) {
                // Browsers that support HTML5 download attribute
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }


    }

    getCsvContent(obj: object[]) {
        const rows: any[] = Array.of(obj);    
        if (!rows || !rows.length) {
          return;
        }
        const separator = ',';
        const keys = Object.keys(rows[0]);
        const csvContent =
          keys.join(separator) +
          '\n' +
          rows.map(row => {
            return keys.map(k => {
              let cell = row[k] === null || row[k] === undefined ? '' : row[k];
              cell = cell instanceof Date
                ? cell.toLocaleString()
                : cell.toString().replace(/"/g, '""');
              if (cell.search(/("|,|\n)/g) >= 0) {
                cell = `"${cell}"`;
              }
              return cell;
            }).join(separator);
          }).join('\n');

        return csvContent;
    }

    downloadFile(data, filename,columns) { 
      let csvContent = this.ConvertToCSV(data,columns);
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {

        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } 
  } 
  ConvertToCSV(objArray, headerList) { 
    debugger;
    console.log ("objArray",objArray);
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    console.log ("array",array);
 let str = '';
 let row = 'S.No,';
 for (let index in headerList) {
  row += headerList[index] + ',';
 }
 row = row.slice(0, -1);
 str += row + '\r\n';
 for (let i = 0; i < array.length; i++) {
  let line = (i+1)+'';
  for (let index in headerList) {
   let head = headerList[index];
   line += ',' + array[i][head];
  }
  str += line + '\r\n';
 }
 return str;
} 
    
}
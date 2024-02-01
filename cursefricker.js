function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

async function downloadAndGetFile(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch file. Status: ${response.status}`);
    }

    const blob = await response.blob();
    //const dataURL = URL.createObjectURL(blob);
    //localStorage.setItem("cursefricker", dataURL);

    console.log(`Modpack downloaded and stored successfully with key: cursefricker`);
    return blob;
  } catch (error) {
    console.error('Error:', error.message);
  }
  return null;
}

function extractZip(zipData) {
  // Check if JSZip is available
  if (typeof JSZip === 'undefined') {
    console.error('JSZip library is not loaded. Please include it in your HTML file.');
    return;
  }


  const zip = new JSZip();
  zip.loadAsync(zipData)
    .then(function (zip) {
      // Extract the contents of the zip file
      var extractedData = {};

      // Iterate through each file in the zip
      zip.forEach(function (relativePath, zipEntry) {
        // Check if it's a file (not a directory)
        if (!zipEntry.dir) {
          // Read the file content
          zip.files[zipEntry.name].async('string')
            .then(function (content) {
              // Store the content in the extractedData object
              extractedData[zipEntry.name] = content;
            });
        }
      });
      return extractedData;
    })
    .catch(function (error) {
      console.error('Error extracting zip file:', error);
    });

  // Read the zip file as an ArrayBuffer
  reader.readAsArrayBuffer(file);
}

function frickIt() {
    const downloadBtn = getElementByXpath("/html/body/div[1]/main/div[2]/div/div[2]/div/a[1]");
    const projectId = getElementByXpath("/html/body/div[1]/main/div[2]/aside/div[2]/section[1]/dl/dd[3]");
    if (downloadBtn === null) return;

    const ogFile = downloadBtn.href;
    downloadBtn.removeAttribute("href");
    downloadBtn.innerHTML = "<img src='https://docs.modrinth.com/img/logo.svg' style='width: 20px'><span>Download</span>"

    downloadBtn.onclick = async function(){
        const zipData = await downloadAndGetFile(`https://www.curseforge.com/api/v1/mods/${projectId.innerText}/files/${ogFile.split("/").pop()}/download`);
        const extractedData = extractZip(zipData);
    }
}

frickIt();

/* we tried
async function getModData(projectID, fileID) {
    const responce = await fetch(`https://www.curseforge.com/api/v1/mods/${projectID}/files/${fileID}`);
    const data = responce.json();
    const jsonData;
    jsonData["path"] = "mods/"+data.fileName;
    jsonData["downloads"] = [`https://www.curseforge.com/api/v1/mods/${projectID}/files/${fileID}/download`]
    jsonData["fileSize"] = data.fileLength
    return jsonData;
}
*/


/*
modrinthData["game"] = "minecraft";
modrinthData["formatVersion"] = 1;
modrinthData["versionId"] = data.version;
modrinthData["name"] = data.name;
modrinthData["dependencies"]["minecraft"] = data.minecraft.version;
var modloader = data.minecraft.modLoaders[0].id.split("-");
modrinthData["dependencies"][modloader[0]] = modloader[1];
/!*
var files = [];
for (let file of data.files) {
    files.push(getModData(file.projectID, file.fileID));
}
modrinthData["files"] = files;
*!/*/

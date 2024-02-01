function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

async function downloadAndStoreFile(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch file. Status: ${response.status}`);
    }

    const blob = await response.blob();
    const dataURL = URL.createObjectURL(blob);
    localStorage.setItem("cursefricker", dataURL);

    console.log(`Modpack downloaded and stored successfully with key: cursefricker`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function frickIt() {
    const downloadBtn = getElementByXpath("/html/body/div[1]/main/div[2]/div/div[2]/div/a[1]");
    const projectId = getElementByXpath("/html/body/div[1]/main/div[2]/aside/div[2]/section[1]/dl/dd[3]");
    if (downloadBtn === null) return;
    
    const ogFile = downloadBtn.href;
    downloadBtn.removeAttribute("href");
    downloadBtn.onclick = async function(){
        await downloadAndStoreFile(`https://www.curseforge.com/api/v1/mods/${projectId.innerText}/files/${ogFile.split("/").pop()}/download`);
    }
}

frickIt();

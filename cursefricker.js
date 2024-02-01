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

  // Create a new instance of JSZip
  var zip = new JSZip();


  // Load the zip file content into JSZip
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

              // Check if all files are processed
              if (Object.keys(extractedData).length === zip.files.length) {
                // Call the callback with the extracted data
                return extractedData;
              }
            });
        }
      });
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

var modrinthData = {};
    var data = {
    "minecraft": {
      "version": "1.18.2",
      "modLoaders": [
        {
          "id": "forge-40.2.9",
          "primary": true
        }
      ]
    },
    "manifestType": "minecraftModpack",
    "manifestVersion": 1,
    "name": "DawnCraft",
    "version": "1.33_f",
    "author": "",
    "files": [
      {
        "projectID": 676418,
        "fileID": 4496901,
        "required": true
      },
      {
        "projectID": 606618,
        "fileID": 3757407,
        "required": true
      },
      {
        "projectID": 484967,
        "fileID": 4019488,
        "required": true
      },
      {
        "projectID": 599436,
        "fileID": 3717878,
        "required": true
      },
      {
        "projectID": 619355,
        "fileID": 3950477,
        "required": true
      },
      {
        "projectID": 509239,
        "fileID": 3832230,
        "required": true
      },
      {
        "projectID": 334098,
        "fileID": 3548401,
        "required": true
      },
      {
        "projectID": 254284,
        "fileID": 3738299,
        "required": true
      },
      {
        "projectID": 475842,
        "fileID": 3936688,
        "required": true
      },
      {
        "projectID": 430642,
        "fileID": 4709670,
        "required": true
      },
      {
        "projectID": 312918,
        "fileID": 3788736,
        "required": true
      },
      {
        "projectID": 480006,
        "fileID": 3777937,
        "required": true
      },
      {
        "projectID": 536660,
        "fileID": 3777944,
        "required": true
      },
      {
        "projectID": 532127,
        "fileID": 4035921,
        "required": true
      },
      {
        "projectID": 689238,
        "fileID": 4032731,
        "required": true
      },
      {
        "projectID": 250398,
        "fileID": 4555742,
        "required": true
      },
      {
        "projectID": 561439,
        "fileID": 4521912,
        "required": true
      },
      {
        "projectID": 638098,
        "fileID": 4638269,
        "required": true
      },
      {
        "projectID": 331936,
        "fileID": 3783096,
        "required": true
      },
      {
        "projectID": 441114,
        "fileID": 4018073,
        "required": true
      },
      {
        "projectID": 656398,
        "fileID": 3921505,
        "required": true
      },
      {
        "projectID": 379887,
        "fileID": 4542080,
        "required": true
      },
      {
        "projectID": 426558,
        "fileID": 3853078,
        "required": true
      },
      {
        "projectID": 605375,
        "fileID": 4558429,
        "required": true
      },
      {
        "projectID": 627557,
        "fileID": 4622053,
        "required": true
      },
      {
        "projectID": 583228,
        "fileID": 4476365,
        "required": true
      },
      {
        "projectID": 60089,
        "fileID": 3578801,
        "required": true
      },
      {
        "projectID": 657831,
        "fileID": 3928470,
        "required": true
      },
      {
        "projectID": 316582,
        "fileID": 3694258,
        "required": true
      },
      {
        "projectID": 271740,
        "fileID": 3929072,
        "required": true
      },
      {
        "projectID": 404468,
        "fileID": 4375188,
        "required": true
      },
      {
        "projectID": 243121,
        "fileID": 3840125,
        "required": true
      },
      {
        "projectID": 920888,
        "fileID": 4787564,
        "required": true
      },
      {
        "projectID": 479296,
        "fileID": 4085734,
        "required": true
      },
      {
        "projectID": 361579,
        "fileID": 3824951,
        "required": true
      },
      {
        "projectID": 382216,
        "fileID": 3991478,
        "required": true
      },
      {
        "projectID": 556372,
        "fileID": 3683954,
        "required": true
      },
      {
        "projectID": 280554,
        "fileID": 4019265,
        "required": true
      },
      {
        "projectID": 250419,
        "fileID": 4277221,
        "required": true
      },
      {
        "projectID": 577462,
        "fileID": 3642600,
        "required": true
      },
      {
        "projectID": 241160,
        "fileID": 3549513,
        "required": true
      },
      {
        "projectID": 908741,
        "fileID": 4819803,
        "required": true
      },
      {
        "projectID": 312040,
        "fileID": 4396879,
        "required": true
      },
      {
        "projectID": 368718,
        "fileID": 3950183,
        "required": true
      },
      {
        "projectID": 606159,
        "fileID": 3754865,
        "required": true
      },
      {
        "projectID": 391701,
        "fileID": 4601859,
        "required": true
      },
      {
        "projectID": 848933,
        "fileID": 4555284,
        "required": true
      },
      {
        "projectID": 239197,
        "fileID": 4461930,
        "required": true
      },
      {
        "projectID": 618562,
        "fileID": 4586115,
        "required": true
      },
      {
        "projectID": 550462,
        "fileID": 4088266,
        "required": true
      },
      {
        "projectID": 566649,
        "fileID": 3959540,
        "required": true
      },
      {
        "projectID": 328085,
        "fileID": 4550986,
        "required": true
      },
      {
        "projectID": 280294,
        "fileID": 3680770,
        "required": true
      },
      {
        "projectID": 479710,
        "fileID": 4690387,
        "required": true
      },
      {
        "projectID": 457252,
        "fileID": 4725244,
        "required": true
      },
      {
        "projectID": 309927,
        "fileID": 4590652,
        "required": true
      },
      {
        "projectID": 404183,
        "fileID": 4028916,
        "required": true
      },
      {
        "projectID": 561087,
        "fileID": 4558359,
        "required": true
      },
      {
        "projectID": 419699,
        "fileID": 4521465,
        "required": true
      },
      {
        "projectID": 520110,
        "fileID": 4035917,
        "required": true
      },
      {
        "projectID": 388172,
        "fileID": 4181370,
        "required": true
      },
      {
        "projectID": 484954,
        "fileID": 3696031,
        "required": true
      },
      {
        "projectID": 223852,
        "fileID": 3807626,
        "required": true
      },
      {
        "projectID": 306770,
        "fileID": 3846086,
        "required": true
      },
      {
        "projectID": 438332,
        "fileID": 3862966,
        "required": true
      },
      {
        "projectID": 570319,
        "fileID": 4279118,
        "required": true
      },
      {
        "projectID": 563928,
        "fileID": 3957976,
        "required": true
      },
      {
        "projectID": 506757,
        "fileID": 3879829,
        "required": true
      },
      {
        "projectID": 657633,
        "fileID": 3925951,
        "required": true
      },
      {
        "projectID": 623560,
        "fileID": 4521572,
        "required": true
      },
      {
        "projectID": 411045,
        "fileID": 4044082,
        "required": true
      },
      {
        "projectID": 382979,
        "fileID": 4614341,
        "required": true
      },
      {
        "projectID": 363703,
        "fileID": 4010650,
        "required": true
      },
      {
        "projectID": 389665,
        "fileID": 3855186,
        "required": true
      },
      {
        "projectID": 597903,
        "fileID": 3768305,
        "required": true
      },
      {
        "projectID": 314905,
        "fileID": 4167384,
        "required": true
      },
      {
        "projectID": 840788,
        "fileID": 4457157,
        "required": true
      },
      {
        "projectID": 289240,
        "fileID": 4428176,
        "required": true
      },
      {
        "projectID": 499826,
        "fileID": 3856125,
        "required": true
      },
      {
        "projectID": 687118,
        "fileID": 4024879,
        "required": true
      },
      {
        "projectID": 291874,
        "fileID": 3693807,
        "required": true
      },
      {
        "projectID": 616354,
        "fileID": 3820306,
        "required": true
      },
      {
        "projectID": 492246,
        "fileID": 4609586,
        "required": true
      },
      {
        "projectID": 523197,
        "fileID": 3763312,
        "required": true
      },
      {
        "projectID": 636540,
        "fileID": 3850446,
        "required": true
      },
      {
        "projectID": 849817,
        "fileID": 4488549,
        "required": true
      },
      {
        "projectID": 433760,
        "fileID": 3739668,
        "required": true
      },
      {
        "projectID": 618298,
        "fileID": 4808233,
        "required": true
      },
      {
        "projectID": 409371,
        "fileID": 3837351,
        "required": true
      },
      {
        "projectID": 509041,
        "fileID": 4695781,
        "required": true
      },
      {
        "projectID": 670986,
        "fileID": 4800858,
        "required": true
      },
      {
        "projectID": 233258,
        "fileID": 3778001,
        "required": true
      },
      {
        "projectID": 289412,
        "fileID": 4398375,
        "required": true
      },
      {
        "projectID": 388800,
        "fileID": 4632727,
        "required": true
      },
      {
        "projectID": 654098,
        "fileID": 3972299,
        "required": true
      },
      {
        "projectID": 250363,
        "fileID": 3642382,
        "required": true
      },
      {
        "projectID": 576589,
        "fileID": 3751528,
        "required": true
      },
      {
        "projectID": 556448,
        "fileID": 3984913,
        "required": true
      },
      {
        "projectID": 268655,
        "fileID": 4066389,
        "required": true
      },
      {
        "projectID": 377088,
        "fileID": 4029052,
        "required": true
      },
      {
        "projectID": 456640,
        "fileID": 3699151,
        "required": true
      },
      {
        "projectID": 465575,
        "fileID": 3778231,
        "required": true
      },
      {
        "projectID": 411571,
        "fileID": 4328883,
        "required": true
      },
      {
        "projectID": 412082,
        "fileID": 4548315,
        "required": true
      },
      {
        "projectID": 448367,
        "fileID": 4103621,
        "required": true
      },
      {
        "projectID": 548599,
        "fileID": 3906977,
        "required": true
      },
      {
        "projectID": 631016,
        "fileID": 3950598,
        "required": true
      },
      {
        "projectID": 815548,
        "fileID": 4558180,
        "required": true
      },
      {
        "projectID": 570463,
        "fileID": 4171283,
        "required": true
      },
      {
        "projectID": 551586,
        "fileID": 4418426,
        "required": true
      },
      {
        "projectID": 561625,
        "fileID": 4063132,
        "required": true
      },
      {
        "projectID": 289466,
        "fileID": 4175873,
        "required": true
      },
      {
        "projectID": 237701,
        "fileID": 4408008,
        "required": true
      },
      {
        "projectID": 558010,
        "fileID": 3570293,
        "required": true
      },
      {
        "projectID": 250498,
        "fileID": 4142172,
        "required": true
      },
      {
        "projectID": 529529,
        "fileID": 4008260,
        "required": true
      },
      {
        "projectID": 521393,
        "fileID": 4732252,
        "required": true
      },
      {
        "projectID": 700485,
        "fileID": 4738904,
        "required": true
      },
      {
        "projectID": 297038,
        "fileID": 4632179,
        "required": true
      },
      {
        "projectID": 258587,
        "fileID": 3683773,
        "required": true
      },
      {
        "projectID": 326818,
        "fileID": 3638852,
        "required": true
      },
      {
        "projectID": 360203,
        "fileID": 3823106,
        "required": true
      },
      {
        "projectID": 353935,
        "fileID": 3809102,
        "required": true
      },
      {
        "projectID": 521590,
        "fileID": 3561221,
        "required": true
      },
      {
        "projectID": 532727,
        "fileID": 3959284,
        "required": true
      },
      {
        "projectID": 280510,
        "fileID": 3801087,
        "required": true
      },
      {
        "projectID": 281316,
        "fileID": 3846382,
        "required": true
      },
      {
        "projectID": 429235,
        "fileID": 4074294,
        "required": true
      },
      {
        "projectID": 550678,
        "fileID": 3672630,
        "required": true
      },
      {
        "projectID": 513688,
        "fileID": 4105134,
        "required": true
      },
      {
        "projectID": 537901,
        "fileID": 3988035,
        "required": true
      },
      {
        "projectID": 831982,
        "fileID": 4730228,
        "required": true
      },
      {
        "projectID": 847273,
        "fileID": 4828349,
        "required": true
      },
      {
        "projectID": 368398,
        "fileID": 3765883,
        "required": true
      },
      {
        "projectID": 817709,
        "fileID": 4446913,
        "required": true
      },
      {
        "projectID": 243190,
        "fileID": 4510865,
        "required": true
      },
      {
        "projectID": 535489,
        "fileID": 3775919,
        "required": true
      },
      {
        "projectID": 542294,
        "fileID": 4641227,
        "required": true
      },
      {
        "projectID": 542110,
        "fileID": 3682173,
        "required": true
      },
      {
        "projectID": 463826,
        "fileID": 4567244,
        "required": true
      },
      {
        "projectID": 348521,
        "fileID": 3972426,
        "required": true
      },
      {
        "projectID": 310350,
        "fileID": 3680557,
        "required": true
      },
      {
        "projectID": 544197,
        "fileID": 3799118,
        "required": true
      },
      {
        "projectID": 307152,
        "fileID": 4297619,
        "required": true
      },
      {
        "projectID": 615352,
        "fileID": 3959359,
        "required": true
      },
      {
        "projectID": 663141,
        "fileID": 3966049,
        "required": true
      },
      {
        "projectID": 630620,
        "fileID": 4592939,
        "required": true
      },
      {
        "projectID": 299540,
        "fileID": 3717883,
        "required": true
      },
      {
        "projectID": 817651,
        "fileID": 4428187,
        "required": true
      },
      {
        "projectID": 548115,
        "fileID": 3789218,
        "required": true
      },
      {
        "projectID": 358304,
        "fileID": 3751574,
        "required": true
      },
      {
        "projectID": 317134,
        "fileID": 4570525,
        "required": true
      },
      {
        "projectID": 454372,
        "fileID": 4548460,
        "required": true
      },
      {
        "projectID": 442508,
        "fileID": 4047163,
        "required": true
      },
      {
        "projectID": 410295,
        "fileID": 4514906,
        "required": true
      },
      {
        "projectID": 368223,
        "fileID": 3932280,
        "required": true
      },
      {
        "projectID": 557999,
        "fileID": 4533217,
        "required": true
      },
      {
        "projectID": 687974,
        "fileID": 4554347,
        "required": true
      },
      {
        "projectID": 667464,
        "fileID": 4413137,
        "required": true
      },
      {
        "projectID": 377798,
        "fileID": 3749502,
        "required": true
      },
      {
        "projectID": 331746,
        "fileID": 4111364,
        "required": true
      },
      {
        "projectID": 282639,
        "fileID": 4278213,
        "required": true
      },
      {
        "projectID": 638417,
        "fileID": 4259349,
        "required": true
      },
      {
        "projectID": 548647,
        "fileID": 4812915,
        "required": true
      },
      {
        "projectID": 521932,
        "fileID": 3797980,
        "required": true
      },
      {
        "projectID": 581495,
        "fileID": 4578744,
        "required": true
      },
      {
        "projectID": 485681,
        "fileID": 3579662,
        "required": true
      },
      {
        "projectID": 813369,
        "fileID": 4423634,
        "required": true
      },
      {
        "projectID": 495476,
        "fileID": 4707477,
        "required": true
      },
      {
        "projectID": 704584,
        "fileID": 4092299,
        "required": true
      },
      {
        "projectID": 227795,
        "fileID": 4466171,
        "required": true
      },
      {
        "projectID": 536348,
        "fileID": 3810720,
        "required": true
      },
      {
        "projectID": 551736,
        "fileID": 3817266,
        "required": true
      },
      {
        "projectID": 852665,
        "fileID": 4569845,
        "required": true
      },
      {
        "projectID": 404465,
        "fileID": 4396792,
        "required": true
      },
      {
        "projectID": 631401,
        "fileID": 3855148,
        "required": true
      },
      {
        "projectID": 531761,
        "fileID": 4442615,
        "required": true
      },
      {
        "projectID": 682881,
        "fileID": 4469705,
        "required": true
      },
      {
        "projectID": 940253,
        "fileID": 4879935,
        "required": true
      },
      {
        "projectID": 910506,
        "fileID": 4747651,
        "required": true
      },
      {
        "projectID": 576368,
        "fileID": 3912773,
        "required": true
      },
      {
        "projectID": 576124,
        "fileID": 4377932,
        "required": true
      },
      {
        "projectID": 599116,
        "fileID": 4578894,
        "required": true
      },
      {
        "projectID": 437409,
        "fileID": 4709663,
        "required": true
      },
      {
        "projectID": 361276,
        "fileID": 4465167,
        "required": true
      },
      {
        "projectID": 499980,
        "fileID": 3842421,
        "required": true
      },
      {
        "projectID": 558905,
        "fileID": 3936081,
        "required": true
      },
      {
        "projectID": 375088,
        "fileID": 3926737,
        "required": true
      },
      {
        "projectID": 421850,
        "fileID": 4428184,
        "required": true
      },
      {
        "projectID": 475117,
        "fileID": 3755834,
        "required": true
      },
      {
        "projectID": 496394,
        "fileID": 3756127,
        "required": true
      },
      {
        "projectID": 526854,
        "fileID": 3706539,
        "required": true
      },
      {
        "projectID": 510089,
        "fileID": 3777934,
        "required": true
      },
      {
        "projectID": 398521,
        "fileID": 4679315,
        "required": true
      },
      {
        "projectID": 535096,
        "fileID": 3785691,
        "required": true
      },
      {
        "projectID": 503839,
        "fileID": 3549465,
        "required": true
      },
      {
        "projectID": 309674,
        "fileID": 4055445,
        "required": true
      },
      {
        "projectID": 422301,
        "fileID": 4808057,
        "required": true
      },
      {
        "projectID": 592449,
        "fileID": 4432693,
        "required": true
      },
      {
        "projectID": 618841,
        "fileID": 3795925,
        "required": true
      },
      {
        "projectID": 446253,
        "fileID": 3804089,
        "required": true
      },
      {
        "projectID": 888068,
        "fileID": 4757967,
        "required": true
      },
      {
        "projectID": 551894,
        "fileID": 4358571,
        "required": true
      },
      {
        "projectID": 310111,
        "fileID": 4812880,
        "required": true
      },
      {
        "projectID": 771275,
        "fileID": 4487504,
        "required": true
      },
      {
        "projectID": 257814,
        "fileID": 4629846,
        "required": true
      },
      {
        "projectID": 390717,
        "fileID": 4421814,
        "required": true
      },
      {
        "projectID": 506624,
        "fileID": 3598838,
        "required": true
      },
      {
        "projectID": 407174,
        "fileID": 3759881,
        "required": true
      },
      {
        "projectID": 261251,
        "fileID": 3800660,
        "required": true
      },
      {
        "projectID": 579116,
        "fileID": 4412129,
        "required": true
      },
      {
        "projectID": 504908,
        "fileID": 3778233,
        "required": true
      },
      {
        "projectID": 225738,
        "fileID": 3820503,
        "required": true
      },
      {
        "projectID": 288885,
        "fileID": 4030000,
        "required": true
      },
      {
        "projectID": 551520,
        "fileID": 3750013,
        "required": true
      },
      {
        "projectID": 310029,
        "fileID": 3855514,
        "required": true
      },
      {
        "projectID": 690339,
        "fileID": 4062998,
        "required": true
      },
      {
        "projectID": 608235,
        "fileID": 3919398,
        "required": true
      },
      {
        "projectID": 591388,
        "fileID": 4559075,
        "required": true
      },
      {
        "projectID": 233019,
        "fileID": 4019126,
        "required": true
      },
      {
        "projectID": 228525,
        "fileID": 4556713,
        "required": true
      },
      {
        "projectID": 401955,
        "fileID": 4543053,
        "required": true
      },
      {
        "projectID": 567709,
        "fileID": 4062225,
        "required": true
      },
      {
        "projectID": 387580,
        "fileID": 4279387,
        "required": true
      },
      {
        "projectID": 561277,
        "fileID": 4109310,
        "required": true
      },
      {
        "projectID": 687276,
        "fileID": 4429881,
        "required": true
      },
      {
        "projectID": 463841,
        "fileID": 3919507,
        "required": true
      },
      {
        "projectID": 486392,
        "fileID": 4341461,
        "required": true
      },
      {
        "projectID": 412525,
        "fileID": 3909225,
        "required": true
      },
      {
        "projectID": 385587,
        "fileID": 4570482,
        "required": true
      },
      {
        "projectID": 638111,
        "fileID": 3933410,
        "required": true
      },
      {
        "projectID": 456239,
        "fileID": 3671353,
        "required": true
      },
      {
        "projectID": 821790,
        "fileID": 4594803,
        "required": true
      },
      {
        "projectID": 421377,
        "fileID": 4422017,
        "required": true
      },
      {
        "projectID": 425918,
        "fileID": 3820328,
        "required": true
      },
      {
        "projectID": 465109,
        "fileID": 4307858,
        "required": true
      },
      {
        "projectID": 378802,
        "fileID": 4018606,
        "required": true
      },
      {
        "projectID": 245755,
        "fileID": 4513844,
        "required": true
      },
      {
        "projectID": 276951,
        "fileID": 4398246,
        "required": true
      },
      {
        "projectID": 318857,
        "fileID": 3752127,
        "required": true
      },
      {
        "projectID": 342584,
        "fileID": 4601901,
        "required": true
      },
      {
        "projectID": 560323,
        "fileID": 3669114,
        "required": true
      },
      {
        "projectID": 405076,
        "fileID": 4447075,
        "required": true
      },
      {
        "projectID": 580036,
        "fileID": 4592217,
        "required": true
      },
      {
        "projectID": 267602,
        "fileID": 3933537,
        "required": true
      },
      {
        "projectID": 581652,
        "fileID": 3945799,
        "required": true
      },
      {
        "projectID": 536254,
        "fileID": 4259348,
        "required": true
      },
      {
        "projectID": 324717,
        "fileID": 4800837,
        "required": true
      },
      {
        "projectID": 381736,
        "fileID": 4396963,
        "required": true
      },
      {
        "projectID": 585546,
        "fileID": 4743101,
        "required": true
      },
      {
        "projectID": 495693,
        "fileID": 3810400,
        "required": true
      },
      {
        "projectID": 582327,
        "fileID": 3797990,
        "required": true
      },
      {
        "projectID": 460954,
        "fileID": 4409036,
        "required": true
      },
      {
        "projectID": 448233,
        "fileID": 4406217,
        "required": true
      },
      {
        "projectID": 628345,
        "fileID": 3807498,
        "required": true
      },
      {
        "projectID": 790626,
        "fileID": 4822344,
        "required": true
      },
      {
        "projectID": 659897,
        "fileID": 4631182,
        "required": true
      },
      {
        "projectID": 390986,
        "fileID": 3555718,
        "required": true
      },
      {
        "projectID": 575418,
        "fileID": 3694669,
        "required": true
      },
      {
        "projectID": 345854,
        "fileID": 4325280,
        "required": true
      },
      {
        "projectID": 397443,
        "fileID": 4541335,
        "required": true
      },
      {
        "projectID": 418915,
        "fileID": 3836227,
        "required": true
      },
      {
        "projectID": 257356,
        "fileID": 4561679,
        "required": true
      },
      {
        "projectID": 502786,
        "fileID": 4420644,
        "required": true
      },
      {
        "projectID": 461017,
        "fileID": 4536670,
        "required": true
      },
      {
        "projectID": 626476,
        "fileID": 3800533,
        "required": true
      },
      {
        "projectID": 460819,
        "fileID": 3544496,
        "required": true
      },
      {
        "projectID": 559894,
        "fileID": 4683776,
        "required": true
      },
      {
        "projectID": 511770,
        "fileID": 4590535,
        "required": true
      },
      {
        "projectID": 557796,
        "fileID": 4017699,
        "required": true
      },
      {
        "projectID": 367706,
        "fileID": 4503129,
        "required": true
      },
      {
        "projectID": 324973,
        "fileID": 4437202,
        "required": true
      },
      {
        "projectID": 313970,
        "fileID": 4634636,
        "required": true
      },
      {
        "projectID": 232131,
        "fileID": 4412630,
        "required": true
      },
      {
        "projectID": 551999,
        "fileID": 4373652,
        "required": true
      },
      {
        "projectID": 283644,
        "fileID": 4500363,
        "required": true
      },
      {
        "projectID": 422972,
        "fileID": 4057134,
        "required": true
      },
      {
        "projectID": 482731,
        "fileID": 4020792,
        "required": true
      },
      {
        "projectID": 620723,
        "fileID": 3819824,
        "required": true
      },
      {
        "projectID": 245028,
        "fileID": 4367960,
        "required": true
      }
      {
        "path": "mods/Goblins_Dungeons_1.0.8.jar",
        "hashes": {
          "sha1": "fdac89bcdf5ae6460e06affbcbab9d06163f0c20",
          "sha512": "8ef4abbfe692078a15e9a54b09c43317af5f235d8ea4ee6de6fa3c058f0330f71a7019a8c2af1da1b900d169925f89aa600283b99c03b2307ca2414752b93779"
        },
        "env": {
          "client": "required",
          "server": "required"
        },
        "downloads": [
          "https://cdn.modrinth.com/data/MGKpfWvh/versions/7vdHlLkV/Goblins_Dungeons_1.0.8.jar"
        ],
        "fileSize": 983949
      }
    ],
    "overrides": "overrides"
  }
modrinthData["game"] = "minecraft";
modrinthData["formatVersion"] = 1;
modrinthData["versionId"] = data.version;
modrinthData["name"] = data.name;
modrinthData["dependencies"]["minecraft"] = data.minecraft.version;
var modloader = data.minecraft.modLoaders[0].id.split("-");
modrinthData["dependencies"][modloader[0]] = modloader[1];
/*
var files = [];
for (let file of data.files) {
    files.push(getModData(file.projectID, file.fileID));
}
modrinthData["files"] = files;
*/
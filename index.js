// const puppeteer = require("puppeteer");

// // Login Function Logic
// (async function main() {
//   try {
//     // Configures puppeteer
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.setUserAgent(
//       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
//     );

//     //Navigates to Whatsapp
//     await page.goto("https://web.whatsapp.com/");

//     // //Searches person by title
//     await page.waitForSelector("._1MXsz");
//     await delay(5000);

//     //Change to contact you want to send messages to
//     const contactName = "Caca";
//     await page.click(`span[title='${contactName}']`);
//     await page.waitForSelector("._3uMse");

//     //Finds the message bar and focuses on it
//     const editor = await page.$("div[data-tab='1']");
//     await editor.focus();

//     //Amount of messages you want to send
//     const amountOfMessages = 500;

//     //Loops through cycle of sending message
//     for (var i = 0; i < amountOfMessages; i++) {
//       await page.evaluate(() => {
//         const message = "Are you mad at me? :( ";
//         document.execCommand("insertText", false, message);
//       });
//       await page.click("span[data-testid='send']");
//       await delay(500);
//     }
//   } catch (e) {
//     console.error("error mine", e);
//   }
// })();

// function delay(time) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, time);
//   });
// }




var unirest = require("unirest");

var req = unirest("POST", "https://api.maytapi.com/api/product_id/phone_id/sendMessage");

req.headers({
  "x-maytapi-key": "c9148ca9-c5c2-4b87-ab40-95f06eb9ed51",
  "content-type": "application/json"
});

req.type("json");
req.send({
  "to_number": "905301234567",
  "type": "text",
  "message": "Hello World"  
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
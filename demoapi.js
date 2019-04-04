const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
 const fileName = './public/uploads/a.jpg';
 proccess('./demo/a.jpg');
// Performs text detection on the local file
async function proccess(fileName) {
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    let content = 'content';
    // console.log('result:'+ JSON.stringify(result));
    detections.forEach((text, index) => {
        if(index === 0){
            content = text.description; 
            return {content, json: result}
        }
                
        return {content, json: result}
    });
    return {content, json: result}
}

 module.exports.proccess = proccess;

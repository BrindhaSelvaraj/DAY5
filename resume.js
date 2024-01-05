// QSTN 1-->CREATING JSON (OWN RESUME DATA)
let resumeData = {
      "name": "Brindha",
      "email": "itzmibrindha.com",
      "phone": "+91 95973 26335",
      "address": "4/209 b3 rangasamy street,ganeshapuram, coimbatore",
     "high":"Bsc Information Technology",
     "degree_percentage":"85%",
     "hsc_percentage":"80%",
     "sslc_percentage":"92%",
     "dob":"25-03-2003",
     "programing_skills":"c,c++,html,css,php,mysql,js,python"

}
// QSTN 2 -->USING FOR LOOP
const keys = Object.keys(resumeData);
const length = keys.length;
for (let i = 0; i < length; i++) {
  const key = keys[i];
  console.log(`${key}: ${resumeData[key]}`);
}
// QSTN 2--> USING FOR IN LOOP
console.log("_______________________________________")
for (let key in resumeData) {
      console.log(`${key}: ${resumeData[key]}`);
    }
console.log("_______________________________________")
// QSTN 2-->USING FOR EACH LOOP
    Object.keys(resumeData).forEach(key => {
      console.log(`${key}: ${resumeData[key]}`);
    });
    console.log("_______________________________________")
    //QSTN 2--> USING FOR OF LOOP
    for (const [key, value] of Object.entries(resumeData)) {
      console.log(`${key}: ${value}`);
    }
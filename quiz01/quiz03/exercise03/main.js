// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/`;
    courseList = await fetch(url).then(response => response.json());
    displayResults(courseList);
} 

function displayResults(courses) {
    // your code here.
    console.log(courses);
    let courseEndpoint = baseURL + "?";
    courseEndpoint += "q=" + term + "&type=track";
    console.log(courseEndpoint);

    document.querySelector('#course').innerHTML = "";


    const courseData = await fetch(tracksEndpoint).then(response => response.json());
    console.log(courseData);
    console.log(courseData[0]);
    console.log(courseData[0].name);
 let counter = 0;    
while(counter < 5) {
    const template = `

`;
//document.querySelector('#tracks').innerHTML = template;
document.querySelector('#tracks').insertAdjacentHTML('beforeend',template);
counter++;
}

}



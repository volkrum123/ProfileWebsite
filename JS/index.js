const Education = [
  {
    id: "BC",
    institution: "Belgium Campus iTversity:",
    location: "138 Berg Ave, Heatherdale, Akasia, 0182",
    years: "2023 – Present",
    qualification: "Bachelor of Computing Degree (NQF level 8)",
    link:"First year BC iTversity marks..pdf",
    secondlink:"second year BC iTversity marks.pdf"
  },
  {
    id: "JV",
    institution: "HTS John Vorster:",
    location: "1072 Meyer St, Villieria, Pretoria, 0186",
    years: "2017 – 2021",
    qualification: "National Senior Certificate",
    link:"CamScanner 2025-07-24 11.30.pdf"
  }
];

const EDcon = document.getElementById("EducationGrid");

Education.forEach((item)=>{
  let div = document.createElement('div');
  div.className = item.id;
  let title = document.createElement('h3');
  title.textContent = item.institution;
  let list = document.createElement('ul');
  let location = document.createElement('li');
  location.textContent =`Location: ${item.location}`;
  let years = document.createElement('li');
  years.textContent = `Years: ${item.years}`;
  let qualification = document.createElement('li');
  qualification.textContent = `Qualification: ${item.qualification}`;

  let link = document.createElement("a");
  link.classList.add("link-button");
  link.href= item.link;
  if(item.id=="BC"){
  link.textContent= "First Year Marks";
  }
  else{
    link.textContent= "Matric Certificate";
    link.classList.add("link-button");
  }
  link.target ="_blank";
 
  list.appendChild(location);
  list.appendChild(years);
  list.appendChild(qualification);
  div.appendChild(title);
  div.appendChild(list);
  div.appendChild(link);

  if(item.id=="BC"){
  let link2 = document.createElement("a");
  link2.classList.add("link-button");
  link2.href= item.secondlink;
  link2.textContent= "Second Year Marks";
  link2.target ="_blank";
  div.appendChild(link2);
  }

  EDcon.appendChild(div);
})


const skills = [
   {
    title: "C# Desktop Development",
    details: [
      "Built desktop applications using Object-Oriented Programming (OOP) principles.",
      "Applied the Model-View-Controller (MVC) architectural pattern.",
      "Used Visual Studio 2022 IDE."
    ]
  },
  {
    title: "Web Development",
    details: [
      "Experienced in full-stack development using HTML, CSS & JavaScript.",
      "Worked on both client and server sides using Node.js and Express.js frameworks.",
      "Utilized Visual Studio Code IDE."
    ]
  },
  {
    title: "Java Development",
    details: [
      "Skilled in both web and desktop applications using Java.",
      "Experience with Apache IDEs (NetBeans) and Tomcat servers."
    ]
  },
  {
    title: "Database Design & Development",
    details: [
      "Hands-on experience with relational SQL & NoSQL databases.",
      "Worked with MSSQL, PostgreSQL, Embedded Derby, InfluxDB, and MongoDB.",
      "Used Mongo Shell and MongoDB Compass."
    ]
  }
];

const skillcon = document.getElementById("skillGrid");

skills.forEach((item) => {
  const div = document.createElement("div");
  div.className = "myskill";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const list = document.createElement("ul");
  item.details.forEach(detail => {
    const li = document.createElement("li");
    li.textContent = detail;
    list.appendChild(li);
  });

  div.appendChild(title);
  div.appendChild(list);
  skillcon.appendChild(div);
});

const projects = [
  {
    name: "Electricity Usage Tracking System:",
    description: "A collaborative C# project inspired by the prepaid electricity model. The system tracks daily, weekly, and monthly electricity usage, providing users with clear insights into their consumption patterns and helping them estimate future payments.",
    link: "https://github.com/volkrum123/PRG281-Project.git"
  },
  {
    name: "Student Management System:",
    description: "A C# desktop application built with the .NET Framework that enables full CRUD (Create, Read, Update, Delete) functionality for managing student records through an intuitive forms-based interface.",
    link: "https://github.com/volkrum123/PRG282.git"
  },
  {
    name: "Student Performance Prediction System:",
    description: "A collaborative machine learning project developed in Jupyter Notebooks. It features both supervised and unsupervised models trained on student performance data to predict the grades students are likely to achieve.",
    link: "https://github.com/volkrum123/MLG382-Project1.git"
  },
  {
    name: "Customer Churn Prediction System:",
    description: "A collaborative machine learning project developed in Jupyter Notebooks, focused on building classification models to predict whether a customer will leave (0) or stay (1).",
    link: "https://github.com/volkrum123/MLG382-CustomerChurn.git"
  },
  {
    name: "Server-side Community Portal Website:",
    description: "A collaborative web application project leveraging Node.js and Express.js frameworks to serve dynamic content from a local server, creating an interactive community portal.",
    link: "https://github.com/volkrum123/WPR381-Community-portal.git"
  },
  {
    name: "BC-student Wellness Management Website:",
    description: "A collaborative full-stack web application developed in Java using the NetBeans IDE. It features a user interface for capturing student wellness data, with server-side logic that connects to a PostgreSQL database to perform CRUD operations.",
    link: "https://github.com/volkrum123/NetbeansWeb.git"
  },
  {
    name: "BC Student Wellness Management Desktop:",
    description: "A collaborative full-stack desktop application developed in Java using the NetBeans IDE with the ANT build framework. It utilizes Java Swing for the user interface and Derby DB for data storage, supporting smooth form navigation and full CRUD functionality.",
    link: "https://github.com/volkrum123/PRG381Milestone2.git"
  }
];
const projectcon = document.getElementById("projectGrid")

projects.forEach((item) => {
  const div= document.createElement("div");
  div.className= "PJ";
  const title = document.createElement("h3");
  title.textContent = item.name;
  const des = document.createElement("p");
  des.textContent = `${item.description}\n`;
 const aL = document.createElement("a");
 aL.classList.add("link-button");
 aL.textContent = "Github Repository";
 aL.href = item.link;
 aL.target = "_blank"; // optional: opens in new tab

const link = document.createElement("p");
link.textContent = "Link to project:\n";
link.appendChild(aL)

  div.appendChild(title);
  div.appendChild(des);
  div.appendChild(link);
  projectcon.appendChild(div);
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


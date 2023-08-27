// Sample project data
const projects = [
  {
    title: "Project 1",
    university: "University A",
    location: "City X",
    giftVoucher: 100,
    topics: ["Topic A", "Topic B"]
  },
  {
    title: "Project 2",
    university: "University B",
    location: "City Y",
    giftVoucher: 150,
    topics: ["Topic B", "Topic C"]
  },
  {
    title: "Project 3",
    university: "University C",
    location: "City Z",
    giftVoucher: 75,
    topics: ["Topic A", "Topic D"]
  },
  {
    title: "Project 1",
    university: "University A",
    location: "City X",
    giftVoucher: 100,
    topics: ["Topic A", "Topic B"]
  },
  {
    title: "Project 2",
    university: "University B",
    location: "City Y",
    giftVoucher: 150,
    topics: ["Topic B", "Topic C"]
  },
  {
    title: "Project 3",
    university: "University C",
    location: "City Z",
    giftVoucher: 75,
    topics: ["Topic A", "Topic D"]
  },
  {
    title: "Project 1",
    university: "University A",
    location: "City X",
    giftVoucher: 100,
    topics: ["Topic A", "Topic B"]
  },
  {
    title: "Project 2",
    university: "University B",
    location: "City Y",
    giftVoucher: 150,
    topics: ["Topic B", "Topic C"]
  },
  {
    title: "Project 3",
    university: "University C",
    location: "City Z",
    giftVoucher: 75,
    topics: ["Topic A", "Topic D"]
  },
  // Add more project objects here
];


// Populate project listings
const projectsSection = document.querySelector('.projects-section');

function populateProjects(projectsData) {
  projectsSection.innerHTML = '';

  projectsData.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
      <div class="project-icon">Icon</div>
      <div class="project-details">
        <h2>${project.title}</h2>
        <p>University: ${project.university}</p>
        <p>Location: ${project.location}</p>
        <p>Gift Voucher: $${project.giftVoucher}</p>
        <a href="#">Learn More</a>
      </div>
    `;
    projectsSection.appendChild(projectElement);
  });
}

// Initial project population
populateProjects(projects);

// Filtering based on university, topic, and amount range
const universityFilter = document.getElementById('university-filter');
const topicFilter = document.getElementById('topic-filter');
const amountMin = document.getElementById('amount-min');
const amountMax = document.getElementById('amount-max');
const filterBtn = document.getElementById('filter-btn');

filterBtn.addEventListener('click', () => {
  const filteredProjects = projects.filter(project => {
    const universityValue = universityFilter.value;
    const topicValue = topicFilter.value;
    const minAmount = amountMin.value !== '' ? parseInt(amountMin.value) : 0;
    const maxAmount = amountMax.value !== '' ? parseInt(amountMax.value) : Number.MAX_SAFE_INTEGER;

    return (universityValue === '' || project.university === universityValue) &&
           (topicValue === '' || project.topics.includes(topicValue)) &&
           (project.giftVoucher >= minAmount && project.giftVoucher <= maxAmount);
  });

  populateProjects(filteredProjects);
});

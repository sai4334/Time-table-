let year = '2023';
let semester = 'Fall';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	'CSE': new School('C', 'Computer Science Engineering', []),
	'AIML': new School('B', 'Artificial Intelligence and Machine Learning', []),
	'DS': new School('P', 'Data Science', []),
	'IOT': new School('M', 'Internet of Things', []),
	'CS': new School('CS', 'Cyber Security', []),
	'IT': new School('M', 'Information Technology ', []),
	
};

let courses = {
	// always use A1, A2, ... for degenerates of slot A
	//AIML
	'B201': new Course('Database Management Systems (B3)', 'DBMS', 'A'),
	'B202': new Course('Computer Organization & Operating Systems (LH2)', 'COM', 'B'),

	'B301': new Course('Probability and StatisticS(LH3)', 'P&S', 'C'),
	
	'B303': new Course('Database Management Systems Lab	', 'DBMS LAB', 'D'),

	'B402': new Course('Web development and design(B4)', 'WDD', 'E'),
	'B405': new Course('Web development and design Lab(LH2)', 'WDD LAB', 'F'),
	
	

	
	/* CSE */
	
	'C203': new Course('Web development and design(B4)', 'WDD', 'A'),
	'C207': new Course('Web development and design Lab(LH2)', 'WDD LAB','D'),

	'C301': new Course('App development and design Lab (LH2)', 'ADD LAB', 'B'),
	'C302': new Course('Database Management Systems Lab	', 'DBMS LAB',  'F'),
	'C307': new Course('Discrete Mathematics (LH3)', 'DM', 'E'),

	'C401': new Course('Java Programming  (LH4)', 'JP', 'C'),
	



	/* CS */
	'CS201': new Course('Probability and Statistics (M1)', 'PS', 'A'),
	'CS301': new Course('Java Programming (P126)', 'JP', 'B'),
	'CS461': new Course('Database Management Systems (M5)', 'DBMS', 'D'),
	'CS452 (K1)': new Course('Application Development- Java Explore', 'ADJE', 'C'),
	'CS452 (K2)': new Course('Database Management Systems lab(M5)', 'DBMS LAB ', 'F'),
	'CS213': new Course('Environmental Science (P107)', 'ES', 'E'),


	/* IT */
	'M201': new Course('Discrete Mathematics  (M1)', 'DM', 'E'),
	'M203': new Course('Database Management Systems(M1)', 'DBMS', 'C'),
	'M205': new Course('Web Design & Development  (M1)', 'WDD', 'A'),

	'M302': new Course('App Development – Web Explore (M2)', 'AD', 'B'),
	
	'M305*': new Course('Web Design & Development Lab (M2)', 'WDD LAB', 'F'),
	'M306': new Course('Database Management Systems Lab (M2)', 'DBMS LAB', 'D'),
	

	/* DS */
	'P201': new Course('Probability and Statistics (P107)', 'PS', 'E'),
	'P202': new Course('Data Visualization in R (LH4)', 'DV', 'F'),
	'P207': new Course('Database Management Systems (P126)', 'DBMS', 'B'),
	'P245': new Course('App Development – R Explore (P126)', 'AD', 'D'),

	'P302': new Course('Environmental Science (P107)', 'ES', 'C'),
	'P303': new Course('Database Management Systems Lab (P107)', 'DBMS LAB', 'F'),
	
	/* CMRP */
	'R111': new Course('Discrete Mathematics (CL-001)', 'DM', 'A'),
	'R112': new Course('Database Management Systems (CL-001)', 'DBMS', 'B'),
	'R113': new Course('Web Design & Development(CL-001)', 'WDD', 'C'),
	'R114': new Course('App Development – Web Explore (CL-001)', 'AD', 'E'),
	
	'R116': new Course('Web Design & Development Lab (CL-001)', 'WDD LAB', 'D'),
	'R117': new Course('Database Management Systems Lab (CL-001)', 'DBMS LAB', 'F'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
let colors = [
	'#117733',
	'#44aa99',
	'#d55e00',
	'#88ccee',
	'#0072b2',
	'#ddcc77',
	'#cc6677',
	'#aa4499',
	'#882255',
	'#e69f00'
];

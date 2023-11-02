  
        function showResults() {
            const input = document.getElementById("searchInput");
            const dropdown = document.getElementById("Dropdown");

            dropdown.innerHTML = "";
            const results = ["Indian Institute of Technology Madras",
            "Indian Institute of Technology Delhi",
            "Indian Institute of Technology Bombay",
            "Indian Institute of Technology Kanpur",
            "Indian Institute of Technology Kharagpur",
            "Indian Institute of Technology Roorkee",
            "Indian Institute of Technology Guwahati",
            "Indian Institute of Technology Hyderabad",
            "National Institute of Technology Tiruchirappalli",
            "National Institute of Technology Karnataka",
            "Indian Institute of Technology (Indian School of Mines)",
            "Vellore Institute of Technology",
            "Indian Institute of Technology Indore",
            "Indian Institute of Technology (Banaras Hindu University) Varanasi",
            "Institute of Chemical Technology",
            "Amrita Vishwa Vidyapeetham",
            "Jadavpur University",
            "Anna University",
            "Indian Institute of Technology Ropar",
            "National Institute of Technology Rourkela",
            "Indian Institute of Technology Patna",
            "Indian Institute of Technology Gandhinagar",
            "National Institute of Technology Warangal",
            "Thapar Institute of Engineering and Technology",
            "National Institute of Technology Calicut",
            "Birla Institute of Technology & Science - Pilani",
            "Indian Institute of Engineering Science and Technology",
            "Indian Institute of Technology Bhubaneswar",
            "National Institute of Technology Durgapur",
            "Visvesvaraya National Institute of Technology",
            "Amity University",
            "Siksha `O` Anusandhan",
            "Jamia Millia Islamia",
            "S.R.M. Institute of Science and Technology",
            "Aligarh Muslim University",
            "Delhi Technological University",
            "Malaviya National Institute of Technology",
            "Shanmugha Arts Science Technology & Research Academy",
            "Kalinga Institute of Industrial Technology",
            "Indian Institute of Space Science and Technology",
            "Indian Institute of Technology Mandi",
            "Motilal Nehru National Institute of Technology",
            "Indian Institute of Technology Jodhpur",
            "National Institute of Technology Kurukshetra",
            "Sri Sivasubramaniya Nadar College of Engineering",
            "Birla Institute of Technology",
            "Sardar Vallabhbhai National Institute of Technology",
            "National Institute of Technology Silchar",
            "Dr. B. R. Ambedkar National Institute of Technology",
            "Koneru Lakshmaiah Education Foundation University (K L College of Engineering)",
            "Manipal Institute of Technology",
            "College of Engineering, Pune",
            "PSG College of Technology",
            "International Institute of Information Technology Hyderabad",
            "Sathyabama Institute of Science and Technology",
            "Kalasalingam Academy of Research and Higher Education",
            "Visvesvaraya Technological University",
            "Defence Institute of Advanced Technology",
            "National Institute of Technology Meghalaya",
            "Maulana Azad National Institute of Technology",
            "Chandigarh University",
            "Jawaharlal Nehru Technological University",
            "Indraprastha Institute of Information Technology, Delhi",
            "National Institute of Technology Raipur",
            "M. S. Ramaiah Institute of Technology",
            "Lovely Professional University",
            "Banasthali Vidyapith",
            "Pandit Deendayal Petroleum University",
            "National Institute of Technology Srinagar",
            "Punjab Engineering College (Deemed to be University), Chandigarh",
            "Thiagarajar College of Engineering",
            "National Institute of Technology Patna",
            "Indian Institute of Information Technology Guwahati",
            "College of Engineering (A)",
            "Graphic Era University",
            "International Institute of Information Technology Bangalore",
            "R.V. College of Engineering",
            "Sri Krishna College of Engineering and Technology",
            "Shri Mata Vaishno Devi University",
            "Pandit Dwarka Prasad Mishra Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Jabalpur",
            "Indian Institute of Food Processing Technology (IIFPT)",
            "Veermata Jijabai Technological Institute, (VJTI, Mumbai)",
            "PES University",
            "Manipal University Jaipur",
            "National Institute of Technology Goa",
            "National Institute of Technology, Jamshedpur",
            "Indian Institute of Information Technology Allahabad",
            "Netaji Subhas University of Technology (NSUT)",
            "Panjab University",
            "Kumaraguru College of Technology",
            "University of Petroleum and Energy Studies",
            "National Institute of Technology Agartala",
            "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology",
            "Jaypee Institute of Information Technology",
            "College of Engineering Trivandrum",
            "Bharati Vidyapeeth Deemed University College of Engineering",
            "The Northcap University",
            "B.M.S. College of Engineering",
            "National Institute of Technology Hamirpur",
            "C.V. Raman Global University, Odisha",
            "Siddaganga Institute of Technology",
            "Coimbatore Institute of Technology",
            "Shoolini University of Biotechnology and Management Sciences",
            "Tezpur University",
            "Karunya Institute of Technology and Sciences", 
            "Atal Bihari Vajpayee Indian Institute of Information Technology and Management",
            "Dhirubhai Ambani Institute of Information and Communication Technology",
            "Guru Gobind Singh Indraprastha University",
            "Sri Sairam Engineering College",
            "Rajalakshmi Engineering College",
            "Vignan's Foundation for Science, Technology and Research",
            "B. S. Abdur Rahman Crescent Institute of Science and Technology",
            "Chitkara University",
            "National Institute of Technology Manipur",
            "National Institute of Foundry and Forge Technology (NIFFT)",
            "Veer Surendra Sai University of Technology",
            "Maharaja Sayajirao University of Baroda",
            "Manav Rachna International Institute of Research & Studies",
            "Shri Ramdeobaba College of Engineering and Management",
            "Punjab Technical University",
            "Saveetha Institute of Medical and Technical Sciences",
            "Vishwakarma Institute of Technology",
            "University College of Engineering",
            "Mepco Schlenk Engineering College",
            "Vels Institute of Science, Technology & Advanced Studies (VISTAS)",
            "Dayalbagh Educational Institute",
            "YMCA University of Science & Tech (Formerely YMCA Institute of Engineering)",
            "Government College of Technology",
            "Jaypee University of Information Technology",
            "G. H. Raisoni College of Engineering",
            "PSG Institute of Technology and Applied Research",
            "University College of Engineering",
            "Chaitanya Bharathi Institute of Technology",
            "SR University",
            "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology",
            "The Rashtrasant Tukadoji Maharaj Nagpur University",
            "Sri Krishna College of Technology",
            "NMAM Institute of Technology",
            "P E S College of Engineering",
            "Army Institute of Technology",
            "New Horizon College of Engineering",
            "Vardhaman College of Engineering",
            "Bharatiya Vidya Bhavan`s Sardar Patel Institute of Technology",
            "Pondicherry Engineering College",
            "National Institute of Technology Puducherry",
            "Anurag University",
            "Chandigarh Engineering College",
            "National Institute of Food Technology, Entrepreneurship & Management",
            "Yeshwantrao Chavan College of Engineering",
            "Dr. Vishwanath Karad MIT World Peace University",
            "SVKM`s Narsee Monjee Institute of Management Studies",
            "BMS Institute of Technology & Management",
            "Nirma University",
            "Amity University, Gwalior",
            "CVR College Of Engineering",
            "Government Engineering College, Thrissur",
            "Jain University, Bangalore",
            "Maulana Abul Kalam Azad University of Technology",
            "Institute of Aeronautical Engineering",
            "National Institute of Technology Arunachal Pradesh",
            "Indira Gandhi Delhi Technical University for Women",
            "Sant Longowal Institute of Engineering & Technology",
            "Silicon Institute of Technology (SIT), Bhubaneswar",
            "Kongu Engineering College",
            "Goka Raju Ranga Raju Institute of Engineering & Technology",
            "Annamalai University",
            "Rajiv Gandhi Institute of Petroleum Technology",
            "Nitte Meenakshi Institute of Technology",
            "Institute of Engineering & Management",
            "R.M.K. Engineering College",
            "Noida Institute of Engineering & Technology",
            "Hindustan Institute of Technology and Science (HITS)",
            "Dr. D. Y. Patil Institute of Technology",
            "Guru Nanak Dev University",
            "Sri Ramakrishna Engineering College",
            "KIET Group of Institutions",
            "Galgotias University",
            "Velagapudi Ramakrishna Siddhartha Engineering College",
            "Sharda University",
            "KLE Technological University",
            "Shri G. S. Institute of Technology & Science",
            "North Eastern Regional Institute of Science & Technology",
            "St. Josephs College of Engineering",
            "Lakshmi Narain College of Technology",
            "Centurion University of Technology and Management",
            "Rabindranath Tagore University",
            "National Institute of Technology Uttarakhand",
            "JSS Science and Technology University",
            "Easwari Engineering College",
            "International Institute of Information Technology Bhubaneswar",
            "National Engineering College",
            "Sona College of Technology",
            "C M R Institute of Technology",
            "G.L.Bajaj Institute of Technology and Management",
            "DIT University",
            "The National Institute of Engineering",
            "K. J. Somaiya College of Engineering",
            "Kakatiya Institute of Technology & Science",
            "Walchand College of Engineering",
            "Sri Venkateswara University",
            "Dayananda Sagar College of Engineering",
            "Heritage Institute of Technology",
            "Alliance University",
            "Haldia Institute of Technology",
            "Harcourt Butler Technical University",
            "Maharshi Karve Stree Shikshan Samstha's Cummins College of Engineering for Women",
            "Sri Venkateswara College of Engineering",
            "School of Engineering, Cochin University of Science and Technology",
            "Indian Institute of Information Technology, Design & Manufacturing",
            "Madan Mohan Malaviya University of Technology",
            "Sree Vidyanikethan Engineering College",
            "JNTUA College of Engineering",
            "BNM Institute of Technology",
            "Vasavi College of Engineering",
            "Gayatri Vidya Parishad College of Engineering",
            "G.Pulla Reddy Engineering College",
            "Sri Sai Ram Institute of Technology",
            "Dharmsinh Desai University",
            "The LNM Institute of Information Technology",
            "Guru Jambheshwar University of Science and Technology",
            "Pimpri Chinchwad College of Engineering",
            "Ramrao Adik Institute of Technology",
            "BVRIT Hyderabad",
            "National Institute of Industrial Engineering",
            "Bannari Amman Institute of Technology",
            "Tamil Nadu Veterinary & Animal Sciences University",
            "Saveetha Engineering College",
            "G. B. Pant University of Agriculture and Technology",
            "PSNA College of Engineering and Technology",
            "Bansilal Ramnath Agarwal Charitable Trust`s Vishwakarama Institute of Technology",
            "Narula Institute of Technology",
            "Dr. Ambedkar Institute of Technology",
            "Padmasri Dr. B.V. Raju Institute of Technology",
            "Sri Venkateswara College of Engineering and Technology",
            "Sardar Patel College of Engineering",
            "Shri Vishnu Engineering College for Women",
            "Dr. Mahalingam College of Engineering and Technology",
            "Sagi Ramakrishnam Raju Engineering College",
            "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
            "Basaveshwar Engineering College",
            "Thakur College of Engineering & Technology",
            "Shri Vile Parle Kelavani Mandal`s  Dwarkadas J. Sanghvi College of Engineering",
            "M. G. R. Educational and Research Institute",
            "Dr. B. R. Ambedkar Institute of Technology",
            "Birla Institute of Technology & Science",
            "Indian Institute of Engineering Science and Technology, Shibpur",
            "International Institute of Information Technology",
            "SRM Institute of Science and Technology",
            "R. V. College of Engineering",
            "AU College of Engineering",
            "B. M. S. College of Engineering",
            "NITTE Meenakshi Institute of Technology",
            "Birla Institute of Technology & Science - Pilani",
            "Indian Institute of Engineering Science And Technology, Shibpur",
            "Shanmugha Arts Science Technology & Research Academy (SASTRA)",
            "Thapar University",
            "Sri Sivasubrmaniya Nadar College of Engineering",
            "Indian Institute of Technology (Banaras Hindu University), Varanasi",
            "S.R.M Institute of Science and Technology",
            "National Institute of Industrial Engineering, Mumbai",
            "Zakir Husain College of Engineering & Technology",
            "AMITY University",
            "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
            "Pandit Dwarka Prasad Mishra Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Jabalpur",
            "Malaviya National Institute of Technology, Jaipur",
            "Faculty of Technology & Engineering, The Maharaja Sayajirao University of Baroda",
            "PSNA College of Engineering and Technology, Dindigul",
            "Jaypee University of Information Technology-Solan",
            "C.V. Raman College of Engineering",
            "Maharashtra Institute of Technology, Pune","Sri Sai Ram Engineering College","ST. Joseph's College of Engineering","K.S.Rangasamy College of Technology"];

            const searchTerm = input.value.toLowerCase();
            console.log(results.length);
           
            results.forEach((result) => {
                if (result.toLowerCase().includes(searchTerm)) {
                    const item = document.createElement("div");
                    item.classList.add("search-item");
                    item.innerText = result;
                    item.addEventListener("click", () => {
                        input.value = result;
                        dropdown.style.display = "none";
                    });
                    dropdown.appendChild(item);
                }
            });

            
            if (searchTerm.length > 0) {
                dropdown.style.display = "block";
            } else {
                dropdown.style.display = "none";
            }
        }

      
var string = "INNOV8ORS"; 
var array = string.split("");
var timer;
function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); 

}
frameLooper();
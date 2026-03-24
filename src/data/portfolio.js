export const portfolioData = {
  hero: {
    name: "Adarsh Raj",
    title: "Full-Stack Developer | MERN Stack Developer | Software Developer",
    tagline: "Passionate about building scalable web applications and solving real-world problems using modern technologies.",
    socials: {
      linkedin: "https://www.linkedin.com/in/aadarshrajj/",
      github: "https://github.com/AdarshRajM",
      email: "mailto:adarshrajmanii@gmail.com"
    }
  },
  about: {
    description: "I am a Computer Science Engineering student and Android Developer passionate about software development. I build scalable full-stack applications and mobile apps, work deeply with the MERN stack, Spring Boot, and Android technologies, and develop robust REST APIs. My core focus is on managing databases optimally and solving real-world problems. I continuously learn new technologies and thrive by working effectively in teams to deliver modern, impactful web and mobile solutions.",
    strengths: [
      "Builds scalable full-stack and mobile applications",
      "Works with MERN stack, Spring Boot, and Android",
      "Develops REST APIs",
      "Manages databases",
      "Solves real-world problems",
      "Continuously learns new technologies",
      "Works effectively in teams"
    ]
  },
  skills: {
    programming: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "PHP", "Kotlin", "HTML"],
    frameworks: ["React.js", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS", "Bootstrap"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "Postman", "Figma", "Vercel", "Netlify", "Android Studio", "Render"],
    cs: ["Data Structures and Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Object-Oriented Programming"],
    soft: ["Time Management", "Leadership", "Problem-Solving", "Adaptability", "Quick Learner"]
  },
  experience: [
    {
      role: "MERN Stack Software Intern",
      company: "BPH Technologies LLP",
      mode: "Remote",
      duration: "January 2026 – February 2026",
      description: [
        "Developed a full-stack IT ticket management system using MERN stack (MongoDB, Express, React, Node.js) to efficiently handle issue reporting, tracking, and resolution with features like ticket creation, status updates, and user authentication.",
        "Designed and implemented a responsive frontend using React.js and a robust backend using Node.js and Express, along with RESTful APIs to ensure seamless communication between client and server, while managing application data with MongoDB.",
        "Collaborated under mentor guidance through regular code reviews and feedback sessions, improving code quality, debugging skills, and adopting industry best practices such as modular coding and structured API integration."
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js", "REST API", "Tailwind CSS"],
      certificate: {
        image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800",
        link: "https://drive.google.com/file/d/1ey5LRd7SlkfzHP9hWuSG47PeXoOW773D/view"
      }
    },
    {
      role: "Project Trainee & Volunteer",
      company: "Bachpan: Crafting the Youth",
      mode: "On-site",
      duration: "30 Hours Project",
      description: [
        "Successfully completed intensive training and a hands-on project in the field of Child Rights and Education under the guidance of Mr. Ritesh Kumar Sharma and Nitesh Kashyap.",
        "Got exposed to different organizational processes, contributing with diligence and hard work towards community development goals.",
        "Demonstrated strong communication skills, inquisitiveness, and leadership qualities while engaging in project activities."
      ],
      technologies: ["Child Rights", "Education", "Communication", "Leadership", "Community Development"],
      certificate: {
        image: "https://drive.google.com/thumbnail?id=12HN8Zo3HUUqxSBLuliPi3RMF_i8WKbty&sz=w800",
        link: "https://drive.google.com/file/d/12HN8Zo3HUUqxSBLuliPi3RMF_i8WKbty/view?usp=drive_link"
      }
    }
  ],
  trainings: [
    {
      title: "MongoDB",
      institution: "MongoDB University",
      duration: "Jul 2025 – Aug 2025",
      details: [
        "Completed MongoDB University training with hands-on exposure to NoSQL database design, CRUD operations, indexing, and data modeling.",
        "Acquired practical skills in schema design, performance optimization, and real-world database scenarios to support secure and scalable application development."
      ]
    },
    {
      title: "C++ Programming: OOPs and DSA",
      institution: "CSE Pathshala | Certificate",
      duration: "Jun 2025 – Jul 2025",
      details: [
        "Concluded a 32-day intensive training program in Object-Oriented Programming and Data Structures & Algorithms, solving 50+ algorithmic challenges to enhance problem-solving capabilities and strengthen foundations for competitive programming and software development.",
        "Built 5+ hands-on C++ projects implementing advanced data structures such as trees, graphs, and hash tables, demonstrating proficiency in scalable and efficient code design."
      ]
    },
    {
      title: "Android Application Development",
      institution: "Technical Workshop & Self-Learning",
      duration: "Ongoing",
      details: [
        "Gained hands-on experience in Android Application Development with Kotlin and Java.",
        "Focused on creating intuitive UI/UX with modern Material Design principles, responsive layouts, and managing background processes to build robust mobile applications."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Mani-Edutech – Learning Management System",
      description: "Built a role-based LMS platform using Spring Boot and React. Implemented JWT authentication and enabled course management and pricing control.",
      technologies: ["Java", "Spring Boot", "React.js", "JWT", "MongoDB", "MySQL"],
      image: "/projects/mani_edutech.png",
      github: "https://github.com/AdarshRajM/MANIEDUTECH",
      demo: "https://maniedutech.netlify.app/"
    },
    {
      id: 2,
      title: "AI-Driven Metro Train Scheduling System",
      description: "Developed a metro management platform with real-time tracking, integrated external APIs for live data, and implemented secure authentication.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "/projects/metro_train.png",
      github: "https://github.com/AdarshRajM/AI-Driven-Train-Induction",
      demo: "https://mai-driven-train-induction-planning.vercel.app/"
    },
    {
      id: 3,
      title: "Fit-Track – Exercise & Calorie Tracking System",
      description: "Created a fitness tracking system to record workouts and calories using PHP and MySQL. Built dashboards for performance tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: "/projects/fit_track.png",
      github: "https://github.com/AdarshRajM/Fit-Track",
      demo: "https://fit-track-1b2r.onrender.com"
    },
    {
      id: 4,
      title: "Order Tracking Bot – E-Commerce Platform",
      description: "Developed a shipment tracking system with status updates. Implemented search and timeline visualization.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "API"],
      image: "/projects/order_bot.png",
      github: "https://github.com/AdarshRajM/Order-Track-Bot",
      demo: "https://adorable-lollipop-fd1c74.netlify.app/"
    }
  ],
  achievements: [
    {
      title: "Achieved a 50-day coding streak on LeetCode",
      image: "/leetcode-50days.jpg"
    },
    {
      title: "Earned 5-star rating in Python on HackerRank"
    },
    {
      title: "Earned multiple badges in Problem Solving, C++, Java, C language, and 10 Days of JS"
    }
  ],
  certifications: [
    {
      title: "Mobile App Development (Android Programmer)",
      issuer: "Nasscom Foundation",
      image: "https://drive.google.com/thumbnail?id=1D5qdhy6FlAHyhVAkulx5MTbY2C6OJoZ9&sz=w800",
      link: "https://drive.google.com/file/d/1D5qdhy6FlAHyhVAkulx5MTbY2C6OJoZ9/view?usp=drive_link"
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      image: "https://drive.google.com/thumbnail?id=14IC-s-8TjV1dxB2xnJ9EgBpaxhGFtkkG&sz=w800",
      link: "https://drive.google.com/file/d/14IC-s-8TjV1dxB2xnJ9EgBpaxhGFtkkG/view?usp=drive_link"
    },
    {
      title: "Social Networks",
      issuer: "NPTEL IIT Madras",
      image: "https://drive.google.com/thumbnail?id=1z0716gfTaxLEMFubg41_UNqTgYnuKSpt&sz=w800",
      link: "https://drive.google.com/file/d/1z0716gfTaxLEMFubg41_UNqTgYnuKSpt/view?usp=drive_link"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google | Coursera",
      image: "https://drive.google.com/thumbnail?id=1huStzEUh5J02jLF9D4estK5OFAzAzhMm&sz=w800",
      link: "https://drive.google.com/file/d/1huStzEUh5J02jLF9D4estK5OFAzAzhMm/view?usp=drive_link"
    },
    {
      title: "Technical Certification 1",
      issuer: "Professional Certification",
      image: "https://drive.google.com/thumbnail?id=1ao_a9XRIdUpLhLWU69M9xZ-gRupWM3S5&sz=w800",
      link: "https://drive.google.com/file/d/1ao_a9XRIdUpLhLWU69M9xZ-gRupWM3S5/view?usp=drive_link"
    },
    {
      title: "Technical Certification 2",
      issuer: "Professional Certification",
      image: "https://drive.google.com/thumbnail?id=1Gerv26LDlU3Xas4ObSd81ydsKw4LNPEY&sz=w800",
      link: "https://drive.google.com/file/d/1Gerv26LDlU3Xas4ObSd81ydsKw4LNPEY/view?usp=sharing"
    },
    {
      title: "Technical Certification 3",
      issuer: "Professional Certification",
      image: "https://drive.google.com/thumbnail?id=1wmEUI1yL1fdy6jec_RgIvz6Yt2K37Wmz&sz=w800",
      link: "https://drive.google.com/file/d/1wmEUI1yL1fdy6jec_RgIvz6Yt2K37Wmz/view?usp=drive_link"
    },
    {
      title: "Technical Certification 4",
      issuer: "Professional Certification",
      image: "https://drive.google.com/thumbnail?id=1WGfuy9S0xKf3OvPicVb6xQ8hgcx7EoiV&sz=w800",
      link: "https://drive.google.com/file/d/1WGfuy9S0xKf3OvPicVb6xQ8hgcx7EoiV/view?usp=sharing"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      image: "https://drive.google.com/thumbnail?id=1KREfCzSoOb1KMPwI5fiY8RW6VXpHSwpQ&sz=w800",
      link: "https://drive.google.com/file/d/1KREfCzSoOb1KMPwI5fiY8RW6VXpHSwpQ/view?usp=drive_link"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "2023 – Present"
    }
  ]
};

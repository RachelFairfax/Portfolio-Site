import RaspberryPi from '../../assets/RaspberryPi.jpg';

const projectsData = [
    {
        title: 'VodaMed Full-Stack Group Project',
        date: 'December 2024',
        from: 'Lancaster University',
        desc: 'This was a university project where we were put in groups of 5 and told to create a RICH internet application. We chose to build a pharmacy app written in React and Tailwind CSS. Some notable features include the shop page, dynamically updating basket on the navbar, live RSS feed and integrated ChatBot.',
        mediaType: 'video',
        url: 'https://www.youtube.com/embed/AW1eyBdebpc'
    },
    {
        title: 'Collaborative Distributed Environment Project',
        date: 'March 2025',
        from: 'Lancaster University',
        desc: 'A solo university project where I had to build a Python real-time chat application. I set up a server which initiates clients which can then talk to eachother. The user can send messages from a client via a Tkinter GUI. I used multithreading in this project as well as a number of security measures and fault tolerance.',
        mediaType: 'video',
        url: 'https://www.youtube.com/embed/7oX6KhpBqXs'
    },
    {
        title: 'Raspberry Pi Workshops',
        date: 'January 2024 - April 2025',
        from: 'Vodafone',
        desc: 'As head of the Raspberry Pi team at Vodafone, it was my job to plan and organise workshops teaching employees how to use Raspberry Pis. I taught them how to build circuits and write Python scripts to control them. Some challenges included creating a traffic light sequence with LEDs and using a temperature sensor.',
        mediaType: 'photo',
        url: RaspberryPi
    },
        {
        title: 'Full-Stack Online Bookstore Project',
        date: 'December 2023',
        from: 'Lancaster University',
        desc: 'A solo project where I had to create a website for an online bookstore using the LAMP stack (Linux, Apache, MySQL and PHP) for the backend and JavaScript, HTML and CSS for the frontend. The site allowed users to "purchase" and add new books to the bookstore.',
        mediaType: 'video',
        url: 'https://www.youtube.com/embed/LLfXkm2gBxg'
    }
];

export default projectsData;
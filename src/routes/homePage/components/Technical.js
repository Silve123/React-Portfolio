import './styles/Technical.scss';
import Programmer from './assets/programmer.jpeg';
import WebDev from './assets/webDev.png';
import MobileDev from './assets/mobileDev.png';

const expertiseData = [
    {
        title: 'Software Development',
        image: Programmer,
        text: 'During my studies at WeThinkCode. I gained experience in software development areas such as APIs, Agile and Brownfield development, functional and object-oriented programming, as well as unit testing and acceptance testing. Through hands-on projects and coursework, I developed a deep understanding of how to build effective software solutions that meet customer needs.',
        className: 'softwareDev', // Add the CSS class name
    },
    {
        title: 'Web Development',
        image: WebDev,
        text: 'During my studies at WeThinkCode, I gained valuable experience in web development and obtained certifications in responsive web design and JavaScript algorithms and data structures. Through hands-on projects and coursework, I learned how to build effective, high-quality web solutions that meet customer needs.',
        className: 'WebDev', // Add the CSS class name
    },
    {
        title: 'Mobile Development',
        image: MobileDev,
        text: 'During my studies at WeThinkCode. I gained valuable experience in mobile development, including building user-friendly interfaces, working with various mobile frameworks. Through hands-on projects and coursework, I learned how to build effective, high-quality mobile solutions that meet customer needs and expectations.',
        className: 'MobileDev', // Add the CSS class name
    },
];

function Technical() {
    return (
        <div className="expertiseDiv">
            <div className="dividerDiv">
                {expertiseData.map((item, index) => (
                    <div className={`blockHolder ${index % 2 === 0 ? 'blockHolderLeft' : 'blockHolderRight'}`} key={index}>
                        <div className={`block ${item.className}`}>
                            <div className="imgHoldingDiv">
                                <img src={item.image} alt="Graduation Image" />
                            </div>
                            <div className="blockDiv">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Technical;

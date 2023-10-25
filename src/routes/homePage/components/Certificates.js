import './styles/Certificates.scss';
import CertificateCard from './CertificateCard';


function Certificates(){
    const certificates = [
        {
          name: 'Responsive Web Design',
          description: 'This certificate signifies proficiency in creating web designs that adapt seamlessly to various screen sizes and devices. It covers concepts such as flexible layouts, media queries, and responsive web development practices, ensuring websites look and function optimally on desktops, tablets, and mobile phones.',
          source: 'FreeCodeCamp',
          link: 'https://www.freecodecamp.org/certification/silver915/responsive-web-design',
        },
        {
          name: 'JavaScript Algorithms and Data Structures Certificate',
          description: "This certificate validates expertise in JavaScript's core concepts, algorithms, and data structures. It demonstrates the ability to solve complex coding challenges, work with arrays, objects, and functional programming, and implement data structures like linked lists and trees. It's essential for mastering JavaScript development.",
          source: 'FreeCodeCamp',
          link: 'https://www.freecodecamp.org/certification/silver915/javascript-algorithms-and-data-structures',
        },
        {
          name: 'Introduction to Programming Using Python Certificate',
          description: "This certificate represents proficiency in Python, a versatile and beginner-friendly programming language. It covers fundamental programming concepts, including variables, data types, control structures, and functions. It's an ideal starting point for anyone new to programming and seeking a solid foundation in Python.",
          source: 'HackerRank',
          link: 'https://www.hackerrank.com/certificates/ac3e65cb857a',
        },
      ];
    
    return(
        <div className='holdingCertificates'>
            <div id='mainCertificateHolder'>
                <div id="certificateBackground">
                    <h1>Certificates</h1>
                    <div id="certificatesDiv">
                        {certificates.map((certificate, index) => (
                        <CertificateCard key={index} {...certificate} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates;
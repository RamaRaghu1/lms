import React,{useState} from 'react'
import image1 from "../carouselimages/francis-xavier.jpeg";
import image2 from "../carouselimages/anna.jpeg";
import image3 from "../carouselimages/vels.jpeg";
import image4 from "../carouselimages/government-collge.jpeg";
import image5 from "../carouselimages/sadakathullah-appa-college.jpeg";
import image6 from "../carouselimages/marudhar-kesari-jain-collge.jpeg";
import image7 from "../carouselimages/startuptn.jpeg";
import image8 from "../carouselimages/srm-main.jpeg";
import image9 from "../carouselimages/sivet.jpeg"
import Header from '../components/Header';
const GalleryPage = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(3);
    const [route, setRoute] = useState("Login");


    const gallery = [
        {
            id: 1,
            img: image5,
            tag:"Blockcahin seminar",
            desc:"An engaging blockchain webinar being conducted at Sadakathullah Appa College. The presenter, Miss. Sneha, is passionately explaining the intricacies of blockchain technology to an attentive audience."
        },
       
        {
            id: 2,
            img: image7,
            tag:"Event",
            desc:"A special moment was captured as Kairaa Blockchain Academy took part in the esteemed 'Women in Innovation' event held at KSR Educational Institution, Tiruchengode. "
        },
        {
            id: 3,
            img: image3,
            tag:"Blockcahin seminar",
            desc:"Blockchain Seminar at VELS Institute of Science and Technology, Chennai — A deep dive into 'Exploring the Blockchain World'."
        },
        {
            id: 4,
            img: image4,
            tag:"Blockcahin seminar",
            desc:"Mr. Agilan, CEO of Kairaa Blockchain Academy, presented a momento to the Head of Computer Science Department at Government Arts and Science College, Lalkudi, Trichy, during the blockchain seminar conducted by Kairaa Blockchain Academy."
        },
        {
            id: 5,
            img: image1,
            tag:"Blockcahin seminar",
            desc:"Blockchain webinar being conducted at Francis Xavier Engineering College, Tirunelveli."
        },
        {
            id: 6,
            img: image6,
            tag:"Blockcahin seminar",
            desc:"One-day master workshop on blockchain technologies, held at Marudhar Kesari Jain College in Vaniyambadi, is proudly presented by Kairaa Blockchain Academy."
        },
        {
            id: 7,
            img: image8,
            tag:"Blockcahin seminar",
            desc:"A memorable moment captured during the enlightening Blockchain seminar hosted by Kairaa Blockchain Academy at SRM University."
        },
        {
            id: 8,
            img: image2,
            tag:"Blockcahin seminar",
            desc:"A memorable moment captured when Kairaa Blockchain Academy and Anna University Regional Campus, Tirunelveli, collaborated for a departmental seminar on the 'Blockchain Technology Awareness Program.'"
        },
        {
            id: 9,
            img: image9,
            tag:"Blockcahin seminar",
            desc:"An interactive Blockchain webinar conducted at S.I.V.E.T College, Chennai where Mr. Agilan, the presenter, discussed the fundamentals of blockchain technology, its potential applications, and the future of blockchain technology."
        },
       
    ]
    return (
        <>
        <Header 
    open={open}
    setOpen={setOpen}
    activeItem={activeItem}
    setRoute={setRoute}
    route={route}
    />
        <div className='grid md:grid-cols-3 grid-cols-1 m-8 gap-4'>
            {gallery.map((item) => {
                return (
                    <div key={item.id} className='w-full  p-4 bg-gray-50 flex flex-col gap-4 rounded-lg'>
                        <img className="rounded-lg object-cover h-[300px]" src={item.img} />
                       <p className='w-fit bg-[#DC81A7] px-2 pt-1 rounded-md text-white font-bold font-paraFont text-sm'>{item.tag}</p>
                        <p className='text-lg font-medium font-headingFont'>{item.desc}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default GalleryPage

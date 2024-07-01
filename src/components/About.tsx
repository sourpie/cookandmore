

const About = () => {
  return (
    <div className="mx-5 my-5 flex justify-center items-center">

    <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        <img className="rounded-full border-2" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/63/0a/a5/caption.jpg?w=1200&h=-1&s=1" width={600} />
        <div className="md:w-[40%] w-[80%]">
        <p className=" w-full  whitespace-break-spaces  text-lg">
        <span className=" font-bold">About the Hosts</span><br/>
We, Roopak & Nidhi, are a married couple living in Delhi for over 15 years. We have been passionately hosting the Cultural Exchange & Cooking Experience on various platforms since July 2019. We take pride in showcasing our vibrant culture in the most simple manner while answering any questions they may have. As Indian natives, we're here to build long lasting relationships and bonds with our Guests and wish to help bring people closer together through shared experiences.

          <br />
          <br/>
          <span className=" font-bold">About the Experience</span> <br/>
We always offer the Experience at our beautiful home in Delhi (India). We are available 365 day a year for the Experience. The Experience shall be of 4 hours duration for Breakfast, Lunch & Dinner starting at 9 AM, 1 PM and 5 PM respectively. During the Experience, the Guests get a warm traditional welcome followed by 6-course meal cooking activity. A lot about Indian culture & customs is shared with the Guests during the Experience. We offer best hospitality on town to all our Guests. You can read more about the Experience at the links available on the "Book" Tab.
        </p>
        </div>
        
    </div>
    </div>
  )
}

export default About
//
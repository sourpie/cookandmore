

const About = () => {
  return (
    <div className="mx-5 my-5 flex justify-center items-center">

    <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        <img className="rounded-full border-2" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/63/0a/a5/caption.jpg?w=1200&h=-1&s=1" width={600} />
        <div className="md:w-[40%] w-[80%]">
        <p className=" w-full  whitespace-break-spaces  text-lg">
        <span className=" font-bold">About the Hosts</span><br/>
        Welcome to our home! We're Roopak and Nidhi, a loving couple who've called Delhi home for over 15 years. Since 2019, we've been delighted to share our passion for Indian culture and cuisine with guests from around the world through our Cultural Exchange and Cooking Experience. We take great joy in showcasing the beauty of our heritage in a warm and approachable way, answering questions and fostering meaningful connections. Our goal is to build lasting relationships and bridges between cultures, one delicious meal and shared experience at a time.

          <br />
          <br/>
          <span className=" font-bold">About the Experience</span> <br/>
          Join us in our lovely Delhi home for a unique and immersive experience! We welcome guests 365 days a year to share in our culture and cuisine. Our 4-hour experiences take place at 9 AM, 1 PM, and 5 PM for breakfast, lunch, and dinner respectively. Upon arrival, you'll receive a warm traditional welcome, followed by an engaging 6-course meal cooking activity. Throughout the experience, we'll share insights into Indian customs and traditions, providing a genuine taste of our hospitality. To learn more, please visit the links on our "Book" tab. We look forward to hosting you with the utmost warmth and care!
        </p>
        </div>
        
    </div>
    </div>
  )
}

export default About
//
// Author images
import authorImg from "../images/Cy.jpg";

// Blog post images
import welcomeImg from "../images/halfdome.jpg";

// Author data
const AuthorData = [
  {
    name: "Cam",
    location: "United States",
    posts: 1,
    desc: "Software engineer, tennis enthusiast, Miata lover, and perpetual tinkerer. Always diving deep into new obsessions.",
    img: authorImg,
  },
];

// Blog posts
const BlogPosts = [
  {
    id: "welcome-to-always-tinkering",
    img: welcomeImg,
    tag: "Life",
    title: "Welcome to Always Tinkering",
    desc: "An introduction to this space where I'll be sharing my journey through tennis, Miatas, travel, gear, and all the things I can't stop tinkering with.",
    date: "January 25, 2026",
    posttype: "feature",
    author: "Cam",
    authorImg: authorImg,
    readTime: "4 min read",
    content: `
      <p>Hey there! Welcome to Always Tinkering, my corner of the internet where I document the things I can't stop thinking about, learning about, and yes—tinkering with.</p>

      <h3>Who am I?</h3>
      <p>I'm a software engineer by trade, which means I spend my days solving problems, writing code, and breaking things (hopefully in staging, not production). But that problem-solving mindset doesn't stop when I close my laptop. It follows me everywhere—onto the tennis court, into my Miata, across travel destinations, and deep into rabbit holes about gear and equipment.</p>

      <h3>What is this blog about?</h3>
      <p>This blog is where I share my journey through the things I'm passionate about:</p>

      <p><strong>Tennis:</strong> I've fallen hard for this sport. From gear reviews and string setups to match analysis and my own journey improving my game, tennis has become a constant in my life. Expect detailed breakdowns, recommendations, and the occasional story from the court.</p>

      <p><strong>Miatas:</strong> There's something special about a lightweight roadster with the top down. Whether it's a Sunday drive, a modification project, or just admiring the simplicity of the design, I'll be sharing my adventures with the world's favorite roadster.</p>

      <p><strong>Travel:</strong> Exploring new places, finding hidden gems, and documenting the journey. Travel posts will cover everything from weekend trips to longer adventures, always with an eye for the details that make a place special.</p>

      <p><strong>Gear & Equipment:</strong> I'm the kind of person who researches a purchase for weeks, reads every review, and still second-guesses the decision. That obsessive attention to detail means I end up learning a lot about the gear I use—and I want to share those insights here.</p>

      <h3>Why "Always Tinkering"?</h3>
      <p>Because that's what I do. I tinker with code, with tennis racquet setups, with car modifications, with camera settings, with coffee brewing methods—you name it. I'm constantly optimizing, experimenting, and trying to understand how things work at a deeper level. Sometimes it's productive. Sometimes it's just fun. Either way, it's who I am.</p>

      <h3>What to expect</h3>
      <p>I'm not trying to be the definitive expert on any of these topics. Instead, think of this blog as a fellow enthusiast sharing what they've learned along the way. Expect honest opinions, detailed breakdowns, and the occasional deep dive into topics that probably don't warrant that level of analysis (but I'm doing it anyway).</p>

      <p>Thanks for stopping by. I'm excited to share this journey with you.</p>

      <p>Let's tinker.</p>

      <p><em>— Cam</em></p>
    `,
  },
];

export default { AuthorData, BlogPosts };

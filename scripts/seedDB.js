const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hobbies"
);

const storeSeed = [
  {
    name: "Desert Botanical Gardens",
    location: "Phoenix",
    phone: "480-481-8171",
    url: "https://dbg.org",
    description: "Desert Landscaping Classes in Phoenix. Earn a Desert Landscape School Credential upon completion of all six classes.",
    type: "Gardening"
  },
  {
    name: "Boyce Thompson Arboretum",
    location: "Superior",
    phone: "520-689-2723",
    url: "https://ag.arizona.edu/bta/evernts.html",
    description: "Explore the exciting activities and events at Boyce Thompson Arboretum. Educational classes and events.",    
    type: "Gardening"
  },
  {
    name: "Japanese Friendship Garden",
    location: "Phoenix",
    phone: "602-274-8700",
    url: "https://japanesefriendshipgarden.org",
    description: "Workshop classes including Japanese Wood Carving, Japanese Flower Arrangement, Tai Chi & Japanese Pruning Pine.",
    type: "Gardening"
  },
  {
    name: "The University of Arizona Maricopa County Cooperative Extension",
    location: "Phoenix",
    phone: "602-827-8200",
    url: "https://https://extension.arizona.edu/maricopa",
    description: "Classes on Gardening including Roses, Citrus and so much more.",
    type: "Gardening"
  },
  {
    name: "Arizona Worm Farm",
    location: "Phoenix",
    phone: "602-622-7663",
    url: "https://arizonawormfarm.com/classes",
    description: "Classes are offered in the fall, spring and winter. They include composting, growing the Best Tomatoes and introduction to Beekeeping!",
    type: "Gardening"
  },
  {
    name: "Jo-Ann Fabrics",
    location: "Valley wide",
    phone:  "480-893-1707",
    url: "http://joann.com/classes",
    description: "Jo-Anns provides a wide range of fabrics, plus sewing & arts & crafts supplies",
    type: "Sewing"
  },
  {
    name: "Mad B's Quilt & Sew",
    location: "Mesa",
    phone: "480-964-8914",
    url: "http://madbsquiltandsew.com",
    description: "have shelves of over 2000 bolts of fabric for your projects, a variety of notions and patterns,  as well as embroidery designs and accessories.",
    type: "Sewing"
  },
  {
    name: "The Sewing Asylum",
    location: "Phoenix",
    phone: "623-398-6235",
    url: "http://sewingasylum.com",
    description: "They teach individuals how to use a sewing machine.  If you are new to sewing or have a sewing machine that is new to you, they are there to help you understand your machine better so that you can utilize all the wonderful features that will help you in your creative journey. ",
    type: "Sewing"
  },
  {
    name: "Sewing Nuts",
    location: "Phoenix",
    phone: "602-622-7663",
    url: "http://sewingnuts.com",
    description: "They have full sewing classes. You can take machine or basic sewing classes where you learn basic techniques for sewing success.  We also offer embroidery, quilting, crafts, home décor, garment, heirloom, pattern reading, doll making and many other classes, offered by a staff of wonderful teachers with lots of sewing experience in their areas of specialty. Check out our monthly class schedule and come join the fun! ",
    type: "Sewing"
  },
  {
    name: "Quilter Bee",
    location: "Phoenix",
    phone: "623-334-9359",
    url: "http://http://www.quilterbee.com/",
    description: "Learn to quilt - creative hand-crafted gifts, original Americana kits and tools of the trade!",
    type: "Sewing"
  },
  {
    name: "Arizona Music Academy",
    location: "Tempe",
    phone: "480-705-0875",
    url: "arizonamusicacademy.com",
    description: "Interested in private music lessons? Learn from professional musicians registered with the State of Arizona.",
    type: "Music"
  },
  {
    name: "Guitar Gallery",
    location: "Scottsdale",
    phone: "480-948-1448",
    url: "http://scottsdaleguitar.com",
    description: "Learn to play the guitar with a customized curriculum from one of several teachers for only $30 a session!",
    type: "Music"
  },
  {
    name: "Buchanan Music",
    location: "Mesa",
    phone: "480-461-9161",
    url: "http://buchananmusic.net/",
    description: "Ready to learn guitar, woodwinds, or brass? Call Buchanan to learn at your own pace.",
    type: "Music"
  },
  {
    name: "Linton Milano Music",
    location: "Mesa",
    phone: "480-833-7873",
    url: "https://www.lintonmilano.com/",
    description: "Wanting to learn the piano, violin, flute, or banjo? Call them for private 30 or 60 minute sessions.",
    type: "Music"
  },
  {
    name: "Phoenix Music Lessons",
    location: "Phoenix",
    phone: "602-955-2702",
    url: "https://www.phoenixmusiclessons.com/",
    description: "Enjoy the flexibility of taking lessons online or in person as many times as you want from qualified professionals all over the valley.",
    type: "Music"
  },
  {
    name: "Slide Rock State Park",
    location: "Sedona",
    phone: "928-282-3034",
    url: "https://azstateparks.com/slide-rock",
    description: "Beat the summer heat and escape to Oak Creek Canyon for swimming, hiking, and relaxation.",
    type: "Outdoor Life"
  },
  {
    name: "Canyon Lake",
    location: "Tortilla Flat",
    phone: "480-288-9233",
    url: "http://canyonlakemarina.com",
    description: "Located less than an hour east of Phoenix, Canyon Lake offers boating, hiking, fishing, and camping.",
    type: "Outdoor Life"
  },
  {
    name: "Maricopa County Parks",
    location: "Maricopa County",
    phone: "602-506-2930",
    url: "https://www.maricopacountyparks.net/",
    description: "Looking for a park near you to get some fresh air? Check out the website above for locations and recreation available.",
    type: "Outdoor Life"
  },
  {
    name: "Arizona Scenic Tours",
    location: "Phoenix",
    phone: "480-459-7144",
    url: "https://arizonascenictours.com/",
    description: "Looking to get out of town for a day? Give them a call to choose from several tours around Arizona.",
    type: "Outdoor Life"
  },
  {
    name: "Phoenix Hiking Trails",
    location: "Phoenix",
    phone: "N/A",
    url: "https://www.alltrails.com/us/arizona/phoenix",
    description: "Check out this one-stop website for listings and ratings of trails all over the Phoenix metro area.",
    type: "Outdoor Life"
  },
  {
    name: "Arizona Art Supply",
    location: "Phoenix",
    phone: "602-264-9514",
    url: "http://arizonaartsupply.com",
    description: "Arizona Art Supply for high quality art materials and technical information. We offer the highest in-store student/instructor discount in Arizona.",
    type: "Art"
  },
  {
    name: "Circle 6 Studio",
    location: "Phoenix",
    phone: "602-454-9342",
    url: "http://circle6studios-com.3dcartstores.com/",
    description: "Classes and workshops to learn how to make blown glass. We also have private events and parties - come join us! ",
    type: "Art"
  },
  {
    name: "Raincharmer Beads",
    location: "Phoenix",
    phone: "602-625-4065",
    url: "https://www.raincharmerbeads.com/",
    description: "An assortment of classes for beginners through advanced. Learn to create amazing jewelry pieces!",
    type: "Art"
  },
  {
    name: "Mosaic Guys",
    location: "Phoenix",
    phone: "602-721-5587",
    url: "https://mgstudiophx.com/",
    description: "Learn to make beautiful mosaics. They have classes to familiarize you with the tolls and materials. Create a variety of different projects.",
    type: "Art"
  },
  {
    name: "Mesa Arts Center",
    location: "Mesa",
    phone: "480-644-6520",
    url: "http://mesaartscenter.com",
    description: "Mesa Arts Center offers classes in Art, Pottery, Glass Blowing, Watercolor and more!",
    type: "Art"
  },
  {
    name: "Sur la Table",
    location: "Phoenix Area",
    phone: "480-292-9426",
    url: "http://surlatable.com",
    description: "Small hands on cooking classes and private events.",
    type: "Cooking"
  },
  {
  name: "L'Academie Baking & Cooking School",
  location: "Mesa",
  phone: "480-687-8888",
  url: "http://www.lacademieschool.com/",
  description: "Hands on baking classes and cooking classes deisgned to pique your interest.",
  type: "Cooking"
  },
  {
name: "The Phoenix Palate",
    location: "Phoenix Area",
    phone: "915-252-3168",
    url: "https://www.thephoenixpalate.com/",
    description: "Fun events - corporate cooking classes to cocktail tour bachelor parties. They offer food tours to find a new favorite restaurant!",
    type: "Cooking"
  },
  {
    name: "Classic Cooking Academy",
    location: "Scottsdale",
    phone: "480-502-0177",
    url: "http://ccacademy.edu",
    description: "Practical and Pastry Series classes. Recreational cooking classes and Team Building and Private Events.",
    type: "Cooking"
  },
  {
    name: "Whisked Away",
    location: "Phoenix",
    phone: "480-330-6525",
    url: "http://whiskedaway.net/calendar",
    description: "Whether you’re new to cooking or a whiz in the kitchen, there are always tips to learn, recipes to take home and fun to be had in the kitchen!",
    type: "Cooking"
  },
]

db.Store.insertMany(storeSeed)
.then(function () {
console.log("record inserted!");
//adding in below code to exist out of seeding process -hoping this fixes issue with heroku
process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
// export default storeSeed
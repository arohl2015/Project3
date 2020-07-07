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
    name: "Arizona Art Supply",
    location: "Phoenix",
    phone: "602-264-9514",
    url: "http://arizonaartsupply.com",
    description: "Arizona Art Supply for high quality art materials and technical information. We offer the highest in-store student/instructor discount in Arizona.",
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

db.store.insertMany(storeSeed)
.then(function () {
console.log("record inserted!");
})
export default storeSeed
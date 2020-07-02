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
    phone: 480-481-8171,
    url: "https://dbg.org",
    description: "Desert Landscaping Classes in Phoenix. Earn a Desert Landscape School Credential upon completion of all six classes.",
    type: "Gardening"
  },

  {
    name: "Boyce Thompson Arboretum",
    location: "Superior",
    phone: 520-689-2723,
    url: "https://ag.arizona.edu/bta/evernts.html",
    description: "Explore the exciting activities and events at Boyce Thompson Arboretum. Educational classes and events.",    
    type: "Gardening"
  },
  {
    name: "Japanese Friendship Garden",
    location: "Phoenix",
    phone: 602-274-8700,
    url: "https://japanesefriendshipgarden.org",
    Description: "Workshop classes including Japanese Wood Carving, Japanese Flower Arrangement, Tai Chi & Japanese Pruning Pine.",
    type: "Gardening"
  },
  {
    name: "The University of Arizona Maricopa County Cooperative Extension",
    location: "Phoenix",
    phone: 602-827-8200,
    url: "https://https://extension.arizona.edu/maricopa",
    description: "Classes on Gardening including Roses, Citrus and so much more.",
    type: "Gardening"
  },
  {
    name: "Arizona Worm Farm",
    location: "Phoenix",
    phone: 602-622-7663,
    url: "https://arizonawormfarm.com/classes",
    description: "Classes are offered in the fall, spring and winter. They include composting, growing the Best Tomatoes and introduction to Beekeeping!",
    type: "Gardening"
  },
  
  {
    name: "Jo-Ann Fabrics",
    location: "Valley wide",
    phone:  480-893-1707,
    url: "http://joann.com/classes",
    description: "Jo-Anns provides a wide range of fabrics, plus sewing & arts & crafts supplies",
    type: "Sewing"
  },
  
  {
    name: "Mad B's Quilt & Sew",
    location: "Mesa",
    phone: 480-964-8914,
    url: "http://madbsquiltandsew.com",
    description: "have shelves of over 2000 bolts of fabric for your projects, a variety of notions and patterns,  as well as embroidery designs and accessories.",
    type: "Sewing"
  },
   
  {
    name: "The Sewing Asylum",
    location: "Phoenix",
    phone: 623-398-6235,
    url: "http://sewingasylum.com",
    description: "They teach individuals how to use a sewing machine.  If you are new to sewing or have a sewing machine that is new to you, they are there to help you understand your machine better so that you can utilize all the wonderful features that will help you in your creative journey. ",
    type: "Sewing"
  },
  
  {
    name: "Sewing Nuts",
    location: "Phoenix",
    phone: 602-622-7663,
    url: "http://sewingnuts.com",
    description: "They have full sewing classes. You can take machine or basic sewing classes where you learn basic techniques for sewing success.  We also offer embroidery, quilting, crafts, home décor, garment, heirloom, pattern reading, doll making and many other classes, offered by a staff of wonderful teachers with lots of sewing experience in their areas of specialty. Check out our monthly class schedule and come join the fun! ",
    type: "Sewing"
  },
  
  {
    name: "Quilter Bee",
    location: "Phoenix",
    phone: 623-334-9359,
    url: "http://http://www.quilterbee.com/",
    description: "Learn to quilt - creative hand-crafted gifts, original Americana kits and tools of the trade!",
    type: "Sewing"
  },
  
]

  
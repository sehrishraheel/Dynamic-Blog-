import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Artificial Intelligence: Shaping the Future",
      description:
        "AI is transforming the world — introducing new tools, methods, and horizons every day. Explore how AI impacts industries, lives, and the decisions shaping our future.",
      date: "2024-12-29",
      image: "../images/img1.jpg",
    },

    {
      id: "2",
      title: "Blockchain: Revolutionizing Trust and Transparency",
      description:
        "Discover how blockchain technology is redefining security, transparency, and trust across industries. From cryptocurrencies to smart contracts, explore the potential of this groundbreaking innovation.",
      date: "2024-12-30",
      image: "../images/img5.jpg",
    },

    {
      id: "3",
      title: "Web Development: Crafting the Digital World",
      description:
        "Step into the world of web development and uncover how websites and applications are built. Learn about the tools, technologies, and trends shaping the future of the web.",
      date: "2024-12-31",
      image: "../images/img4.jpg",
    },

    {
      id: "4",
      title: "Deep Learning: Unlocking the Power of Neural Networks",
      description:
        "Delve into the world of deep learning and discover how neural networks are driving advancements in AI. Explore applications, techniques, and the future of this transformative technology.",
      date: "2025-01-01",
      image: "../images/img3.jpg",
    },

    {
      id: "5",
      title: "Machine Learning: Teaching Machines to Think",
      description:
        "Explore the fascinating field of machine learning and understand how algorithms learn from data. Discover its applications, techniques, and the impact it has on shaping modern technology.",
      date: "2025-01-02",
      image: "../images/img6.png",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold-center my-8 text-red-600 animate-color-change">
        {" "}
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackgrond={index % 2 ===0}/>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

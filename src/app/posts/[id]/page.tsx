"use client";
import React, { useEffect, useState } from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthoreCard";
import Footer from "@/components/Footer";

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

export default function Post({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<{
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    (async () => {
      const resolvedParams = await params; // Resolve params
      const foundPost = posts.find((p) => p.id === resolvedParams.id);
      setPost(foundPost || null);
    })();
  }, [params]);

  if (!post) {
    return (
      <h2 className="text-xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer/>
    </div>
  );
}

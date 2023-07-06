"use client";
import PostModal from "../components/PostModal";
import { useState } from "react";

const CONTENT = [
  {
    text: "absx",
    platorm: "facebook",
    createdAt: "",
    link: "",
  },
  {
    text: "absx",
    platorm: "facebook",
    createdAt: "",
    link: "",
  },
  {
    text: "absx",
    platorm: "facebook",
    createdAt: "",
    link: "",
  },
  {
    text: "absx",
    platorm: "facebook",
    link: "",
    createdAt: "",
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="m-10">
      {showModal && <PostModal closeModal={closeModal} />}
      <div className="max-w-screen-md m-auto">
        <div className="flex justify-end">
          <a
            href="#"
            onClick={toggleModal}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Generate Post
          </a>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {CONTENT.map((c) => (
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4">
                {/*  <div className="flex-shrink-0">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="https://img.freepik.com/free-vector/facebook-post-template-with-emoticons_1199-141.jpg?w=2000"
                  alt="Neil image"
                  height={50}
                  width={50}
                />
              </div> */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {c.text}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Posted on {c.platorm} at {c.createdAt}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  View
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-fit m-auto">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </a>

        <a
          href="#"
          className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </a>
      </div>
    </div>
  );
}

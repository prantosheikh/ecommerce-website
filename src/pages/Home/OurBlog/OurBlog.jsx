import { useEffect, useState } from "react";

const OurBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [hovered, setHovered] = useState(null); // Store the ID of the hovered card
  console.log(blogs);

  useEffect(() => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const toggleHover = (cardId) => {
    setHovered(cardId);
  };

  const clearHover = () => {
    setHovered(null);
  };

  return (
    <div>
      <h1 className="text-4xl my-2 font-bold relative text-center group cursor-pointer mb-6 hover:text-yellow-600 transition duration-300 transition-delay-500 ease-in-out">
        Our Blog
        <span className="absolute -bottom-2 left-[480px] w-1/4 h-0.5 bg-yellow-600 transform origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-2"></span>
      </h1>

      <div className="flex justify-around gap-5 my-[100px]">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className={`w-1/3 bg-white shadow-lg overflow-hidden relative transform duration-300 transition-delay-500 ease-in-in ${
              hovered === blog._id ? "hovered" : ""
            }`}
            onMouseEnter={() => toggleHover(blog._id)}
            onMouseLeave={clearHover}
          >
            <img
              src={blog.imga}
              alt={name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-gray-700 font-semibold mb-2">{blog.name}</h3>
              <p className="text-gray-600 text-sm">{blog.date}</p>
              {hovered === blog._id && (
                <div className="absolute top-[175px] -right-[60px] transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 justify-center transition duration-300">
                  <button className="py-4 px-6 bg-white text-center font-bold">
                    Read more
                  </button>
                </div>
              )}
              <h3 className="text-base text-gray-600">{blog?.data} / {blog.admin} / in deco</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;

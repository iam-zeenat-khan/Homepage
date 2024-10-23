import React, { useState } from 'react';
import { FaHeart, FaTrash, FaChevronDown, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa';

function NewsFeed() {
  const [newsItems, setNewsItems] = useState([
    { id: 1, author: "John Doe", title: "Exciting News!", content: "This is a sample news item with a lot of content to demonstrate the collapse feature.", date: "2023-10-22", image: "https://images.pexels.com/photos/16631051/pexels-photo-16631051/free-photo-of-close-up-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", likes: 0 },
    { id: 2, author: "Jane Smith", title: "Important Announcement", content: "Another news item with even more content to show the expand and collapse functionality.", date: "2023-10-21", image: "https://images.pexels.com/photos/27524864/pexels-photo-27524864/free-photo-of-a-rocky-trail-with-trees-and-rocks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", likes: 0 },
    { id: 3, author: "Jane Smith", title: "Another Update", content: "Yet another news item with additional content.", date: "2023-10-20", image: "https://images.pexels.com/photos/27467770/pexels-photo-27467770/free-photo-of-laptop-and-camera-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", likes: 0 },
  ]);

  const [newPostData, setNewPostData] = useState({ author: '', title: '', content: '', image: '' });
  const [expandedIds, setExpandedIds] = useState([]);
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);

  const handlePost = () => {
    if (!newPostData.author || !newPostData.title || !newPostData.content || !newPostData.image) {
      alert("All fields are required!");
      return;
    }

    const newNewsItem = {
      id: newsItems.length + 1,
      author: newPostData.author,
      title: newPostData.title,
      content: newPostData.content,
      date: new Date().toISOString(),
      image: newPostData.image,
      likes: 0
    };

    setNewsItems([...newsItems, newNewsItem]);
    setNewPostData({ author: '', title: '', content: '', image: '' });
  };

  const handleLike = (newsItemId) => {
    setNewsItems(newsItems.map(item =>
      item.id === newsItemId ? { ...item, likes: item.likes + 1 } : item
    ));
  };

  const handleDelete = (newsItemId) => {
    setNewsItems(newsItems.filter(item => item.id !== newsItemId));
  };

  const toggleExpand = (newsItemId) => {
    if (expandedIds.includes(newsItemId)) {
      setExpandedIds(expandedIds.filter(id => id !== newsItemId));
    } else {
      setExpandedIds([...expandedIds, newsItemId]);
    }
  };

  return (
    <div className="newsfeed-container max-w-7xl mx-auto p-6 space-y-6 bg-[#ECD4EA] text-[#693B69] rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Create a New Post</h2>
        <button
          onClick={() => setIsPostFormOpen(!isPostFormOpen)}
          className="bg-[#511F52] text-white p-2 rounded-lg flex items-center hover:bg-[#693B69] transition duration-300"
        >
          {isPostFormOpen ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />}
          {isPostFormOpen ? "Close" : "Add New Post"}
        </button>
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${isPostFormOpen ? 'max-h-full' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.5s ease' }}
      >
        <div className="newsfeed-post-form bg-[#A987A8] p-4 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Author"
            value={newPostData.author}
            onChange={e => setNewPostData({ ...newPostData, author: e.target.value })}
            className="w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <input
            type="text"
            placeholder="Title"
            value={newPostData.title}
            onChange={e => setNewPostData({ ...newPostData, title: e.target.value })}
            className="w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <textarea
            placeholder="Content"
            value={newPostData.content}
            onChange={e => setNewPostData({ ...newPostData, content: e.target.value })}
            className="w-full p-2 border rounded-lg bg-[#d2a8cf] text-[#693B69]"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newPostData.image}
            onChange={e => setNewPostData({ ...newPostData, image: e.target.value })}
            className="w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <button onClick={handlePost} className="w-full bg-[#511F52] text-white p-2 rounded-lg flex items-center justify-center hover:bg-[#693B69] transition duration-300">
            <FaPlus className="mr-2" /> Post
          </button>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="newsfeed-posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map(newsItem => (
          <NewsItem
            key={newsItem.id}
            newsItem={newsItem}
            onLike={handleLike}
            onDelete={handleDelete}
            expanded={expandedIds.includes(newsItem.id)}
            onExpandToggle={toggleExpand}
          />
        ))}
      </div>
    </div>
  );
}

function NewsItem({ newsItem, onLike, onDelete, expanded, onExpandToggle }) {
  const formattedDate = new Date(newsItem.date).toLocaleDateString();

  return (
    <div className="news-item bg-[#511F52] p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="news-item-header flex justify-between items-center mb-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{newsItem.title}</h3>
          <p className="text-sm text-[#e1bfe0]">by {newsItem.author} on {formattedDate}</p>
        </div>
        <button onClick={() => onDelete(newsItem.id)} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>

      <img src={newsItem.image} alt={newsItem.title} className="w-full h-40 object-cover rounded-lg mb-2 hover:opacity-90 transition-opacity duration-300" />

      <div
  className={`text-pink-200 news-item-content overflow-hidden transition-all duration-500 ${expanded ? 'max-h-full' : 'max-h-24'}`}
>
  {newsItem.content}
</div>


      <div className="news-item-actions flex justify-between items-center mt-4">
        <button onClick={() => onLike(newsItem.id)} className="text-pink-400 flex items-center">
          <FaHeart className="mr-1" /> {newsItem.likes}
        </button>

        <button onClick={() => onExpandToggle(newsItem.id)} className="text-blue-400 flex items-center">
          {expanded ? <FaChevronUp /> : <FaChevronDown />} {expanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default NewsFeed;

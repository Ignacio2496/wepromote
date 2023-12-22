const HomeContent = () => {
  return (
    <div className="font-sans">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-200">
            Your Fancy Shop
          </a>
          {/* Add your navigation links here */}
        </div>
      </nav>

      <section className="bg-gray-300 text-gray-800 text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Discover Elegance
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Explore a world of sophistication with our curated collection of
            premium products.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;

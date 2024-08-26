import Header from "./Component/Header";

export default function Home() {
  return (
    <main>

      <section className="pt-32">
        <div className="max-w-md mb-6">
          <h1 className="text-4xl font-bold">
            Your one link
            <br /> for everything
          </h1>
          <h2 className="text-gray-700 text-xl mt-6">
            Share your links, social profiles, contact info and more on one
            page
          </h2>
        </div>
        <form className="inline-flex items-center shadow-lg
        shadow-gray-500/20">
          <span className="bg-white py-4 pl-4 pr-2">
            LinkList.to
          </span>
          <input type="text" className="py-4"
          placeholder="username" />
          <button type="submit" className="bg-blue-500 text-white py-4 px-6 hover:bg-blue-700">
            Join for free
          </button>
        </form>
      </section>
    </main>
  );
}

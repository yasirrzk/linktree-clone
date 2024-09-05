import HeroForm from "../Component/Forms/HeroForm";


export default function Home() {
  return (
    <main>

      <section className="pt-32">
        <div className="max-w-md mb-6 ml-20">
          <h1 className="text-4xl font-bold">
            Your one link
            <br /> for everything
          </h1>
          <h2 className="text-gray-700 text-xl mt-6">
            Share your links, social profiles, contact info and more on one
            page
          </h2>
        </div>
        <HeroForm/>
      </section>
    </main>
  );
}

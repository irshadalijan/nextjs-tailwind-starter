import Layout from "../components/Layout";

const index = () => {
  const metaInfo = {
    title: "This is meta title index page",
    metaKeywords: "these are the keywords oof index page",
    metaDesc: "this is meta Desctiption of index page",
  };
  return (
    <Layout metaInfo={metaInfo}>
      <div className="">
        <h1 className="flex justify-center text-blue-700 lg:text-3xl border-blue-600 border-b-2	text-bold">
          Welcome to SEO Friendly NextJS with Tailwind CSS starter Template
        </h1>
        <div className="text-gray-700 pt-3 text-lg">
          <h2 className="lg:text-2xl">
            Next.js is a REACT framework more details can found by visiting{" "}
            <a
              className="text-blue-400"
              href="https://nextjs.org/"
              target="_blank"
            >
              NEXT.js website
            </a>
          </h2>
          <br />
          <p>
            This is the starter template using Next.js to get you started on a
            fly with pre built initial layout of header, content and footer.
            Three links are added by default in the navbar Home, About and
            Contact Us. All pages content can be modified in pages directory.
          </p>
          <p>
            Tailwind CSS is used for styling the template. This template is
            fully responsive.
          </p>
          <p>
            Meta tags in head section can have dynamic data/content for each
            page for populating {"<title>"} {"<meta name='keywords'>"}{" "}
            {"<meta name='description'>"}{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default index;

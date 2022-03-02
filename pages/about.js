// import NvaBar from "../components/NavBar";

import HeadTitle from "../components/HeadTitle";

export default function About() {
  return (
    <div>
      <HeadTitle title="About" />
      {/* <NvaBar /> */}
      <h1 className="active">About me</h1>
      <style jsx>{`
        a {
          color: blue;
          background-color: gold;
        }
      `}</style>
    </div>
  );
}

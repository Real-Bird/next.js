import NvaBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NvaBar />
      <div>{children}</div>
    </>
  );
}

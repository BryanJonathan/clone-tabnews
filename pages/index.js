import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        height: "98vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>PAGE UNDER CONSTRUCTION</h1>
      <Image
        style={{ width: 100, height: 100 }}
        src={"image.png"}
        alt="worker image"
      />
      <p>We are working hard to bring you this page soon!</p>
      <p>Why dont you take a look at my github or linkedin in the meantime?</p>
      <a target="_blank" href="https://github.com/BryanJonathan">
        GITHUB
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/jonathan-bryan-ca/">
        LINKEDIN
      </a>
    </div>
  );
}

export default Home;

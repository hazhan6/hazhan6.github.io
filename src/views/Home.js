import React from "react";
import "./home.css";

const channels = [
  {
    label: "GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
    href: "https://github.com/hazhan6",
  },
  {
    label: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className="bi bi-linkedin"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/hazalhangul",
  },
  {
    label: "Mail",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        className="bi bi-envelope"
        viewBox="0 0 16 16"
      >
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
      </svg>
    ),
    href: "mailto:hangul_hazal@hotmail.com",
  },
];

const Home = () => {
  return (
    <section id="home" className=" container min-vh-100 d-flex flex-row">
      <div className="row w-100">
        <div className="col-sm-8 d-flex flex-column justify-content-center text-center align-items-center">
          <div className="d-flex flex-column align-items-center gap-5">
            <div className="d-flex flex-column d-md-none">
              <h1>HEY, I'M HAZAL HANGUL</h1>
              <h2>Frontend / Mobile Developer</h2>
            </div>
            <div className="slider-wrapper d-md-flex d-none">
              <h1>HEY, I'M HAZAL HANGUL</h1>
              <div className="slider">
                <div className="slider-text1">Frontend Developer</div>
                <div className="slider-text2">Mobile Developer</div>
                <div className="slider-text3">Software Developer</div>
              </div>
            </div>
            <div className="d-flex justify-content-between w-50">
              {channels.map((channel, index) => (
                <div className="mr-2 mb-3" key={index}>
                  <a href={channel.href} target="_blank" rel="noreferrer">
                    <div className="btn-channel">{channel.icon}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-4 pb-5 d-sm-flex align-items-center d-none">
          <svg
            width="375"
            height="344"
            viewBox="0 0 175 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.6 113.6C72.7333 113.6 71.3 112.867 70.3 111.4C69.3 109.933 68.8 108.2 68.8 106.2C68.8 102.333 70.5667 97.0667 74.1 90.4C71.6333 90.6 69.1667 90.7 66.7 90.7C64.9 90.7 61.5 90.6 56.5 90.4L43.7 90C39.0333 97.4667 35.2333 104.267 32.3 110.4C31.4333 112.2 30.2667 113.1 28.8 113.1C27.8 113.1 27.3 112.633 27.3 111.7C27.3 111.033 27.5 110.3 27.9 109.5C29.0333 107.033 30.5 104.167 32.3 100.9C34.1667 97.6333 36.3333 93.9667 38.8 89.9C33.3333 89.9 29.7 90.1333 27.9 90.6C24.9 91.3333 22.6667 92.8333 21.2 95.1C20.6667 95.8333 20.2333 96.2333 19.9 96.3C19.5 96.3667 19.3 96.2 19.3 95.8C19.3 95.4667 19.4333 95.1667 19.7 94.9C22.2333 91.5 24.8 89.1333 27.4 87.8C30.0667 86.4 34.7 85.8 41.3 86C45.4333 79.8 51.1333 70.6 58.4 58.4C61.1333 53.2667 62.5 49.1 62.5 45.9C62.5 40.7 59 38.1 52 38.1C43.4667 38.1 35.5333 40.3333 28.2 44.8C24.3333 47.2 20.7 50.2333 17.3 53.9C13.9 57.5 11.1667 61.3667 9.1 65.5C7.03333 69.5667 6 73.5667 6 77.5C6 83.7 8.9 86.8 14.7 86.8C17.3 86.8 19.6 86.2 21.6 85C23.6 83.7333 25.3667 82.1333 26.9 80.2C29.9 76.4667 31.4 72.7667 31.4 69.1C31.4 67.0333 30.8667 65.3333 29.8 64C29.6667 63.8667 29.6 63.7 29.6 63.5C29.6 63.0333 29.8667 62.8 30.4 62.8C30.7333 62.8 30.9333 62.9 31 63.1C32.3333 64.8333 33 66.9 33 69.3C33 73.3667 31.3333 77.5333 28 81.8C25.9333 84.3333 23.8 86.2 21.6 87.4C19.4667 88.5333 17 89.1 14.2 89.1C10 89.1 6.73333 87.8 4.4 85.2C2.06667 82.5333 0.9 79.1333 0.9 75C0.9 69.4 2.56667 64.1 5.9 59.1C9.3 54.1 13.5667 49.8 18.7 46.2C28.8333 39.0667 40.1333 35.6667 52.6 36C55.2667 36.0667 57.7667 36.5667 60.1 37.5C62.4333 38.3667 64.3 39.6667 65.7 41.4C67.1667 43.0667 67.9 45.1667 67.9 47.7C67.9 50.9 66.6667 54.4667 64.2 58.4L46.1 86.2C47.4333 86.2667 49.1667 86.4 51.3 86.6C53.4333 86.7333 55.9667 86.9667 58.9 87.3C61.3667 87.5667 63.4333 87.7667 65.1 87.9C66.7667 87.9667 68.0333 88 68.9 88C70.4333 88 71.7333 88 72.8 88C73.9333 88 74.8333 87.9667 75.5 87.9L79.3 81.6C82.6333 76.0667 86.1 70.8333 89.7 65.9C93.3667 60.9 97.1667 56.2 101.1 51.8C110.033 41.9333 117.667 35.8667 124 33.6C124.2 33.5333 124.433 33.5 124.7 33.5C125.1 33.5 125.3 33.7667 125.3 34.3C125.3 34.5 125.2 34.6667 125 34.8C122.933 35.9333 120.4 37.9333 117.4 40.8C114.467 43.6 111.033 47.2667 107.1 51.8C98.8333 61.3333 91.8 70.9667 86 80.7L82.1 87.3C85.1667 86.9 87.3667 86.1333 88.7 85C88.9667 84.8 89.2 84.9 89.4 85.3C89.6 85.7667 89.5667 86.1 89.3 86.3C87.3 87.8333 84.4667 88.9333 80.8 89.6C76.1333 98.2667 73.8 104.367 73.8 107.9C73.8 110.167 74.7667 111.3 76.7 111.3C78.0333 111.3 79.5667 110.833 81.3 109.9C83.1 109.033 84.5333 108.033 85.6 106.9C85.7333 106.767 85.8333 106.7 85.9 106.7C86.1 106.7 86.2 106.9 86.2 107.3C86.1333 107.767 85.9667 108.133 85.7 108.4C84.9 109.2 83.8333 110 82.5 110.8C81.1667 111.6 79.7667 112.267 78.3 112.8C76.9 113.333 75.6667 113.6 74.6 113.6ZM91.4172 107.5C89.4839 107.5 88.5172 106.933 88.5172 105.8C88.5172 105.133 88.9172 104.067 89.7172 102.6C92.7839 97.1333 95.5172 92.3 97.9172 88.1C100.384 83.8333 102.551 80.2333 104.417 77.3C112.351 64.5667 117.951 57.6667 121.217 56.6C121.351 56.6 121.451 56.6 121.517 56.6C121.584 56.5333 121.651 56.5 121.717 56.5C122.584 56.5 123.151 57.2 123.417 58.6C123.217 60 119.751 65.0667 113.017 73.8C109.484 78.2667 106.717 81.9667 104.717 84.9C102.784 87.7667 101.584 89.8667 101.117 91.2C103.317 89.6 105.684 87.9 108.217 86.1C110.751 84.3 113.217 82.6 115.617 81C118.017 79.3333 120.184 78 122.117 77C124.051 75.9333 125.551 75.3333 126.617 75.2C126.751 75.2 126.917 75.2 127.117 75.2C127.317 75.1333 127.451 75.1 127.517 75.1C129.384 75.1 130.317 75.9667 130.317 77.7C130.317 78.1667 129.717 79.2 128.517 80.8C127.317 82.4 125.484 84.8667 123.017 88.2C118.617 94.0667 116.417 98.4667 116.417 101.4C116.417 102.933 116.984 103.7 118.117 103.7C119.317 103.633 120.684 103.1 122.217 102.1C123.817 101.1 125.417 99.8667 127.017 98.4C128.617 96.9333 130.051 95.5 131.317 94.1C132.651 92.6333 133.651 91.5 134.317 90.7C134.917 90.1 135.384 89.8 135.717 89.8C135.984 89.8 136.117 89.9333 136.117 90.2C136.117 90.7333 135.851 91.3667 135.317 92.1C134.517 93.1 133.317 94.4 131.717 96C130.184 97.6 128.484 99.2333 126.617 100.9C124.817 102.5 123.084 103.867 121.417 105C119.817 106.067 118.617 106.6 117.817 106.6C113.884 106.6 111.917 104.3 111.917 99.7C111.917 97.1 113.117 93.7 115.517 89.5C116.451 87.9 117.417 86.3 118.417 84.7C119.417 83.1 120.417 81.5 121.417 79.9C112.884 84.1667 105.151 90.4667 98.2172 98.8C97.3505 100 96.4505 101.3 95.5172 102.7C94.5839 104.033 93.7505 105.167 93.0172 106.1C92.2839 107.033 91.7505 107.5 91.4172 107.5Z"
              className="logo-text"
            />
            <path
              d="M52 23V3H172V141H52V125"
              className="logo-stroke"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;

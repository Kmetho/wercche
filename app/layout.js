import "./globals.css";
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.sound.min.js"></script>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <link rel="icon" href="./images/smile.ico" />
        <link rel="stylesheet" href="../public/fonts/fonts.css" />
        <title>𝗪𝗲𝗿𝗼𝗻𝗶𝗸𝗮 𝗞𝗺𝗶𝗲𝗰 creating for the world wide web</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wercche.xyz/" />
        <meta property="og:image" content="./images/smile.ico" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="wercche" />
        <meta property="og:url" content="https://wercche.xyz/" />
        <meta property="og:site_name" content="wercche" />
        <meta
          name="description"
          content="An autodidact developer unearthing the in-between of virtual and real."
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}

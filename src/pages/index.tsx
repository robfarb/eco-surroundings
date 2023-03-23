import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import loadingIcon from 'public/loadingIcon.png';
import ecoSurroundingsLogo from 'public/ecoSurroundingsLogo.png';
import plyboo from 'public/Plyboo.jpg';
import arborWood from 'public/ArborWood.jpeg';
import durat from 'public/Durat.jpg';

{/*  <link rel="stylesheet" type="text/css"  href='style.css' />*/}

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>EcoSurroundings | Home</title>
      <meta content="text/html; charset=UTF-8"/>
      <meta name="description" content="Template by Dry Themes" />
      <meta name="keywords" content="HTML, CSS, JavaScript, PHP" />
      <meta name="author" content="DryThemes" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

      {/*<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700%7CPT+Serif:400,700' rel='stylesheet' type='text/css'>*/}
    </Head>
    {/*<table className="doc-loader">*/}
    {/*  <tbody>*/}
    {/*  <tr>*/}
    {/*    <td>*/}
    {/*      <Image src={loadingIcon} alt="Loading..."/>*/}
    {/*    </td>*/}
    {/*  </tr>*/}
    {/*  </tbody>*/}
    {/*</table>*/}
    <div className="body-wrapper">
      <div className="content-1330 header-holder center-relative">
        <div className="header-logo left">
          <h1 className="site-title">
            <a href="index.html">
              <Image src={ecoSurroundingsLogo} alt="EcoSurroundings Logo" className="main-logo" />
            </a>
          </h1>
        </div>

        <div className="header-menu right">
          <nav id="header-main-menu" className="left">
            <ul className="main-menu sm sm-clean">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="clear"></div>
        </div>
      </div>

      <div id="content" className="site-content">
        <article>
          <div className="content-1330 center-relative">
            <div className="page-desc">
              EcoSurroundings - "Sustainable materials for the built environment”
            </div>
            <div className="clear"></div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>

          <div className="content-1530 center-relative block slider image-slider-margin">
            <div className="image-slider-wrapper">
              <ul id="slider1" className="image-slider slides center-text">
                <li>
                  <Image src={plyboo} alt="Plyboo wood" />
                </li>
                <li>
                  <Image src={arborWood} alt="Arbor Wood" />
                </li>
                <li>
                  <Image src={durat} alt="Durat Wood" />
                </li>
              </ul>
              <div className="slider1_pagination carousel_pagination left"></div>
            </div>
            <div className="clear"></div>
          </div>

          <div className="content-1330 center-relative block">
            {/*<p>&nbsp;</p>*/}
            {/*<p>&nbsp;</p>*/}
            <div className="one_half">
              <strong>Innovative</strong>
              <br />
                EcoSurroundings was founded on the principle that the natural and built environments can and should co-exist in harmony;
                we do not need to compromise. Through innovative and circular design philosophies, use of regenerative and recycled
                materials, and careful attention to production processes, our offerings can enhance — rather than inhibit — our planet’s
                future.
            </div>
            <div className="one_half last">
              <strong>Versatile Solutions</strong>
              <br />
                Wherever you are in the building materials value chain, we can help: designers and architects will find the perfect
                solutions for your clients’ desires, and builders and contractors will be impressed with the service and craftsmanship
                of our product lines. Equally of value, manufacturers of responsibly-produced materials will grow their business through
                our ardent and like-minded customer network. If you are a manufacturer and are interested in representation, let’s talk!
            </div>
            <div className="clear"></div>
          </div>
        </article>
      </div>
    </div>

    {/*<script src="js/jquery.js"></script>*/}
    {/*<script src='js/jquery.fitvids.js'></script>*/}
    {/*<script src='js/jquery.smartmenus.min.js'></script>*/}
    {/*<script src='js/imagesloaded.pkgd.js'></script>*/}
    {/*<script src='js/isotope.pkgd.js'></script>*/}
    {/*<script src='js/jquery.carouFredSel-6.0.0-packed.js'></script>*/}
    {/*<script src='js/jquery.mousewheel.min.js'></script>*/}
    {/*<script src='js/jquery.touchSwipe.min.js'></script>*/}
    {/*<script src='js/jquery.easing.1.3.js'></script>*/}
    {/*<script src='js/jquery.prettyPhoto.js'></script>*/}
    {/*<script src='js/jquery.ba-throttle-debounce.min.js'></script>*/}
    {/*<script src='js/jquery.nicescroll.min.js'></script>*/}
    {/*<script src='js/main.js'></script>*/}
    </>
  )
}

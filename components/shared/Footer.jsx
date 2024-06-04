import React from "react";
import { SimpleGrid, Box, Input } from "@chakra-ui/react";
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaFacebookF,
  FaGooglePlusG,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const handlePhoneClick = () => {
    window.open(`tel:8571075560`);
  };
  const handleEmailClick = () => {
    window.open(`mailto:shubham782000@gmail.com`);
  };
  return (
    <>
      <footer className="footer-section">
        <div className="main_footer">
          <Box className="footer-cta pt-5 pb-5" pt={20} pb={20}>
            <SimpleGrid className="row" columns={[1, 3]}>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <FaMapMarkerAlt color="#ff5e14" fontSize={"30px"} />
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, Gurugram, India</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta" onClick={handlePhoneClick}>
                  <FaPhone color="#ff5e14" fontSize={"30px"} />
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+91 8571075560</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                {/* <div className="single-cta"> */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shubham782000@gmail.com"
                  target="_blank"
                  className="single-cta"
                >
                  <FaEnvelopeOpen color="#ff5e14" fontSize={"30px"} />
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>shubham782000@gmail.com</span>
                  </div>
                </a>
                {/* </div> */}
              </div>
            </SimpleGrid>
          </Box>
          <Box className="footer-content pt-5 pb-5" pt={20} pb={20}>
            <SimpleGrid className="row" columns={[1, 3]}>
              <Box className="col-xl-4 col-lg-4 mb-50" pr={"25px"}>
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        height="70"
                        src="https://raw.githubusercontent.com/storyofcoder/extraImages/master/brain.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <Box display={"flex"} alignItems="center">
                      <a href="#">
                        <Box
                          w={"40px"}
                          h="40px"
                          textAlign={"center"}
                          borderRadius="50%"
                          bg={"#3b5998"}
                          mr={2}
                          position="relative"
                        >
                          <FaFacebookF
                            color={"#fff"}
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,-50%)",
                            }}
                          />
                        </Box>
                      </a>
                      <a href="#">
                        <Box
                          w={"40px"}
                          h="40px"
                          textAlign={"center"}
                          borderRadius="50%"
                          bg={"#55acee"}
                          mr={2}
                          position="relative"
                        >
                          <FaTwitter
                            color={"#fff"}
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,-50%)",
                            }}
                          />
                        </Box>
                      </a>
                      <a href="#">
                        <Box
                          w={"40px"}
                          h="40px"
                          textAlign={"center"}
                          borderRadius="50%"
                          bg={"#dd4b39"}
                          position="relative"
                        >
                          <FaGooglePlusG
                            color={"#fff"}
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,-50%)",
                            }}
                          />
                        </Box>
                      </a>
                    </Box>
                  </div>
                </div>
              </Box>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      {
                        "Don’t miss to subscribe to our new feeds, kindly fill the form below."
                      }
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <Input
                      size={"35px"}
                      type="text"
                      placeholder="Email Address"
                      _focus={{
                        borderColor: "none",
                      }}
                    />
                    <button>
                      <FaTelegramPlane color="#fff" fontSize={"30px"} />
                    </button>
                  </div>
                </div>
              </div>
            </SimpleGrid>
          </Box>
        </div>
        <Box className="copyright-area">
          <div style={{ padding: "0 5%" }}>
            <SimpleGrid className="row" columns={2} alignItems={"center"}>
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2021, All Right Reserved E Com</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div>
                  <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" />
                </div>
              </div>
            </SimpleGrid>
          </div>
        </Box>
      </footer>
    </>
  );
}

export default Footer;

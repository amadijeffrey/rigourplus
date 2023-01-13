import facebookImg from '../public/Facebook.png'
import twitterImg from '../public/Twitter.png'
import InstagramImg from '../public/Instagram.png'
import Image from 'next/image'


export default function Footer(){
return(
    <footer>
        <div className="topFooter flex flex-col md:flex-row justify-between px-6 sm:px-10 lg:px-20 ">
           <div className=" topFooter1">
                <div className="footerLogo">
                    <svg width="156" height="34" viewBox="0 0 156 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_134_592)"><path fillRule="evenodd" clipRule="evenodd" d="M14.115 31.7455C13.2232 31.7455 12.5073 31.3686 12.0565 30.9172C11.674 30.5341 11.3994 30.1211 11.2576 29.5708C11.0668 28.8301 11.1991 28.424 11.3254 27.6621C11.6297 25.8259 12.337 23.8754 13.2812 22.3136C13.4971 21.9564 14.0395 21.1423 14.3419 20.8263C14.4218 20.7428 14.4387 20.7063 14.5102 20.6258C14.569 20.5595 14.6183 20.5258 14.6765 20.4566C15.015 20.054 15.5983 19.5418 16.0258 19.2234L16.6628 18.7867C16.7444 18.7345 16.7984 18.691 16.8846 18.6395L17.6059 18.2534C17.6918 18.2142 17.7609 18.1831 17.8567 18.1349C19.2006 17.457 21.2308 17.1196 22.7522 17.1196C23.2627 17.1196 23.8298 17.4068 24.198 17.688C25.8827 18.9749 25.6984 21.6083 23.6601 22.609C23.1243 22.872 22.4443 22.9112 21.8111 22.9097C21.5241 22.909 21.372 22.9452 21.1058 22.9436C20.0058 22.9374 19.1971 23.0858 18.3443 23.7747L17.8066 24.3102C17.28 24.9539 17.082 25.5276 16.9845 26.372C16.9672 26.5214 17.0067 26.5348 17.0073 26.6916C17.008 26.8532 16.9756 26.8569 16.9705 27.0253L16.9716 28.8337C16.9717 29.6657 16.7488 30.2774 16.1399 30.8837C15.6322 31.3893 14.872 31.7455 14.115 31.7455H14.115ZM27.1548 19.8954V20.1611C27.1359 20.8114 26.9771 21.4578 26.6619 22.0842C26.2408 22.9212 25.4704 23.7488 24.6235 24.1708C24.2156 24.3741 23.8808 24.4943 23.3663 24.5923C21.9477 24.8626 20.2103 24.1701 19.2177 25.4143C18.8904 25.8246 18.8195 26.165 18.8201 26.6917C18.822 28.1597 18.9693 29.8315 18.2474 31.0747C15.7302 35.4101 9.34277 33.6868 9.34277 28.7333C9.34277 28.4583 9.37855 28.2266 9.42419 27.9777C9.75494 26.1733 9.95922 25.2124 10.6725 23.4307C11.163 22.2056 12.214 20.9831 13.0347 19.9595C13.0997 19.8785 13.1617 19.8327 13.2333 19.7558C14.6841 18.1963 16.3027 16.9139 18.2732 16.0729C19.7281 15.4519 20.9942 15.3124 22.7187 15.3124C24.3626 15.3124 26.1214 16.5609 26.7377 18.0372C26.993 18.6489 27.1369 19.273 27.1549 19.8954L27.1548 19.8954Z" fill="#6B5DD3"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.90671 22.3744H4.67149C2.47933 22.3744 1.06614 19.9419 2.23699 18.009C2.50479 17.5668 2.76475 17.3276 3.18583 17.0461C3.39856 16.9039 3.56234 16.8349 3.82644 16.7469C4.74125 16.4427 7.35148 16.618 8.46923 16.618C10.396 16.618 12.323 16.618 14.2498 16.618L13.6718 16.9795C12.5979 17.6699 11.6689 18.3408 10.7127 19.187L10.2119 19.6251C9.9279 19.8513 9.52913 20.2496 9.18909 20.5146C8.65299 20.9325 8.49607 21.1 7.80768 21.4817C7.12083 21.8625 5.94507 22.3744 4.90667 22.3744H4.90671ZM0 19.4293C0 20.2075 0.149125 20.8781 0.425262 21.449C0.587328 21.7842 0.843597 22.2489 1.10063 22.5168C1.69229 23.1333 1.91849 23.3798 2.77773 23.7917C4.38161 24.5609 6.41733 24.1384 7.90958 23.4236C9.9421 22.4501 12.3371 19.776 14.2307 18.1536C17.3369 15.7082 19.4384 15.0773 21.0766 14.7987C17.895 14.7987 14.4064 14.8106 11.2251 14.8106C10.132 14.8106 9.15072 14.7772 8.06574 14.7772C7.01288 14.7772 5.95983 14.7785 4.90671 14.777C3.79851 14.7757 3.082 15.0239 2.36282 15.4232C0.996376 16.1821 3.80616e-05 17.764 3.80616e-05 19.4293H0Z" fill="#6B5DD3"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8215 9.0203C10.8215 8.12194 11.1848 7.38588 11.7659 6.78131L12.1604 6.43786C12.3132 6.32555 12.4962 6.22666 12.6693 6.14141C13.502 5.73163 14.4617 5.77003 15.2966 6.10328C15.615 6.23038 16.0005 6.49373 16.2242 6.71903C16.7464 7.24499 17.207 7.99682 17.207 8.81949C17.207 9.46996 17.1969 9.81455 16.8933 10.4149C16.6845 10.8278 16.5662 10.9795 16.2575 11.2878C15.3288 12.2156 13.8201 12.4776 12.6698 11.8987C12.3525 11.7391 12.2135 11.6585 11.9537 11.4404C11.8627 11.3641 11.8203 11.3463 11.7365 11.2551C11.1777 10.6467 10.8214 9.86799 10.8214 9.0203H10.8215ZM9.00667 8.71908C9.00667 9.73434 9.045 10.3045 9.51079 11.2292C10.1954 12.5886 11.365 13.5479 12.8707 13.9075C14.2607 14.2395 15.713 13.9364 16.8444 13.1775C17.1313 12.9851 17.1338 12.9621 17.3514 12.7788C18.3551 11.9333 19.0553 10.5238 19.0553 9.18761C19.0553 8.15135 18.9531 7.76894 18.5754 6.88763C18.4185 6.52133 18.1165 6.06113 17.8536 5.76571C16.6267 4.38725 14.8127 3.69778 12.9313 4.12647C12.6341 4.19421 12.2688 4.30303 12.0195 4.42337C10.8972 4.96521 10.1027 5.6324 9.52191 6.78904C9.28311 7.26466 9.00659 8.02817 9.00659 8.71908H9.00667Z" fill="#6B5DD3"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M46.1259 13.8783V15.4117C45.0911 14.2804 43.6524 13.5766 41.9359 13.5766C38.3517 13.5766 35.6509 16.4674 35.6509 20.2882C35.6509 24.1089 38.3517 26.9997 41.9359 26.9997C43.6524 26.9997 45.0911 26.2958 46.1259 25.1646V26.698H49.4073V13.8782H46.1259V13.8783ZM42.5669 23.8325C40.5476 23.8325 39.0331 22.2991 39.0331 20.2883C39.0331 18.2773 40.5476 16.7439 42.5669 16.7439C44.6114 16.7439 46.1259 18.2773 46.1259 20.2883C46.1259 22.2991 44.6114 23.8325 42.5669 23.8325ZM58.7718 11.2893C59.4281 11.2893 59.9582 11.44 60.463 11.7165V8.85093C59.731 8.47396 58.9989 8.29801 58.0399 8.29801C55.0866 8.29801 53.6984 10.0576 53.6984 12.7221V13.8783H51.679V16.8696H53.6984V26.6981H56.9797V16.8696H60.2106V13.8783H56.9797V12.9232C56.9797 11.8422 57.6107 11.2893 58.7717 11.2893L58.7718 11.2893ZM69.2468 13.6773C67.7324 13.6773 66.4704 14.3559 65.5363 15.5374V13.8783H62.255V26.6981H65.5363V20.615C65.5363 18.4281 66.8994 17.0456 69.2468 17.0456H69.8022V13.6773H69.2468V13.6773ZM73.3612 11.9931C74.5223 11.9931 75.431 11.1133 75.431 9.95695C75.431 8.80066 74.5223 7.9209 73.3612 7.9209C72.2001 7.9209 71.2915 8.80066 71.2915 9.95695C71.2915 11.1133 72.2001 11.9931 73.3612 11.9931ZM71.7205 26.6981H75.0018V13.8783H71.7205V26.6981ZM85.5023 13.5766C83.8363 13.5766 82.4228 14.2052 81.4132 15.3865V8.59972H78.1318V26.6981H81.4132V19.6598C81.4132 17.9002 82.6248 16.7439 84.4422 16.7439C86.1333 16.7439 87.2439 17.8751 87.2439 19.6095V26.6981H90.5253V18.5538C90.5253 15.5374 88.5312 13.5767 85.5024 13.5767L85.5023 13.5766ZM106.276 20.3133C106.276 16.4422 103.373 13.5766 99.5112 13.5766C95.6239 13.5766 92.6708 16.4422 92.6708 20.238C92.6708 24.0839 95.725 26.9998 99.814 26.9998C102.237 26.9998 104.307 26.0195 105.645 24.4359L103.449 22.5254C102.767 23.3801 101.48 24.109 99.9149 24.109C98.0471 24.109 96.684 23.0785 96.2297 21.4696H106.2C106.25 21.1178 106.276 20.6653 106.276 20.3134L106.276 20.3133ZM99.486 16.4422C101.076 16.4422 102.363 17.4729 102.767 19.0816H96.2045C96.6085 17.498 97.8705 16.4422 99.486 16.4422ZM118.316 13.8783V15.4117C117.281 14.2805 115.842 13.5766 114.126 13.5766C110.542 13.5766 107.841 16.4674 107.841 20.2883C107.841 24.109 110.542 26.9997 114.126 26.9997C115.842 26.9997 117.281 26.2959 118.316 25.1647V26.6981H121.597V13.8783H118.316V13.8783ZM114.757 23.8325C112.737 23.8325 111.223 22.2991 111.223 20.2883C111.223 18.2773 112.737 16.7439 114.757 16.7439C116.801 16.7439 118.316 18.2773 118.316 20.2883C118.316 22.2992 116.801 23.8325 114.757 23.8325ZM124.727 26.6981H128.008V8.59972H124.727V26.6981ZM132.325 22.7265C132.323 25.2898 133.713 26.9998 136.666 26.9998C137.625 26.9998 138.357 26.8239 139.064 26.4467V23.4052C138.585 23.6314 138.029 23.8325 137.373 23.8325C136.212 23.8325 135.607 23.2794 135.606 22.1986L135.604 19.8399L132.327 19.842L132.325 22.7265H132.325ZM148.858 13.5766C147.192 13.5766 145.778 14.2052 144.769 15.3865V8.59972H141.487V26.6981H144.769V19.6598C144.769 17.9002 145.98 16.7439 147.798 16.7439C149.489 16.7439 150.599 17.8751 150.599 19.6095V26.6981H153.881V18.5538C153.881 15.5374 151.887 13.5767 148.858 13.5767L148.858 13.5766Z" fill="#090F47"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M132.327 10.5806H135.586V13.2845H138.301V16.5292H135.586V19.2331H132.327V16.5292H129.612V13.2845H132.327V10.5806Z" fill="#6B5DD3"></path></g><defs><clipPath id="clip0_134_592"><rect width="156" height="30" fill="white" transform="translate(0 4)"></rect></clipPath></defs></svg>
                </div>
                <p className='text-base lg:text-xl'>Providing personalized, high-quality healthcare necessary to take control of your health with a plethora of patient resources from the comfort of a smartphone.</p>
                <div className="socials flex">
                    <a href='https://web.facebook.com/afrihealthlimited'>
                        <div className="socialimg">
                          <Image src={facebookImg} alt='facebook' />
                        </div>
                    </a>
                    <a href='https://twitter.com/afrihealthltd'>
                        <div className="socialimg">
                          <Image src={twitterImg} alt='twitter' />
                        </div>
                    </a>
                    <a href='https://www.instagram.com/weareafrihealth/'>
                        <div className="socialimg">
                          <Image src={InstagramImg} alt='Instagram' />
                        </div>
                    </a>
                </div>
            </div>
            <div className="topFooter2 first">
                <h6>Links</h6>
                <ul>
                    <a href='/'><li>Home</li></a>
                    <a href='/'><li>Our Products</li></a>
                    <a href='/'><li>About Us</li></a>
                    <a href='/'><li>Pricing</li></a>
                </ul>
            </div>
            <div className="topFooter2 second">
                <h6>Resources</h6>
                <ul>
                    <a href='/'><li>Partners</li></a>
                    <a href='/'><li>Careers</li></a>
                    <a href='/'><li>Press</li></a>
                </ul>
            </div>
            <div className="topFooter2">
                <h6>Our Office</h6>
                <ul>
                    <p className="topFooter3p">Nigeria</p>
                    <p className="topFooter3p">12e Admiralty way. Lekki Phase 1 Lagos</p>
                   
                </ul>
            </div>
        </div>
        <div className="bottomFooter">

        </div>
    </footer>
)
}
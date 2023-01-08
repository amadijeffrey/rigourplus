import facebookImg from '../public/Facebook.png'
import twitterImg from '../public/Twitter.png'
import InstagramImg from '../public/Instagram.png'
import Image from 'next/image'


export default function Footer(){
return(
    <footer>
        <div className="topFooter flex flex-col md:flex-row justify-between px-10 lg:px-20 ">
           <div className=" topFooter1">
                <div className="footerLogo">
                    
                </div>
                <p className='text-base lg:text-xl'>Providing personalized, high-quality healthcare necessary to take control of your health with a plethora of patient resources from the comfort of a smartphone.</p>
                <div className="socials flex">
                    <a href=''>
                        <div className="socialimg">
                          <Image src={facebookImg} alt='facebook' />
                        </div>
                    </a>
                    <a href=''>
                        <div className="socialimg">
                          <Image src={twitterImg} alt='twitter' />
                        </div>
                    </a>
                    <a href=''>
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
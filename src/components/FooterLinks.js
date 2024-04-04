import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';

const FooterLinks = () => {
    return (
        <div className='flex flex-wrap justify-around mt-10 w-[80%] m-auto'>
            <div className='w-full md:w-[20%] mb-4 mt-10'>
                <h2 className='my-10 text-2xl'>PRODUCT</h2>
                <ul >
                    <li>
                      Templates  
                    </li>
                    <li>
                      Explore  
                    </li>
                    <li>
                      Features  
                    </li>
                    <li>
                      Website Builder  
                    </li>
                    <li>
                      Web Accessibility  
                    </li>
                    <li>
                      Velvo  
                    </li>
                    <li>
                      Wix Playground  
                    </li>
                    <li>
                      My Sites  
                    </li>
                    <li>
                      Premium Plans  
                    </li>
                    <li>
                      Wix SEO  
                    </li>
                    <li>
                      Logo Maker  
                    </li>
                </ul>
            </div>
            <div className='w-full md:w-[20%] mb-4 mt-10'>
                <h2 className='my-10 text-2xl'>COMPANY</h2>
                <ul>
                    <li>
                      About Wix  
                    </li>
                    <li>
                      Press Room  
                    </li>
                    <li>
                      Investor Relations  
                    </li>
                    <li>
                      Wix Jobs 
                    </li>
                    <li>
                      Design Assets 
                    </li>
                    <li>
                      Terms of Use  
                    </li>
                    <li>
                      App Market Terms  
                    </li>
                    <li>
                      Privacy Policy
                    </li>
                    <li>
                      Privacy and Security Hub 
                    </li>
                    <li>
                      Accessibility Statement 
                    </li>
                    <li>
                      Abuse  
                    </li>
                </ul>
            </div>
            <div className='w-full md:w-[20%] mb-4 mt-10'>
                <h2 className='my-10 text-2xl'>COMMUNITY</h2>
                <ul>
                    <li>
                      Wix Blog 
                    </li>
                    <li>
                      Wix Marketplace  
                    </li>
                    <li>
                      Student Website  
                    </li>
                    <li>
                      Wix Encyclopedia 
                    </li>
                    <li>
                      Partner Community
                    </li>
                </ul>
            </div>
            <div className='w-full md:w-[20%] mb-4 mt-10'>
                <h2 className='my-10 text-2xl'>SUPPORT</h2>
                <ul>
                    <li>
                      Support Center  
                    </li>
                    <li>
                      Getting Started Guide  
                    </li>
                    <li>
                      Wix Learn  
                    </li>
                    <li>
                      Status Page 
                    </li>
                </ul>
            </div>
            <div className='w-full md:w-[20%] mb-4 mt-10'>
                <h2 className='my-10 text-2xl'>WiX</h2>
                <p>The wix website builder offers a complete solution from enterprise grade infrastructure and business features to advances SEO and marketing tools enabling anyone to create and grow online.</p>
                <p className='py-2'>&copy; 2006-2022 wix.com, Inc</p>
                <div className='mt-5'>
                <FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-600 p-2" /><FontAwesomeIcon icon={faTwitter} className="text-2xl text-gray-600 p-2" /><FontAwesomeIcon icon={faYoutube} className="text-2xl text-gray-600 p-2" /><FontAwesomeIcon icon={faPinterest} className="text-2xl text-gray-600 p-2" /><FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-600 p-2" /><FontAwesomeIcon icon={faTiktok} className="text-2xl text-gray-600 p-2" />
                </div>
            </div>
        </div>
    )
}

export default FooterLinks;
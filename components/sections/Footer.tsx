import { navigationLinks } from '@/constants';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

import Logo from '@/public/logo/logo-withWiteBG.png'
import Image from 'next/image';

const FooterSection = () => {
  return (
    <footer className="footer-gradient relative z-10 overflow-hidden">
      {/* Organic Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-500" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', filter: 'blur(80px)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-lime-400 to-green-500" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', filter: 'blur(60px)'}}></div>
      </div> */}
      <div className="content-width pt-12 pb-4">
        <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start text-center md:text-right lg:justify-between gap-8">
          {/* Company Info */}
          <div className='flex flex-col justify-center items-center gap-4 md:gap-2 text-center md:w-[300px]'>
            <Image src={Logo} alt='landscape logo' width={50} height={50} />
            <p className="text-green-100">
              نجسد جمال الطبيعة بإحياء المساحات عبر تنسيق حدائق احترافية وحلول نباتية مبتكرة ترتقي بالجمال وتلبي الاحتياجات.            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-green-100 hover:text-primary block"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                aria-label="X/Twitter"
                className="text-green-100 hover:text-primary block"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-green-100 hover:text-primary block"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-green-100 hover:text-primary block"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">روابط سريعة</h3>
            <div className="space-y-2 text-green-100">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-primary block duration-150"
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">خدماتنا</h3>
            <ul className="space-y-2 text-green-100">
              <li>تصميم الحدائق</li>
              <li>توريد النباتات</li>
              <li>خدمات الصيانة</li>
              <li>استشارات</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">تواصل معنا</h3>
            <div className="space-y-3">
              <a
                href="https://maps.app.goo.gl/T8tqhepM2Mu9mLtD9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-green-100">Ashmoun, Menoufia</span>
              </a>
              <a
                href="https://wa.me/+201002905831"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-green-100" dir="ltr">+20 100 290 5831</span>
              </a>
              <a
                href="mailto:info@maccalandscape.com"
                className="flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-green-100">info@maccalandscape.com</span>
              </a>
            </div>
          </div>
        </div>

        <div dir='ltr' className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100">
            © {new Date().getFullYear()} <a
              href="https://wa.me/+201552010195"
              target="_blank"
              rel="noopener noreferrer"
              className='text-primary'
            >ES95</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

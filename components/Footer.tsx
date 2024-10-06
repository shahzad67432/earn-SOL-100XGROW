import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/lib/data/testData'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-50 py-10 border-t-2 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo Section */}
          <div>
            <Link href="/" className="text-2xl font-bold text-green-950">
              100XGROW
            </Link>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row md:space-x-10">
            {FOOTER_LINKS.map((column, index) => (
              <FooterColumn key={index} title={column.title}>
                <ul className="space-y-2">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.link} className="text-green-600 hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Info */}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-sm text-green-800">
                    {link.label}:
                  </p>
                  <p className="text-sm text-green-600">
                    {link.value}
                  </p>
                </div>
              ))}
            </FooterColumn>

            {/* Social Links */}
            <FooterColumn title={SOCIALS.title}>
              <ul className="flex space-x-4">
                <li>
                  <Link href="https://www.instagram.com/solana/" className="text-green-600">
                    <Instagram size={24} />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/solana?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="text-green-600">
                    <Twitter size={24} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@Learnwithshahzad-sp5dx" className="text-green-600">
                    <Youtube size={24} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/shahzad-ali-225893298/" className="text-green-600">
                    <Linkedin size={24} />
                  </Link>
                </li>
              </ul>
            </FooterColumn>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-200 mt-10 pt-5 text-center">
          <p className="text-sm text-green-700">2024 100xGrow | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

const FooterColumn = ({title, children}:{title: string, children: any}) => (
  <div>
    <h4 className="text-lg font-semibold text-green-800 mb-3">{title}</h4>
    {children}
  </div>
);

export default Footer;

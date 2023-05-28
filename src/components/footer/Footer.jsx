import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Button } from '../../GlobalStyles'
import { NavIcon, LogoText, LogoIcon } from '../navbar/Navbar.styles'
import { 
    FooterContainer, 
    FooterRow, 
    FooterText, 
    Form, 
    FormInput, 
    FooterLinksItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialIcons, 
    SocialIconLink,
     } 
from './Footer.styles'

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterRow>
            <FooterLinksItems>
                <FooterLinkTitle fontBig upperCase>Newsletter</FooterLinkTitle>
                <FooterText>
                Become a part of our exclusive membership and gain access to the most up-to-date news and trends.
                </FooterText>
                <FooterText opacity>You can unsubscribe at any time.</FooterText>
                <Form>
                    <FormInput 
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <Button big fontBig>Subscribe</Button>
                </Form>
            </FooterLinksItems>
            <FooterLinksItems>
                <FooterLinkTitle upperCase>Company</FooterLinkTitle>
                <FooterLink to='/'>About</FooterLink>
                <FooterLink to='/'>Investors</FooterLink>
                <FooterLink to='/'>Contact Us</FooterLink>
                <FooterLink to='/'>Policy</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
                <FooterLinkTitle>
                    <NavIcon to='/'>
                        <LogoIcon />
                        <LogoText>Crypto</LogoText> COIN
                    </NavIcon>
                </FooterLinkTitle>
                <FooterText>
                CryptoCOIN offers a comprehensive analysis of the cryptocurrency market, including monitoring price movements, trading volume, and overall market trends.
                </FooterText>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </FooterLinksItems>
        </FooterRow>
    </FooterContainer>
  )
}

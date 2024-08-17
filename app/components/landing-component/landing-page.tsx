import { Anchor, Button, Container, Group, Image, Paper, Text, Title, Transition } from "@mantine/core";
import styles from './landing-page.module.scss'
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Particles from "../particles-component/particles";
import Pricing from "../pricing-component/pricing";


export default function LandingPage() {

    const [menuOverlayToggle, setmenuOverlayToggle] = useState(false);
    const { ref: ps5, inView: ps5IsVisible } = useInView({ triggerOnce: true });
    const { ref: retroGames, inView: retroGamesIsVisible } = useInView({ triggerOnce: true});
    const { ref: stayTuned, inView: stayTunedIsVisible } = useInView({ triggerOnce: true});
    const { ref: aboutText, inView: aboutTextIsVisible } = useInView({ triggerOnce: true})

    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const pricingRef = useRef(null);


    const scrollToSection = (ref: any, offset = 60) => (event: any) => {
        event.preventDefault();
        if (ref.current) {
            const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top,
                behavior: 'smooth',
            });
        }
        setmenuOverlayToggle(false);
    };

    const gridData = [
        {
            svg:
                'assets/images/psLogo.svg',
            title: 'PS5 GAMING',
            subText: 'Dive into the cutting-edge world of PS5 gaming. Enjoy breathtaking visuals and lightning-fast performance in our state-of-the-art lounge.',
        },
        {
            svg:
                'assets/images/retroLogo.svg',
            title: 'RETRO GAMES',
            subText: 'Take a trip down memory lane with our collection of retro games. From classic arcade machines to beloved console titles, we have it all.',
        },

        {
            svg: 'assets/images/stayTuned.svg',
            title: 'STAY TUNED',
            subText: 'Stay tuned for exciting new services coming your way. We’re always looking to expand and enhance your gaming experience.',
        },

    ];

    const socialsData = [
        {
            link: '#',
            altText: 'youtube',
            imageurl: 'assets/images/youtube.svg',
        },
        {
            link: '#',
            altText: 'facebook',
            imageurl: 'assets/images/facebook.svg',
        },
        {
            link: '#',
            altText: 'x',
            imageurl: 'assets/images/x.svg',
        },
        {
            link: '#',
            altText: 'instagram',
            imageurl: 'assets/images/instagram.svg',
        },
        {
            link: '#',
            altText: 'whatsapp',
            imageurl: 'assets/images/whatsapp.svg',
        },

    ]

    const toggleNavbarMobile = () => {
        setmenuOverlayToggle(!menuOverlayToggle);
    }

    // const gridDetails = gridData.map((item, index) => {
    //     // console.log("index :",index)
    //     return (
    //         <div key={index} className={styles.gridDiv}>
    //             <div className={styles.imageTextDiv}>
    //                 <Image
    //                     src={item.svg}
    //                     alt={item.title}
    //                     width={32}
    //                     height={32}
    //                 />
    //                 <Title style={{ textAlign: 'center' }} order={3}>{item.title}</Title>
    //             </div>
    //             <Text className={styles.textDescription} >{item.subText}</Text>
    //         </div>)
    // });

    const gridDetails = (<>
        <div ref={ps5} key={1} className={`${styles.gridDiv} ${ps5IsVisible ? styles.animationslideUP : ''}`} >
            <div className={styles.imageTextDiv}>
                <Image
                    src={'assets/images/psLogo.svg'}
                    alt={'PS5 GAMING'}
                    width={32}
                    height={32}
                />
                <Title style={{ textAlign: 'center' }} className={`${ps5IsVisible ? styles.animationslideUP : ''}`} order={3}>{'PS5 GAMING'}</Title>
            </div>
            <Text className={`${styles.textDescription} ${ps5IsVisible ? styles.animationslideUP : ''}`} >Dive into the cutting-edge world of PS5 gaming. Enjoy breathtaking visuals and lightning-fast performance in our state-of-the-art lounge.</Text>
        </div>
        <div ref={retroGames} key={2} className={`${styles.gridDiv} ${retroGamesIsVisible ? styles.animationslideUP : ''}`} >
            <div className={styles.imageTextDiv}>
                <Image
                    src={'assets/images/retroLogo.svg'}
                    alt={'RETRO GAMES'}
                    width={32}
                    height={32}
                />
                <Title style={{ textAlign: 'center' }} className={`${ps5IsVisible ? styles.animationslideUP : ''}`} order={3}>{'RETRO GAMES'}</Title>
            </div>
            <Text className={`${styles.textDescription} ${ps5IsVisible ? styles.animationslideUP : ''}`} >Take a trip down memory lane with our collection of retro games. From classic arcade machines to beloved console titles, we have it all.</Text>
        </div>
        <div ref={stayTuned} key={3} className={`${styles.gridDiv} ${stayTunedIsVisible ? styles.animationslideUP : ''}`}>
            <div className={styles.imageTextDiv}>
                <Image
                    src={'assets/images/stayTuned.svg'}
                    alt={'STAY TUNED'}
                    width={32}
                    height={32}
                />
                <Title style={{ textAlign: 'center' }} className={`${ps5IsVisible ? styles.animationslideUP : ''}`} order={3}>{'STAY TUNED'}</Title>
            </div>
            <Text className={`${styles.textDescription} ${ps5IsVisible ? styles.animationslideUP : ''}`} >Stay tuned for exciting new services coming your way. We’re always looking to expand and enhance your gaming experience.</Text>
        </div>
    </>
    );

    const socials = socialsData.map((item, index) => {
        return (
            <Image key={index}
                className={styles.socials}
                width={50}
                src={item.imageurl}
                alt={item.altText}
            />
        );
    })

    const titleLinks = (
        <>
            <Anchor href="#homes" onClick={scrollToSection(homeRef)} style={{}} target="_blank" >
                Home
            </Anchor>
            <Anchor href="#Services" onClick={scrollToSection(servicesRef)} target="_blank" >
                Services
            </Anchor>
            {/* <Anchor href="#Gallery" target="_blank" >
                        Gallery
                    </Anchor>
                    <Anchor href="#Pricing" target="_blank" >
                        Pricing
                    </Anchor> */}
            <Anchor href="#Pricing" onClick={scrollToSection(pricingRef)} target="_blank" >
                Pricing
            </Anchor>
            <Anchor href="#About" onClick={scrollToSection(aboutRef)} target="_blank" >
                About
            </Anchor>
            <Anchor href="#Contact" onClick={scrollToSection(contactRef)} target="_blank" >
                Contact
            </Anchor>
        </>
    )

    return (
        <>
            <Paper className={`${styles.titleNavMobile} ${menuOverlayToggle && styles.overlayMenu}`}>
                <div className={styles.logoHam}>
                    <Image
                        width={30}
                        src={'assets/images/rLogo.svg'}
                        alt={'Respawn Gaming Logo'}
                    />

                    <button
                        className={`${styles.hamburger}`}
                        onClick={toggleNavbarMobile}
                        aria-label="Toggle navigation"
                    >
                        <div className={`${styles.navIcon4} ${menuOverlayToggle ? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>

                <div>
                    <Group className={`${styles.titleLinksMobile} ${menuOverlayToggle ? styles.open : ''}`}>
                        {titleLinks}
                    </Group>
                </div>

            </Paper >

            <Paper
                className={`${styles.titleNav}`}>
                <Image
                    width={100}
                    src={'assets/images/RespawnGaming-logo.svg'}
                    alt={'Respawn Gaming Logo'}
                />

                <Group className={styles.titleLinks}>
                    {titleLinks}
                </Group>

            </Paper>
            <Container ref={homeRef} className={`${styles.section1} ${menuOverlayToggle ? styles.section1MoveDown : ''}`}
            // style={{
            //     zIndex: 0,
            //     transform: `translateY(${offsetY * 0.3}px)`
            // }}
            >
                <div className={styles.homeQuote}>
                    <Text  className={styles.order1}>PLAY,</Text>
                    <Text  className={styles.order1}>RELAX,</Text>
                    <Text style={{ marginBottom: '0.2%' }}  className={styles.order1}>RESPAWN.</Text>
                    <Text className={styles.order4}>
                        JOIN US AT <span>RESPAWN GAMING.</span>
                    </Text>
                </div>
                <Image className={styles.ps5Main}
                    width={150}

                    src={'assets/images/controller1.svg'}
                    alt={'dual sensor controller ps5'}
                />
                <Image className={styles.ps5Main2}
                    width={70}

                    src={'assets/images/controller2.svg'}
                    alt={'dual sensor controller ps5'}
                />
                <div className={styles.backgroundCircle}></div>
                <Particles
                    className={styles.particlesContainer}
                    quantity={50}
                    ease={80}
                    color={'#ffffff'}
                />
                <Anchor style={{position: 'relative' ,zIndex: '5000'}} href="https://maps.app.goo.gl/1P1SKcRu12p1cdVY6" target="_blank" >
                    <span>
                        <Image
                            color={'white'}
                            width={10}
                            src={'assets/images/myLocation.svg'}
                            alt={"find direction to respawn gaming"}
                        />
                    </span>Locate us on map
                </Anchor>
            </Container>
            <Container ref={servicesRef} className={`${styles.section2}  ${menuOverlayToggle ? styles.section2MoveDown : ''}`}
            // style={{
            //     zIndex: 10,
            //     transform: `translateY(${offsetY * 0.2}px)`
            // }}
            >
                <div className={styles.circularBack}></div>
                <Title order={2}>OUR SERVICES</Title>
                <div className={styles.mainGrid}>
                    {gridDetails}
                </div>

            </Container>
            <div ref={pricingRef}>
                <Pricing menuOverlayToggle={menuOverlayToggle} />
            </div>
            <Container ref={aboutRef} className={`${styles.section3} ${menuOverlayToggle ? styles.section3MoveDown : ''}`}
            // style={{
            //     zIndex: 10,
            //     transform: `translateY(${offsetY * 0.1}px)`
            // }}
            >
                <div className={styles.circularBack}></div>

                <div className={styles.galaxyDiv}>
                    <Image className={styles.galaxyTriangle}
                        width={70}
                        style={{
                            zIndex: 0,
                            // transform: `translateY(${offsetY * 0.07}px)` 
                        }}
                        src={'assets/images/galaxyTriangle.svg'}
                        alt={'dual sensor controller ps5'}
                    /> <Image className={styles.galaxyCross}
                        width={70}
                        style={{
                            zIndex: 0,
                            // transform: `translateY(${offsetY * 0.07}px)` 
                        }}
                        src={'assets/images/galaxyCross.svg'}
                        alt={'dual sensor controller ps5'}
                    /> <Image className={styles.galaxyCircle}
                        width={70}
                        style={{
                            zIndex: 0,
                            // transform: `translateY(${offsetY * 0.07}px)` 
                        }}
                        src={'assets/images/galaxyCircle.svg'}
                        alt={'dual sensor controller ps5'}
                    /> <Image className={styles.galaxySquare}
                        width={70}
                        style={{
                            zIndex: 0,
                            // transform: `translateY(${offsetY * 0.07}px)` 
                        }}
                        src={'assets/images/galaxySquare.svg'}
                        alt={'dual sensor controller ps5'}
                    />
                </div>
                <Title order={2}>ABOUT US</Title>
                <Text ref={aboutText} className={`${aboutTextIsVisible ? styles.animationslideUP : ''}`} >At <span> RESPAWN GAMING</span>, we are dedicated to providing the best gaming experience. Whether you’re a fan of the latest PS5 games or nostalgic for retro classics, we have something for everyone. Our cozy lounge is the perfect place to relax and play.</Text>
            </Container>
            <footer>
                <Container ref={contactRef} className={styles.footer}
                // style={{
                //     zIndex: 10,
                //     transform: `translateY(${offsetY * 0}px)`
                // }}
                >
                    <div className={styles.topDiv}>
                        <div className={styles.socialLogoDiv}>
                            <Image className={styles.respawnD}
                                // width={180}
                                // style={{
                                //     zIndex: 0,
                                //     // transform: `translateY(${offsetY * 0.07}px)` 
                                // }}
                                src={'assets/images/respawnDark.svg'}
                                alt={'Respawn Gaming Logo'}
                            />
                            <div className={styles.socialsDiv}>
                                {socials}
                            </div>
                        </div>
                        <Group className={styles.titleLinksFooter}>
                            <Anchor href="#Home" target="_blank" >
                                HOME
                            </Anchor>
                            <Anchor href="#Services" target="_blank" >
                                SERVICES
                            </Anchor>
                            <Anchor href="#Gallery" target="_blank" >
                                GALLERY
                            </Anchor>
                            <Anchor href="#Pricing" target="_blank" >
                                PRICING
                            </Anchor>
                            <Anchor href="#About" target="_blank" >
                                ABOUT
                            </Anchor>
                            <Anchor href="#Contact" target="_blank" >
                                CONTACT
                            </Anchor>
                        </Group>
                        <div className={styles.contactus}>
                            <Title order={2}>
                                CONTACT US
                            </Title>
                            <a href="tel:+917907856810" aria-label="Phone NUmber">
                                <Image
                                    width={15}
                                    src={'assets/images/callIcon.svg'}
                                    alt={'call respawn gaming'}
                                />
                                +917907856810
                            </a>
                            <a href="mailto:respawngamingllp@gmail.com" aria-label="Email Address">

                                <Image
                                    width={15}
                                    src={'assets/images/mailIcon.svg'}
                                    alt={'mail to respawn gaming'}
                                />
                                respawngamingllp@gmail.com
                            </a> 
                            <a className={styles.direction} href="https://maps.app.goo.gl/1P1SKcRu12p1cdVY6" target="_blank" >
                                <Image
                                    color={'red'}
                                    width={13}
                                    src={'assets/images/locationDark.svg'}
                                    alt={"find direction to respawn gaming"}
                                />
                                <Title order={4}>Find us on Google maps</Title>
                            </a>

                        </div>
                    </div>
                    <div className={styles.bottomDiv}>
                        <Text className={styles.copyright}>Copyright © 2024 Respawn gaming llp. All Rights Reserved.</Text>

                    </div>
                </Container>
            </footer>

        </>
    )
}
import { Anchor, Container, Grid, Group, Image, Paper, SimpleGrid, Text, Title } from "@mantine/core";
import styles from './landing-page.module.scss'
import { useEffect, useState } from "react";


export default function LandingPage() {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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


    const gridDetails = gridData.map((item, index) => {
        // console.log("index :",index)
        return (
            <div key={index} className={styles.gridDiv}>
                <div className={styles.imageTextDiv}>
                    <Image
                        src={item.svg}
                        alt="Descriptive alt text"
                        width={32}
                        height={32}
                    />
                    <Title style={{ textAlign: 'center' }} order={3}>{item.title}</Title>
                </div>
                <Text className={styles.textDescription} >{item.subText}</Text>
            </div>)
    }
    );



    return (
        <>
            <Paper
                className={`${styles.titleNav}`}>
                <Image
                    width={100}
                    src={'assets/images/RespawnGaming-logo.svg'}
                    alt={'Respawn Gaming Logo'}
                />

                <Group className={styles.titleLinks}>
                    <Anchor href="#Home" target="_blank" >
                        Home
                    </Anchor>
                    <Anchor href="#Services" target="_blank" >
                        Services
                    </Anchor>
                    <Anchor href="#Gallery" target="_blank" >
                        Gallery
                    </Anchor>
                    <Anchor href="#Pricing" target="_blank" >
                        Pricing
                    </Anchor>
                    <Anchor href="#About" target="_blank" >
                        About
                    </Anchor>
                    <Anchor href="#Contact" target="_blank" >
                        Contact
                    </Anchor>
                </Group>

            </Paper>
            <Container className={styles.section1} 
            style={{ 
                zIndex: 0,
                transform: `translateY(${offsetY * 0.3}px)` 
            }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Title order={1}>PLAY,</Title>
                    <Title order={1}>RELAX,</Title>
                    <Title style={{ marginBottom: '0.2%' }} order={1}>RESPAWN.</Title>
                    <Title order={6}>JOIN US AT <span> <Image
                        width={310}
                        src={'assets/images/respawnText.svg'}
                        alt={'Respawn Gaming Logo'}
                    /> .</span></Title>
                </div>
                <Anchor href="https://www.google.com/maps/dir//Tata+Consultancy+Services,+Infopark+E,+Kakkanad,+Kerala" target="_blank" >
                    <span>
                        <Image
                            color={'white'}
                            width={10}
                            src={'assets/images/myLocation.svg'}
                        />
                    </span>Locate us on map
                </Anchor>
                <Image className={styles.ps5Main}
                    width={150}
                    style={{ zIndex: 2, 
                        // transform: `translateY(-${offsetY * 0.2}px)` 
                    }}
                    src={'assets/images/controller1.svg'}
                    alt={'Respawn Gaming Logo'}
                />
                <Image className={styles.ps5Main2}
                    width={70}
                    style={{ zIndex: 0, 
                        // transform: `translateY(${offsetY * 0.07}px)` 
                    }}
                    src={'assets/images/controller2.svg'}
                    alt={'Respawn Gaming Logo'}
                />
            </Container>
            <Container className={styles.section2}
            style={{ 
                zIndex: 10,
                transform: `translateY(${offsetY * 0}px)` 
            }} >
                <Title order={1}>OUR SERVICES</Title>
                <div className={styles.mainGrid}>
                    {gridDetails}
                </div>

            </Container>
            

        </>
    )
}
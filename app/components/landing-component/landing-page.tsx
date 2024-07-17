import { Anchor, Container, Group, Image, Paper, Title } from "@mantine/core";
import styles from './landing-page.module.scss'


export default function LandingPage() {

    return (
        <>
            <Paper
                className={`${styles.titleNav}`}>
                <Image
                    width={130}
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
            <Container className={styles.section1} >
                <div style={{display:'flex', flexDirection: 'column'}}>
                    <Title order={1}>PLAY,</Title>
                    <Title order={1}>RELAX,</Title>
                    <Title style={{ marginBottom: '0.2%' }} order={1}>RESPAWN.</Title>
                    <Title order={6}>JOIN US AT <span>RESPAWN GAMING .</span></Title>
                </div>
                <Anchor >Locate us on map</Anchor>
            </Container>

        </>
    )
}
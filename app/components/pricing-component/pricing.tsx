import { Button, Container, Grid, GridCol, SimpleGrid, Text, Title } from "@mantine/core";
import styles from './pricing.module.scss';
import { useInView } from "react-intersection-observer";


type PricingProps = {
    menuOverlayToggle: boolean;
  };

const Pricing: React.FC<PricingProps> = ({menuOverlayToggle}) => {

    const { ref: price150, inView: price150IsVisible } = useInView({ delay: 200, triggerOnce: true });
    const { ref: price200, inView: price200IsVisible } = useInView({ delay: 200, triggerOnce: true });
    const { ref: price400, inView: price400IsVisible } = useInView({ delay: 200, triggerOnce: true });
    const { ref: price500, inView: price500IsVisible } = useInView({ delay: 200, triggerOnce: true });
    

    return (
        <Container className={`${styles.sectionPricing} ${menuOverlayToggle ? styles.sectionPricingMoveDown : ''}`}>
            <div className={styles.circularBack}></div>
            <Title order={1}>PRICING</Title>
            <Text>We offer a variety of gaming session options to suit your needs. Enjoy our top-notch gaming setups with friends or solo at affordable rates.</Text>
            <div className={styles.rowGrid}>
                <div key={150} ref={price150} className={`${styles.gridItem} ${price150IsVisible ? styles.animationslideUP : ''}`}>
                    <div className={`${styles.topDiv} ${price150IsVisible ? styles.animationSlideLeft : ''}`}>
                        <Text className={styles.textHeader}>Single Controller</Text>
                        <div style={{ display: "flex" }}>
                            <Text className={styles.price}>₹150</Text><Text className={styles.pHour}>p/hour</Text>
                        </div>
                    </div>

                    <Button  onClick={() => window.open('https://wa.me/+98137861868', '_blank')} className={styles.buttonContact}>contact us</Button>
                </div>
                <div key={200} ref={price200} className={`${styles.gridItem} ${price200IsVisible ? styles.animationslideUP : ''}`}>
                    <div className={`${styles.topDiv} ${price200IsVisible ? styles.animationSlideLeft : ''}`}>
                        <Text className={styles.textHeader}>Dual Controller</Text>
                        <div style={{ display: "flex" }}>
                            <Text className={styles.price}>₹280</Text><Text className={styles.pHour}>p/hour</Text>
                        </div>
                    </div>

                    <Button onClick={() => window.open('https://wa.me/+98137861868', '_blank')} className={styles.buttonContact}>contact us</Button>
                </div>
            </div>
            <div className={styles.rowGrid}>
                <div key={400} ref={price400} className={`${styles.gridItem} ${price400IsVisible ? styles.animationslideUP : ''}`}>
                    <div className={`${styles.topDiv} ${price400IsVisible ? styles.animationSlideLeft : ''}`}>
                        <Text className={styles.textHeader}>Triple Controller</Text>
                        <div style={{ display: "flex" }}>
                            <Text className={styles.price}>₹400</Text><Text className={styles.pHour}>p/hour</Text>
                        </div>
                    </div>

                    <Button onClick={() => window.open('https://wa.me/+98137861868', '_blank')} className={styles.buttonContact}>contact us</Button>
                </div>
                <div key={500} ref={price500} className={`${styles.gridItem} ${price500IsVisible ? styles.animationslideUP : ''}`}>
                    <div className={`${styles.topDiv} ${price500IsVisible ? styles.animationSlideLeft : ''}`}>
                        <Text className={styles.textHeader}>Quadtruple Controller</Text>
                        <div style={{ display: "flex" }}>
                            <Text className={styles.price}>₹500</Text><Text className={styles.pHour}>p/hour</Text>
                        </div>
                    </div>

                    <Button onClick={() => window.open('https://wa.me/+98137861868', '_blank')} className={styles.buttonContact}>contact us</Button>
                </div>
            </div>
        </Container>
    )
}

export default Pricing;
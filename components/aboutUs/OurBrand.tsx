import React from 'react'
import { Section } from './style'
import Image from 'next/image'
import { Container } from '../../theme/styled-box'
function OurBrand() {
    return (
        <Section>
            <Container>
                <div className="ourbrand-section">
                    <h2>Our Brand</h2>
                    <Image
                        alt="handshake"
                        objectFit="contain"
                        layout="fill"
                        src="/aboutus/PULSEPLAY-LOGO-3.png"
                    />
                    <Image
                        alt="handshake"
                        objectFit="contain"
                        layout="fill"
                        src="/aboutus/Group.png"
                    />
                </div>
            </Container>
        </Section>
    )
}

export default OurBrand
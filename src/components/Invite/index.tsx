import {
    Button,
    Card, ColorBox, ColorPalettes,
    Container, ContentCard,
    HorizontMarging,
    VerticalMarging,
    Wrapper,
    WrapperCard
} from "./invite.styles.tsx";
import * as React from "react";
import {Image} from "../AboutUs/about-us.styles.tsx";
import noivo from "../../assets/noivo.jpg";

interface InvitationProps {
    type: 'padrinho' | 'madrinha' | 'convidado';
    name: string;
}


export const Invite: React.FC<InvitationProps> = ({type, name}) => {
    const renderMessage: (element: React.ReactElement) => React.ReactElement = (element) => {
        switch (type) {
            case 'padrinho':
                return (<>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                            <div>
                                <p>
                                    Querido <strong>{name}</strong>,<br/>
                                    Você é muito especial para nós e, por isso, gostaríamos de convidá-lo a ser
                                    nosso <strong>Padrinho</strong>.
                                    Sua presença será essencial para tornar esse momento ainda mais especial. 🥂
                                </p>
                                <p>
                                    <strong>Traje e Paleta de Cores:</strong>
                                    <br/>
                                    - Terno: Preto ou Azul Marinho
                                    <ColorPalettes>
                                        <ColorBox color={'#7c7b7b'}/>
                                        <ColorBox color={'#a3a1a1'}/>
                                        <ColorBox color={'#99a8b6'}/>
                                    </ColorPalettes>
                                    <br/>
                                    - Gravata: Azul Bebe ou sem gravata
                                    <ColorPalettes>
                                        <ColorBox color={'#e49a8d'}/>
                                        <ColorBox color={'#f3ac9f'}/>
                                        <ColorBox color={'#facab6'}/>
                                    </ColorPalettes>
                                </p>
                            </div>
                            <Image
                                src={noivo}
                                alt="Noivo"
                                style={{maxWidth: '250px', height: 'auto', borderRadius: '8px'}}
                            />
                        </div>

                    </>

                );
            case 'madrinha':
                return (<>
                        <p>
                            Querida <strong>{name}</strong>,<br/>
                            É com muito amor que convidamos você a ser nossa <strong>Madrinha</strong>. Sabemos que sua
                            luz
                            trará ainda
                            mais encanto para o nosso grande dia! 💖
                        </p>
                        {element}
                        <p>
                            <strong>Vestimenta e Paleta de Cores:</strong>
                            <br/>
                            - Vestido Longo: [Informe a cor escolhida, ex: Rosa Chá]
                            <br/>
                            - Acessórios: Tonalidades leves e elegantes
                        </p>
                    </>

                );
            default: // Convidado normal
                return (<>
                        <p>
                            Querido(a) <strong>{name}</strong>,<br/>
                            É com imensa alegria que convidamos você para celebrar conosco esse dia tão especial! Sua
                            presença é um
                            presente muito importante para nós.
                        </p>
                        {element}
                    </>

                );
        }
    };
    return (
        <Wrapper>
            <Container>
                <WrapperCard>
                    <Card>
                        <HorizontMarging/>
                        <VerticalMarging/>
                        <ContentCard>
                            <h1>Estamos nos casando!</h1>
                            {renderMessage(
                                <p>
                                    Data: 27 de setembro de 2025<br/>
                                    Local: Villaví - Recreio Internacional - Rua D 1550 - Ribeirao Preto-SP <br/>
                                    Horário: 16:30
                                </p>
                            )}


                            <p>Por favor, confirme sua presença até o dia !</p>
                            <p>
                                Com carinho, <strong>Michel dos Santos Kuguio</strong> & <strong>Carolina Tavares de
                                Oliveira</strong>
                            </p>
                            <Button>Confirmar</Button>
                        </ContentCard>
                    </Card>
                </WrapperCard>
            </Container>

        </Wrapper>

    )
}
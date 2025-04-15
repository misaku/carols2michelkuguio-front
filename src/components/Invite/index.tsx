import {
    Button,
    Card,
    ColorBox,
    ColorPalettes,
    Container,
    ContainerCard,
    ContainerImageCard,
    ContentCard,
    HorizontMarging,
    Image, Search,
    SectionCard,
    VerticalMarging,
    Wrapper,
    WrapperCard,
    WrapperImage
} from "./invite.styles.tsx";
import * as React from "react";
import padrinhos from "../../assets/padrinhos.jpg";
import madrinhas from "../../assets/madrinhas.jpg";
import {AnimatedComponent} from "../Animations";
import {memo, useCallback, useState} from "react";
import * as axios from "axios";
import {api} from "../../service.ts";

interface InvitationProps {
    type: 'madrinha_e_padrinho' | 'padrinho' | 'madrinha' | 'convidado';
    name: string;
}


export const Invite: React.FC = memo(() => {
    const [phone, setPhone] = useState("");
    const [inviteType, setInviteType] = useState<'madrinha_e_padrinho' | 'padrinho' | 'madrinha' | 'convidado'>();
    const [responseData, setResponseData] = useState<any>();

    const applyMask = useCallback((value: string) => {
        value = value.replace(/\D/g, ""); // Remove tudo que não é número

        if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

        if (value.length > 10) {
            return value.replace(/(\d{2})(\d{1})(\d{4})(\d{0,4})/, "($1) $2 $3-$4");
        } else if (value.length > 6) {
               return value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else if (value.length > 2) {
            return value.replace(/(\d{2})(\d{0,4})/, "($1) $2");
        } else if (value.length > 0) {
            return value.replace(/(\d{0,2})/, "($1");
        }

        return value;
    }, []);


    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(applyMask(e.target.value));
        },
        [applyMask]
    );

    const handleSearch = useCallback(async ()=>{
        if(phone){
            try {
                const response =  await api.get(`/invite/${phone}`)
                const hasPadrinho = response.data.users.some((user?: { honor?: { title?: string; }; })=>user?.honor?.title?.toLowerCase() === 'padrinho')
                const hasMadrinha = response.data.users.some((user?: { honor?: { title?: string; }; })=>user?.honor?.title?.toLowerCase() === 'madrinha')
                if(hasPadrinho && hasMadrinha){
                    setInviteType('madrinha_e_padrinho')
                } else if (hasPadrinho) {
                    setInviteType('padrinho')
                } else if (hasMadrinha) {
                    setInviteType('madrinha')
                } else {
                    setInviteType('convidado')
                }
                setResponseData(response.data)
                console.log(
                    response.data.users.map((user?: { honor?: { title?: string; }; })=>user?.honor?.title?.toLowerCase())
                )
                console.log({response});
            }catch (e) {
                console.error(e);
            }

        }
    },[phone])

    const renderMessage: (element: React.ReactElement) => React.ReactElement = (element) => {
        switch (inviteType) {
            case 'padrinho':
                return (<ContainerCard>

                        <SectionCard>
                            <p>
                                Querido <strong>{responseData?.title}</strong>,<br/>
                                Você é muito especial para nós e, por isso, gostaríamos de convidá-lo a ser
                                nosso <strong>Padrinho</strong>.
                                Sua presença será essencial para tornar esse momento ainda mais especial. 🥂
                            </p>
                            {element}
                            <p>

                                Terno Cinza Claro e Sem Gravata
                            </p>
                        </SectionCard>
                        <WrapperImage>
                            <strong>Paleta de cores</strong>
                            <ColorPalettes>
                                <ColorBox color={'#e9ecef'}/>
                                <ColorBox color={'#edede9'}/>
                                <ColorBox color={'#dee2e6'}/>
                                <ColorBox color={'#ced4da'}/>
                                <ColorBox color={'#d4d4d4'}/>
                                <ColorBox color={'#c6cdd7'}/>
                                <ColorBox color={'#cbcbd7'}/>
                            </ColorPalettes>
                            <Image
                                src={padrinhos}
                                alt="Padrinhos"
                            />
                        </WrapperImage>
                    </ContainerCard>
                );
            case 'madrinha':
                return (<ContainerCard>
                        <SectionCard>
                            <p>
                                Querida <strong>{responseData?.title}</strong>,<br/>
                                É com muito amor que convidamos você a ser nossa <strong>Madrinha</strong>. Sabemos que
                                sua
                                luz
                                trará ainda
                                mais encanto para o nosso grande dia! 💖
                            </p>
                            {element}
                            <p>
                                <strong>Vestido Longo Rosa Claro:</strong>
                            </p>
                        </SectionCard>
                        <WrapperImage>
                            <strong>Paleta de cores</strong>
                            <ColorPalettes>
                                <ColorBox color={'rgb(250,225,221)'}/>
                                <ColorBox color={'rgb(250,227,228)'}/>
                                <ColorBox color={'rgb(250,215,217)'}/>
                                <ColorBox color={'rgb(250,216,231)'}/>
                                <ColorBox color={'rgb(249,215,225)'}/>
                                <ColorBox color={'rgb(247,199,219)'}/>
                                <ColorBox color={'rgb(246,204,215)'}/>
                            </ColorPalettes>
                            <Image
                                src={madrinhas}
                                alt="Madrinhas"
                            />
                        </WrapperImage>
                    </ContainerCard>
                );
            case 'madrinha_e_padrinho':
                return (
                    <ContainerCard both={true}>
                        <SectionCard>
                            <p>
                                Queridos <strong>{responseData?.title}</strong>,<br/>
                                É com enorme carinho que queremos convidá-los para fazerem parte do nosso dia mais
                                especial,
                                não só como amigos queridos, mas como nossos <strong>Madrinha e Padrinho</strong>.
                            </p>
                            <p>
                                Vocês são exemplo de amor, amizade e alegria em nossas vidas, e ter vocês ao nosso lado
                                trará um brilho ainda maior para essa celebração tão significativa. 🥂💖
                            </p>
                            {element}
                            <p>
                                <strong>Orientações:</strong><br/>
                                - Padrinho: Terno Cinza Claro e Sem Gravata<br/>
                                - Madrinha: Traje na paleta de cores abaixo.<br/>
                            </p>
                        </SectionCard>
                        <ContainerImageCard>
                            <WrapperImage>
                                <strong>Paleta de cores masculino</strong>
                                <ColorPalettes>
                                    <ColorBox color={'#e9ecef'}/>
                                    <ColorBox color={'#edede9'}/>
                                    <ColorBox color={'#dee2e6'}/>
                                    <ColorBox color={'#ced4da'}/>
                                    <ColorBox color={'#d4d4d4'}/>
                                    <ColorBox color={'#c6cdd7'}/>
                                    <ColorBox color={'#cbcbd7'}/>
                                </ColorPalettes>
                                <Image
                                    src={padrinhos}
                                    alt="Padrinhos"
                                />
                            </WrapperImage>
                            <WrapperImage>
                                <strong>Paleta de cores feminana</strong>
                                <ColorPalettes>
                                    <ColorBox color={'rgb(250,225,221)'}/>
                                    <ColorBox color={'rgb(250,227,228)'}/>
                                    <ColorBox color={'rgb(250,215,217)'}/>
                                    <ColorBox color={'rgb(250,216,231)'}/>
                                    <ColorBox color={'rgb(249,215,225)'}/>
                                    <ColorBox color={'rgb(247,199,219)'}/>
                                    <ColorBox color={'rgb(246,204,215)'}/>
                                </ColorPalettes>
                                <Image
                                    src={madrinhas}
                                    alt="Madrinhas"
                                />
                            </WrapperImage>
                        </ContainerImageCard>

                    </ContainerCard>
                );

            default: // Convidado normal
                return (
                    <SectionCard>
                        <p>
                            Querido(a) <strong>{name}</strong>,<br/>
                            É com imensa alegria que convidamos você para celebrar conosco esse dia tão especial! Sua
                            presença é um
                            presente muito importante para nós.
                        </p>
                        {element}
                    </SectionCard>


                );
        }
    };
    return (
        <Wrapper>
            <Container>
                <WrapperCard>
                    <AnimatedComponent animationType={'FadeInRightUp'}>
                        <Card>
                            <HorizontMarging/>
                            <VerticalMarging/>
                            <ContentCard>
                                <h1>Estamos nos casando!</h1>
                                {!inviteType?(<><p>
                                    Digite seu número de telefone logo abaixo para localizar seu convite e confirmar sua presença! 😊
                                </p>
                                <Search>
                                    <input value={phone} placeholder={'(00) 0 0000-0000'} maxLength={15} type={'tel'} maxLength={15} onChange={handleChange}/>
                                    <button type={"button"} onClick={handleSearch}>Buscar</button>
                                </Search></>):(<>
                                    {renderMessage(
                                        <>
                                            <p>
                                                Data: 27 de setembro de 2025<br/>
                                                Local: Villaví - Recreio Internacional - Rua D 1550 - Ribeirao Preto-SP <br/>
                                                Horário: 16:30
                                            </p>
                                            <p>Por favor, confirme sua presença até o dia !</p>
                                            <p>
                                                Com carinho, <strong>Michel dos Santos Kuguio</strong> & <strong>Carolina
                                                Tavares de
                                                Oliveira</strong>
                                            </p>
                                        </>
                                    )}


                                    <Button>Confirmar</Button>
                                </>)}

                            </ContentCard>
                        </Card>
                    </AnimatedComponent>

                </WrapperCard>
            </Container>

        </Wrapper>

    )
});

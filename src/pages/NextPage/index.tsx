import { BackgroundNext } from "../../components/General/background/backgroundNext";
import { Agradecimento, Footer, Formato } from "./styles";

export default function NextPage(){
    return(
        <BackgroundNext>
            <Formato>
                <div id="logo" className="logo">
                    <img src="src\Images\logo-horizontal.png" alt="logo" width={200}/>
                </div>
                <div className="svg">
                    <img id="svg" src="src\Images\health-professional-team-animate.svg" alt="svg" width={400}/>
                </div>
                <Agradecimento>
                    <p>
                        <div id="ngrt" className="ngrt">
                            <b>Obrigado por compartilhar sua experiência conosco!</b><br/> <br/>
                        </div>
                        Sua avaliação é muito importante e nos ajuda a garantir que estamos sempre oferecendo o melhor atendimento possível. <br/> <br/>
                        <div id="ngrt" className="ngrt">
                            <p>Obrigado por escolher nossos serviços.</p>
                        </div>
                    </p>
                </Agradecimento>
                <Footer>
                    <img src="src\Images\ona-nv3.png" alt="" width={100} />
                </Footer>
            </Formato>
        </BackgroundNext>
    )
}
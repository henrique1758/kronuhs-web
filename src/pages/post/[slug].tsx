/* eslint-disable @next/next/no-img-element */
import { FacebookLogo, GithubLogo, HandsClapping, LinkedinLogo, TwitterLogo } from "phosphor-react";
import { NewsletterBanner } from "../../components/NewsletterBanner";
import { Comment } from "../../components/Comment";
import styles from "../../styles/Post.module.scss";
import { Button } from "../../components/Button";

export default function Post() {
    return (
        <>
            <img src="/banner.png" alt="banner" className={styles.banner} />

            <h1 className={styles.title}>Primeira Next Level Week #NLW</h1>

            <div className={styles.infos}>
                <span className={styles.readTime}>7 min</span>
                <span>12 de jan, 2022</span>
            </div>

            <div className={styles.content}>
                <aside>
                    <button>
                        <TwitterLogo className={styles.twitter} />
                    </button>

                    <button>
                        <LinkedinLogo className={styles.linkedin} />
                    </button>

                    <button>
                        <FacebookLogo className={styles.facebook} />
                    </button>

                    <button>
                        <HandsClapping className={styles.clap} />
                    </button>
                </aside>

                <article>
                    De 01 a 07 de junho de 2020 tivemos a primeira Next Level Week.
                    #NLW 🚀 é uma experiência online com muito conteúdo prático, desafios e hacks que ajuda o dev (Dev é a abreviação de developer, uma palavra que não tem gênero. Ou seja, dev pode ser tanto um programador quanto uma programadora 👨‍🚀👩‍🚀),  a avançar para o próximo nível.
                    A jornada do dev é feita de etapas e de aprendizado contínuo. Dessas etapas exige habilidades e conhecimentos específicos, por isso a melhor forma de acelerar sua evolução é entender exatamente qual é o seu momento, seu contexto e seus objetivos.
                    Na primeira Next Level Week, foram mais de 8 horas de conteúdo técnico, além das lives com os parceiros e comunidade. Mais do que fazer um app bonitão, com código muito top, bem organizado e fullstack (javascript, typescript, node, react, react native, css, html, npm, github, axios, express, celebrate, joi, knex, sqlite3, figma… uffaaa), tivemos algumas lições não-técnicas valiosas para a carreira.
                    Além de conhecer as ferramentas de desenvolvimento precisamos dominá-las, e além disso, precisamos acompanhar as atualizações/evoluções. É muito difícil, para não falar impossível dominar todas as tecnologias e ainda acompanhar suas evoluções, devido ao nosso tempo limitado e que dedicamos também às outras áreas de nossas vidas.
                    Então precisamos de FOCO, escolher uma stack e ficar bom nela e evoluir junto com ela.
                    Opa, mas qual stack? Eita, Depende! 😅
                    Responda pra si, que momento você está vivendo, qual seu contexto, qual seu objetivo?
                    O Diego Fernandes falou em um dos vídeos algo que nos ajuda a responder as perguntas acima:
                    Então em vez de pensar qual tecnologia é melhor, pense qual tecnologia melhor é para você para o seu momento para o seu contexto e para os seus objetivos e para isso agora você precisa fazer algumas perguntas como por exemplo: Que tipo de profissional o mercado está buscando? Quais empresas estão utilizando essa tecnologia? Como que é o ecossistema e as ferramentas ao redor da tecnologia? Qual o tamanho da comunidade que está por trás dessa tecnologia? Essa tecnologia faz sentido para o seu momento de carreira? Quantas oportunidades existem para essa tecnologia? 
                    Quanto que eu posso reaproveitar de conhecimento anterior usando essa tecnologia? Quais são os problemas que essa tecnologia resolve e principalmente aonde eu quero chegar com essa tecnologia?
                    Sim, é um exercício de reflexão e não de codificação. Se seu objetivo é ser desenvolvedor web, iniciante ou quer migrar de carreira, tecnologia, Javascript é uma ótima opção. Todas as tecnologias têm vantagens e desvantagens, resolvem algum problema específico, tem mercado e salários em diversos níveis.
                    Não pense apenas em nível de cidade, estado ou país. Pense de forma global, em qualquer lugar do mundo vai ter alguém precisando de uma sistema web, mobile, ou desktop e ai que você entra.
                    Exemplo, você pode trabalhar apenas com desenvolvimento nativo,  Android ou iOS, ou ir para híbridos e atuar com as duas plataformas (Sistemas Operacionais):
                    Temos então o Ionic, Cordova, Xamarin, Flutter e React Native, talvez poderia colocar aqui o PWA também. Todas essas tecnologias resolvem um problema: entregar software para smartphone, todas tem suas vantagens e desvantagens: complexidade da ferramenta, curva de aprendizado, reuso de código, limitação de plataforma, performance, etc. Coisas que elas têm em comum: Mercado 💰
                    Com Javascript você pode desenvolver para web, mobile, desktop, você pode se descobrir nesse leque de possibilidades na área de desenvolvimento, ou mesmo ser um Full Stack Developer.
                    Experiência te dá velocidade, velocidade vem com a prática e tudo isso é uma questão de FOCO, somado com segurança de sempre estar entregando projetos com mais qualidade.
                </article>
            </div>

            <div className={styles.newsletter}>
                <NewsletterBanner />
            </div>

            <div className={styles.author}>
                <h2>Autor deste post</h2>

                <img 
                    src="/man.jpg" 
                    alt="author" 
                    className={styles.authorImage} 
                />

                <span>Henrique Monteiro</span>

                <div className={styles.social}>
                    <a href="#">
                        <LinkedinLogo weight="fill" className={styles.linkedinLogo} />
                    </a>

                    <a href="#">
                        <GithubLogo weight="fill" className={styles.githubLogo} />
                    </a>
                </div>
            </div>

            <div className={styles.commentsContainer}>
                <h2>Comentários</h2>

                <span>O que achou do post?</span>

                <form>
                    <textarea placeholder="Deixe um comentário..." />

                    <Button title="Comentar" bgColor="green" type="submit" />
                </form>

                <ul>
                    <Comment />

                    <Comment />

                    <Comment />
                </ul>
            </div>
        </>
    );
}


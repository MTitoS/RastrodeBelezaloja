import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Rastro de Beleza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <nav>
        <div className={styles.topnav}>

          <div>
            <a href=""><img src="rdblogo.png" alt="Rastro de Beleza - Logo" /></a>
          </div>
          <div>
          <button><a> Acessórios </a></button>
          <button><a> Baby & Kids </a></button>
          <button><a> Corpo e Saúde </a></button>
          <button><a> Cuidados diários </a></button>
          <button><a> Higiene </a></button>
          <button><a> Pele </a></button>
          <button><a> Mãos </a></button>
          <button><a> Pés </a></button>
          </div>

        </div>
        </nav>

        <div className={styles.headerContainer}>

          <div className={styles.headerTitle}>
          <h1> Rastro de Beleza </h1>
          <p> Deixe seu rastro </p>
          </div>
          
          <img src="makeup.png" alt="MakeUp imagem de fundo"/>

        </div>

        <h2> Por que comprar da Rastro de Beleza?</h2>

        <div className={styles.cards}>

          <div className={styles.firstCard}>
          <img src="batom.png" alt="Imagem de um batom" />
          <h3>Acessórios</h3>
          <p>Compre seus acessórios aqui e espalhe seu rastro de beleza por onde for!</p>
          </div>

          <div className={styles.secondCard}>
          <img src="desodorante.png" alt="Imagem de um desodorante" />
          <h3>Higiene</h3>
          <p>Mantenha sua higiene em dia com os melhores produtos que se encaixam em seu perfil.</p>
          </div>

          <div className={styles.thirdCard}>
          <img src="creme.png" alt="Imagem de um creme" />
          <h3>Cuidados Diários</h3>
          <p>Uma pele bem cuidada é uma pele bonita, com os cremes da Rastro de Beleza você poderá cuidar dela como nunca antes!</p>
          </div>

        </div>

        <h2>Alguns de nossos produtos</h2>
        <div className={styles.products}>
          <a href=""><img src="batom.png" alt="Produtos" /></a>
          <a href=""><img src="desodorante.png" alt="Produtos" /></a>
          <a href=""><img src="batom.png" alt="Produtos" /></a>
          <a href=""><img src="creme.png" alt="Produtos" /></a>
        </div>

        <h2>Produtos mais vendidos</h2>
        <div className={styles.bestSelling}>

          <div>
            <a href=""><img src="batom.png" alt="Produtos" /></a>
            <p>Produto 1</p>
          </div>

          <div>
            <a href=""><img src="desodorante.png" alt="Produtos" /></a>
            <p>Produto 2</p>
          </div>

          <div>
            <a href=""><img src="batom.png" alt="Produtos" /></a>
            <p>Produto 3</p>
          </div>

        </div>
        <footer className={styles.footer}>
          <div className={styles.footLeft}>
          <ul>
          <li><a href=""> Acessórios </a></li>
          <li><a href=""> Baby & Kids </a></li>
          <li><a href=""> Corpo e Saúde </a></li>
          <li><a href=""> Cuidados diários </a></li>
          <li><a href=""> Higiene </a></li>
          <li><a href=""> Pele </a></li>
          <li><a href=""> Mãos </a></li>
          <li><a href=""> Pés </a></li>
          </ul>
          </div>
          <div className={styles.footMid}>
          <h3>CONTATO</h3>
          <p>Telefone <br />
          12-34567890</p>
          </div>
          <div className={styles.footRight}>
          <h3>ENDEREÇO</h3>
          <p>Rua Brasil <br />- Jardim Brasil</p>
          </div>
        </footer>

    </div>
  )
}

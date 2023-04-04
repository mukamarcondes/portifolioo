import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './Contatos.css'

function Contatos() {
    return(
        <div className="m">
            <Header />

            <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
            GITHUB        
        </div>

        <div class="ag-courses-item_date-box">
          Link: 
          <span class="ag-courses-item_date">
          <a className="a" href="https://github.com/mukamarcondes"> github.com/mukamarcondes</a>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          GMAIL
        </div>

        <div class="ag-courses-item_date-box">
          Link:
          <span class="ag-courses-item_date">
          <a className="a" href="mailto:mukasilva26@gmail.com"> mukasilva26@gmail.com</a>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          LINKEDIN
        </div>

        <div class="ag-courses-item_date-box">
          Link:
          <span class="ag-courses-item_date">
            <a className="a" href="https://www.linkedin.com/in/murilo-marcondes-34192022a/"> www.linkedin.com/in/murilo-marcondes-34192022a/</a>
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          INSTAGRAN
        </div>

        <div class="ag-courses-item_date-box">
          Link:
          <span class="ag-courses-item_date">
            <a className="a" href="https://www.instagram.com/muri.marcondes/"> muri.marcondes</a>
          </span>
        </div>
      </a>
    </div>

  </div>
</div>



    {/* <div class="card">
      <div class="img-bx">
        <img src="https://static.vecteezy.com/ti/fotos-gratis/p1/4525039-binario-codigo-fundo-abstrato-tecnologia-digital-binario-dados-e-seguro-dados-conceito-gratis-foto.jpg" alt="img" />
      </div>
      <div class="content">
        <div class="detail">
          <h2>Murilo Marcondes<br /><span>Programming Student</span></h2>
          <ul class="sci">
            <li className="um">
              <a href="https://github.com/mukamarcondes" target="_blank"><i class="fab fa-facebook-f"></i><img src="https://img.icons8.com/ios-filled/256/github.png" style={{width:50, height:50}} alt="" /></a>
            </li>
            <li className="dois">
              <a href="mailto:mukasilva26@gmail.com"target="_blank" ><i class="fab fa-twitter"></i><img src="https://img.icons8.com/ios-filled/256/gmail.png" style={{width:50, height:50}} alt="" /></a>
            </li>
            <li className="tres">
              <a href="https://www.linkedin.com/in/murilo-marcondes-34192022a/" target="_blank" ><i class="fab fa-linkedin-in"></i><img src="https://img.icons8.com/ios/256/linkedin-circled.png" style={{width:50, height:50}} alt="" /></a>
            </li>
            <li className="quatro">
              <a href="https://www.instagram.com/muri.marcondes/" target="_blank" ><i class="fab fa-instagram"></i><img src="https://img.icons8.com/ios/256/instagram-new.png" style={{width:50, height:50}} alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
 */}


            <Footer />
        </div>
    );
}

export default Contatos;
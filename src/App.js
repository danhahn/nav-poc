import React, { Component } from 'react';
import logo from './logo.svg';
import PrimaryNav from './containers/PrimaryNav';
import './App.css';
import data from './data/raw.json';
import { transformData } from './utils/transform-blob';
import { connect } from "react-redux";
import {
  loadNavData
} from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.loadDataToState(transformData(data));
  }
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PrimaryNav exitDelay={100000000}/>
        <article className="App-intro">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tenetur deleniti mollitia quia voluptatibus nisi omnis, suscipit
            laboriosam, nulla ratione expedita deserunt fugit. Distinctio
            repudiandae hic, debitis voluptates impedit veniam dolores
            perspiciatis pariatur, labore iusto aliquam? Unde vitae a quidem
            fugiat reiciendis nam dolores! A quas vitae incidunt, atque
            eaque error voluptatum libero unde magni nam eum. Laboriosam
            repellat voluptatibus illum, itaque esse dolore nobis
            dignissimos quia magni molestias placeat obcaecati assumenda.
            Debitis consectetur, quod consequatur molestias consequuntur
            nisi quis quo temporibus. Maxime possimus quas facilis nostrum
            autem cupiditate magnam, delectus esse totam a repellendus,
            repellat nihil, quos minus adipisci!
          </p>
          <p>
            Cupiditate atque consequuntur error sunt voluptate commodi,
            libero dignissimos quas harum, incidunt accusantium
            exercitationem numquam delectus accusamus cum sequi, quibusdam
            veritatis maxime ratione? Dolorum in non natus quia sunt quos
            optio? Optio facere magni nemo unde nam. Itaque voluptatum illo
            quo reprehenderit soluta voluptate. Qui id, amet in quia quas
            explicabo rem reprehenderit est molestias obcaecati facere illo,
            corporis, dolores similique fugit impedit quae veritatis officia
            neque cumque praesentium laboriosam earum. Ipsum, assumenda
            corrupti quas tenetur voluptatem vitae reiciendis. Nihil
            nesciunt exercitationem iure, quasi illum odit quod impedit cum
            accusamus inventore architecto! Doloremque voluptas distinctio
            sapiente eius incidunt ullam perspiciatis.
          </p>
          <p>
            Similique voluptatibus saepe eum ipsa, aperiam corporis nisi
            placeat facere, a voluptatum molestias nesciunt asperiores vero
            neque voluptates laborum deserunt culpa corrupti temporibus odit
            aspernatur animi repellat accusantium? Quisquam quas repellendus
            dolorum iure, perspiciatis dolore eligendi porro consequatur
            facilis nostrum accusantium assumenda nulla provident aperiam
            accusamus et veniam aspernatur temporibus architecto eveniet
            aliquid aut fugiat corrupti. Cupiditate quae natus consequuntur,
            minus repellat, voluptate eveniet, culpa quibusdam provident
            alias libero iure dolore facere voluptatem illo eligendi atque
            dolorum nostrum sequi numquam possimus! Dolorem, eveniet vel?
            Quae soluta consequuntur fuga nihil laborum deleniti autem unde
            numquam, sequi hic nulla et vero qui!
          </p>
          <p>
            Neque dolore, cupiditate ullam ab unde labore minus magni
            aspernatur id voluptatum maiores adipisci laudantium, nam nemo!
            Harum earum fugiat placeat saepe illo itaque optio enim iusto
            impedit omnis. Animi necessitatibus est consectetur sunt
            repudiandae natus tempora non deserunt, nemo voluptatem
            repellendus cum harum amet minus eaque, quisquam mollitia
            expedita maiores aut ut. Voluptates quia voluptatum sunt
            incidunt, doloribus minus provident officiis at fugit eveniet.
            Blanditiis nobis molestiae similique voluptates accusantium
            provident ipsa delectus consectetur numquam nihil totam nostrum
            neque, suscipit laudantium quia, iure voluptatem perferendis,
            aliquam rem pariatur ab? Ex obcaecati est officiis tempore sed
            facilis illo nihil cumque?
          </p>
        </article>
      </div>;
  }
}

const mapStateToProps = state => ({
  items: state.navigation.rawNavData,
});

const mapDispatchToProps = dispatch => ({
  loadDataToState: data => dispatch(loadNavData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

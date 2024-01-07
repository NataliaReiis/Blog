import imageTest from "../assets/gato-test.jpg";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import Menu from '../components/Menu'
export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src={imageTest} alt="" />
        <div className="user">
          <img src={imageTest} alt="" />
          <div className="info">
            <span>Nat</span>
            <p>Postado a 2 dias atrás</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <CiEdit />
            </Link>
            <MdDelete />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam
          optio assumenda vitae alias adipisci temporibus h
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          laudantium error vitae ullam doloremque? Dolores, incidunt dolorem,
          consequuntur non minus earum, veniam nobis sunt et quam perferendis
          aut explicabo quasi. Lorem ipsum dolor sit amet consectetur
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perferendis commodi architecto expedita sapiente placeat earum dolorum, quos quaerat possimus, labore magni maxime culpa delectus doloribus eos unde nostrum. Eaque!</p>
          adipisicing elit. Voluptate quia voluptatibus porro architecto. Fugit
          accusantium nemo mollitia rem possimus cum ullam voluptatum nihil
          adipisci? Dicta ex eum deleniti ipsa accusamus! Lorem{" "}
          <p>
            ipsum dolor sit amet, consectetur adipisicing elit. Deserunt debitis
            aperiam, consectetur explicabo odit blanditiis! Repudiandae ipsam
            itaque quos eum, molestias accusamus. Tempore modi reiciendis libero
            necessitatibus perspiciatis dignissimos dolorum? Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Natus accusamus voluptatum
            doloremque aspernatur aliquam debitis eveniet a, eum omnis expedita
            soluta quae qui quia autem consectetur vel saepe laboriosam. Error.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            illo soluta eaque laudantium, aliquam commodi porro sunt pariatur
            esse eligendi ipsam sit, enim repellendus molestias sint nam
            inventore quo quidem!
          </p>
        </p>
      </div>

     <Menu />
    </div>
  );
}

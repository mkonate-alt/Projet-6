import data from "../../Data/dataLogement.json";
import Carousel from "../../Components/Carousel/Carousel";
import "./Logement.css";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";
import Dropdown from './../../Components/Dropdown/Dropdown';
import TagName from './../../Components/TagName/TagName';
import Host from './../../Components/Host/Host';
import Stars from '../../Components/Stars/Stars';
import  React  from 'react';



function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  if (!logement) return <Error />;

  const { title, description, pictures, equipments, tags, location, host, rating } = logement;

  return (
    <main className="logement">
      <Carousel photos={pictures} />

      <section className="info-logement-part-1 flex-between">
        <div>
          <h1 className="logement__title">{title}</h1>
          <h2 className="logement__location">{location}</h2>
          <TagName className="logement__tagName" tags={tags} />
        </div>
        
        <div className="flex-reverse">
          <Host className="logement__host" name={host.name} picture={host.picture}/>
          <Stars className="logement__rating" rating={rating}/>
        </div>
      </section>

      <section className="info-logement-part-2 flex">
        <Dropdown className="logement__dropdownDescription" title="Description" content = {description} page="logement"/>
        <Dropdown className="logement__dropdownEquipements" title="Equipements" content = {equipments} page="logement"/>
      </section>
      
    </main>
  );
}

export default Logement;